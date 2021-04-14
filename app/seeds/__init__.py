from flask.cli import AppGroup
from .users import seed_users, undo_users
from .questions_repo import seed_questions_repo, undo_questions_repo
from .questions import seed_questions, undo_questions
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_questions_repo()
    seed_questions()

    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_questions_repo()
    undo_questions()

    # Add other undo functions here
