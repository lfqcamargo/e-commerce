from fastapi import Depends
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List, Optional

from api.modules.users.services.user_service import UserService
from api.shared.database.dependencies import get_db
from api.modules.users.models.User import User
from api.shared.exceptions.user_exceptions import UserNotFoundException

class UserController:
    def __init__(self, session: AsyncSession = Depends(get_db)):
        self.user_service = UserService(session)
        
    async def get_all_users(self, skip: int = 0, limit: int = 10, active: Optional[bool] = None) -> List[User]:
        users = await self.user_service.find_all_users(skip=skip, limit=limit, active=active)
        
        if not users:
            raise UserNotFoundException()
        return users