from fastapi import APIRouter, Depends, status
from sqlalchemy.ext.asyncio import AsyncSession
from api.shared.utils.utils import create_access_token
from api.shared.database.dependencies import get_db

from api.modules.users.interface.token_interface import TokenRequest, TokenResponse
from api.modules.users.services.auth_service import AuthService
from api.shared.exceptions.auth_exceptions import InvalidCredentialsException

router = APIRouter()

@router.post("/", response_model=TokenResponse, status_code=status.HTTP_200_OK, summary="User Login", tags=["auth"])
async def authenticate(user: TokenRequest, db: AsyncSession = Depends(get_db)) -> TokenResponse:
    """
    Authenticate a user and return a JWT token.

    Args:
        user (TokenRequest): The user login credentials.
        db (AsyncSession): The database session.

    Returns:
        TokenResponse: The access token and its type.

    Raises:
        InvalidCredentialsException: If the email or password is incorrect.
    """    
    auth_service = AuthService(db)
    try: 
        await auth_service.authenticate_user(user.email, user.password)
    except InvalidCredentialsException:
        raise InvalidCredentialsException

    access_token = create_access_token(data={"sub": user.email})
    return TokenResponse(access_token=access_token, token_type="bearer")
