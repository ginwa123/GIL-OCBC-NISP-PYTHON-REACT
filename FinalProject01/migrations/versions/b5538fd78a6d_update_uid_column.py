"""update uid column

Revision ID: b5538fd78a6d
Revises: b937121a834e
Create Date: 2021-12-27 19:59:42.636912

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b5538fd78a6d'
down_revision = 'b937121a834e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('movies', schema=None) as batch_op:
        batch_op.create_unique_constraint("uid_movie", ['uid'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('movies', schema=None) as batch_op:
        batch_op.drop_constraint("uid_movie", type_='unique')

    # ### end Alembic commands ###