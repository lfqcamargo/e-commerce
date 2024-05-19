import os
from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from dotenv import load_dotenv
from api.shared.database.connection import async_session

load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/")

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

async def get_current_user(token: str = Depends(oauth2_scheme)):
    """
    Retrieves the current user based on the JWT token.

    Args:
        token (str): The JWT token from the Authorization header.

    Returns:
        Dict[str, Union[str, int]]: The payload from the decoded JWT token.

    Raises:
        HTTPException: If the token is invalid, expired, or has invalid claims.
    """
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token has expired")
    except jwt.JWTClaimsError:
        raise HTTPException(status_code=401, detail="Invalid token claims")
    except JWTError:
        raise HTTPException(status_code=401, detail="Invalid token")
