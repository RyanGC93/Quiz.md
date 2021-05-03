from flask.cli import AppGroup
from .users import seed_users, undo_users
from .demo_questions.repo_one import seed_example_one_questions
from .demo_questions.repo_two import seed_example_two_questions
from .demo_questions.repo_three import seed_example_three_questions
from .demo_questions.repo_four import seed_example_four_questions
from .demo_questions.repo_five import seed_example_five_questions
# from .demo_questions.repo_six import seed_example_six_questions

from .questions_repo import seed_questions_repo, undo_questions_repo
from .questions import seed_questions, undo_questions
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
# Seed With Proper Data
@seed_commands.command('questions')
def seed_demo():
    # seed_questions_repo()
    seed_example_one_questions()
    seed_example_two_questions()
    seed_example_three_questions()
    seed_example_four_questions()
    seed_example_five_questions()
    # seed_example_six_questions()

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_questions_repo()
    # seed_questions()
    seed_example_one_questions()
    seed_example_two_questions()
    seed_example_three_questions()
    seed_example_four_questions()
    seed_example_five_questions()
    


    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_questions_repo()
    undo_questions()


    # Add other undo functions here
