import uuid
from typing import Annotated, Optional
from pydantic import BaseModel, Field, EmailStr
from datetime import datetime

class AddressRequest(BaseModel):
    userId: Annotated[Optional[str], Field(min_length=11, max_length=11, description="CPF must be exactly 11 characters.")]
    country: Annotated[str, Field(min_length=2, max_length=2, description="Country code must be 2 characters.")]
    state: Annotated[str, Field(min_length=2, max_length=2, description="State code must be 2 characters.")]
    road: Annotated[str, Field(min_length=5, max_length=100, description="Road name must be between 5 and 100 characters.")]
    neighborhood: Annotated[Optional[str], Field(max_length=100, description="Neighborhood name can be up to 100 characters.")]
    number: Annotated[Optional[str], Field(max_length=100, description="Number can be up to 100 characters.")]
    complement: Annotated[Optional[str], Field(min_length=10, max_length=50, description="Complement must be between 10 and 50 characters.")]

    class Config:
        orm_mode = True

class AddressResponse(BaseModel):
    id: int
    userId: uuid.UUID
    country: str
    state: str
    road: str
    neighborhood: Optional[str]
    number: Optional[str]
    complement: Optional[str]

    class Config:
        orm_mode = True
