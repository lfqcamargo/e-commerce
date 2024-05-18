import sys
import os
import asyncio
from pathlib import Path
import pytest
from httpx import AsyncClient, ASGITransport
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker
from api.main import app
from api.shared.database.connection import Base
from api.shared.database.dependencies import get_db
from typing import AsyncGenerator

# Adicione o diretório raiz do projeto ao sys.path
root_dir = Path(__file__).resolve().parent.parent.parent
sys.path.append(str(root_dir))

os.environ["TESTING"] = "true"

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite+aiosqlite:///./testdb.sqlite")

engine = create_async_engine(DATABASE_URL, echo=True)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine, expire_on_commit=False, class_=AsyncSession)

async def override_get_db():
    async with TestingSessionLocal() as session:
        yield session

app.dependency_overrides[get_db] = override_get_db

@pytest.fixture(scope='function')
async def client() -> AsyncGenerator[AsyncClient, None]:
    async def init_db():
        async with engine.begin() as conn:
            await conn.run_sync(Base.metadata.drop_all)
            await conn.run_sync(Base.metadata.create_all)
    await init_db()

    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as c:
        yield c

    async def drop_db():
        async with engine.begin() as conn:
            await conn.run_sync(Base.metadata.drop_all)
    await drop_db()

@pytest.fixture(scope='function')
async def db_session():
    async with TestingSessionLocal() as session:
        async with session.begin():
            yield session
        await session.close()

@pytest.fixture(scope="session")
def event_loop():
    loop = asyncio.get_event_loop_policy().new_event_loop()
    yield loop
    loop.close()
