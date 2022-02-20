"""empty message

Revision ID: 104e40c51b47
Revises: 2807edd385a2
Create Date: 2022-02-20 15:46:39.314139

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '104e40c51b47'
down_revision = '2807edd385a2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'password',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=256),
               existing_nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'password',
               existing_type=sa.String(length=256),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
    # ### end Alembic commands ###