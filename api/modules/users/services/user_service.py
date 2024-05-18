from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List, Optional
from api.modules.users.models.User import User

class UserService:
    def __init__(self, session: AsyncSession):
        self.session = session

    async def find_all_users(self, skip: int = 0, limit: int = 10, active: Optional[bool] = None) -> List[User]:
        query = select(User)
        if active is not None:
            query = query.where(User.active == active)
        query = query.offset(skip).limit(limit)
        
        async with self.session.begin():
            result = await self.session.execute(query)
            return result.scalars().all()