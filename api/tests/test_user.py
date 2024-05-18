import pytest
from httpx import AsyncClient
from fastapi import status
from api.main import app

@pytest.mark.asyncio
async def test_find_all_users_not_found() -> None:
    async with AsyncClient(app=app, base_url="http://test") as client:
        response = await client.get("/users/")
        assert response.status_code == status.HTTP_404_NOT_FOUND
        assert response.json() == {"detail": "User not found"}
