from api.shared.database.connection import async_session

async def get_db():
    """
    Provides a database session.

    Yields:
        AsyncSession: The database session.
    """
    async with async_session() as session:
        try:
            yield session
        finally:
            await session.close()
