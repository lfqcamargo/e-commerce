"""Create Address

Revision ID: 13d3d5ec7cdc
Revises: 87a1b70c2ea3
Create Date: 2024-05-19 13:28:04.570612

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '13d3d5ec7cdc'
down_revision: Union[str, None] = '87a1b70c2ea3'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('users_id', sa.UUID(), nullable=False),
    sa.Column('users_cod_cpf', sa.String(length=11), nullable=False),
    sa.Column('users_email', sa.String(length=45), nullable=False),
    sa.Column('users_nam', sa.String(length=100), nullable=False),
    sa.Column('users_has_password', sa.String(length=255), nullable=False),
    sa.Column('users_ind_active', sa.Boolean(), nullable=False),
    sa.Column('users_dat_created', sa.DateTime(timezone=True), nullable=False),
    sa.Column('users_dat_login', sa.DateTime(timezone=True), nullable=True),
    sa.PrimaryKeyConstraint('users_id')
    )
    op.create_index(op.f('ix_users_users_cod_cpf'), 'users', ['users_cod_cpf'], unique=True)
    op.create_index(op.f('ix_users_users_email'), 'users', ['users_email'], unique=True)
    op.create_index(op.f('ix_users_users_nam'), 'users', ['users_nam'], unique=False)
    op.create_table('uende',
    sa.Column('uende_num_seq', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('users_id', sa.UUID(), nullable=False),
    sa.Column('uende_cod_country', sa.String(length=2), nullable=False),
    sa.Column('uende_cod_state', sa.String(length=2), nullable=False),
    sa.Column('uende_nam_road', sa.String(length=100), nullable=False),
    sa.Column('uende_nam_neighb', sa.String(length=100), nullable=False),
    sa.Column('uende_cod_number', sa.String(length=100), nullable=False),
    sa.Column('uende_cod_comple', sa.String(length=50), nullable=False),
    sa.ForeignKeyConstraint(['users_id'], ['users.users_id'], ),
    sa.PrimaryKeyConstraint('uende_num_seq')
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('uende')
    op.drop_index(op.f('ix_users_users_nam'), table_name='users')
    op.drop_index(op.f('ix_users_users_email'), table_name='users')
    op.drop_index(op.f('ix_users_users_cod_cpf'), table_name='users')
    op.drop_table('users')
    # ### end Alembic commands ###