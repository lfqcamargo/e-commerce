import uuid
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, Boolean, DateTime, func
from datetime import datetime

from api.shared.database.connection import Base

class User(Base):
    __tablename__ = "users"

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, name="users_id")
    cpf: Mapped[str] = mapped_column(String(11), nullable=False, index=True, unique=True, name="users_cod_cpf")
    email: Mapped[str] = mapped_column(String(45), nullable=False, index=True, unique=True, name="users_email")
    name: Mapped[str] = mapped_column(String(100), nullable=False, index=True, name="users_nam")
    password: Mapped[str] = mapped_column(String(255), nullable=False, name="users_has_password")
    active: Mapped[bool] = mapped_column(Boolean, nullable=False, default=True, name="users_ind_active")
    dateCreated: Mapped[datetime] = mapped_column(DateTime, nullable=False, default=func.now(), name="users_dat_created")
    dateLogin: Mapped[datetime] = mapped_column(DateTime, nullable=True, name="users_dat_login")
    
        