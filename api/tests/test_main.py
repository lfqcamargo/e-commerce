import pytest
from httpx import AsyncClient, ASGITransport
from fastapi import status
from api.main import app

@pytest.mark.asyncio
async def test_welcome_message() -> None:
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as client:
        response = await client.get("/")
        body = response.json()
        assert response.status_code == status.HTTP_200_OK
        assert body["message"] == "Welcome to E-Commerce!"