"""from __future__ import annotations
from typing import TYPE_CHECKING
import uuid
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import String, Integer, ForeignKey
from api.shared.database.connection import Base

if TYPE_CHECKING:
    from api.modules.users.models.User import User

class Address(Base):
    __tablename__ = "uende"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True, name="uende_num_seq")
    userId: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), ForeignKey("users.users_id"), nullable=False, name="users_id")
    country: Mapped[str] = mapped_column(String(2), nullable=False, name="uende_cod_country")
    state: Mapped[str] = mapped_column(String(2), nullable=False, name="uende_cod_state")
    road: Mapped[str] = mapped_column(String(100), nullable=False, name="uende_nam_road")
    neighborhood: Mapped[str] = mapped_column(String(100), nullable=False, name="uende_nam_neighb")
    number: Mapped[str] = mapped_column(String(100), nullable=False, name="uende_cod_number")
    complement: Mapped[str] = mapped_column(String(50), nullable=False, name="uende_cod_comple")

    user: Mapped[User] = relationship("User", back_populates="addresses")
"""