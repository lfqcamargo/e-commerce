import pytest
from httpx import AsyncClient
from fastapi import status

@pytest.mark.asyncio
async def test_find_all_users_not_found(client: AsyncClient) -> None:
    """
    Test the behavior when no users are found.

    This test checks that the endpoint returns a 404 status code
    and the correct error message when no users are found.
    """
    response = await client.get("/users/")
    assert response.status_code == status.HTTP_404_NOT_FOUND
    assert response.json() == {"detail": "User not found"}


@pytest.mark.asyncio
async def test_create_new_user(client: AsyncClient) -> None:
    """
    Test the creation of a new user.

    This test checks that a new user can be successfully created,
    and that the response contains the correct user data.
    """
    new_user = {
        "email": "newuser@example.com",
        "cpf": "12345678911",
        "password": "securepassword",
        "name": "New User",
        "active": True
    }

    response = await client.post("/users/", json=new_user)
    
    assert response.status_code == status.HTTP_201_CREATED

    body = response.json()
    assert body["email"] == new_user["email"]
    assert body["name"] == new_user["name"]
    assert body["active"] == new_user["active"]
