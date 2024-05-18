import pytest
from httpx import AsyncClient
from fastapi import status

@pytest.mark.asyncio
async def test_welcome_message(client: AsyncClient) -> None:
    """
    Test the welcome message from the root endpoint.

    This test checks that the root endpoint returns a 200 OK status
    and the correct welcome message.
    """
    response = await client.get("/")
    body = response.json()
    assert response.status_code == status.HTTP_200_OK
    assert body["message"] == "Welcome to E-Commerce!"
