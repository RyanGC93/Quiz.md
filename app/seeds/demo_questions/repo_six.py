from app.models import db, Questions

example_repo_id = 5

question_one=''' What Is Automation Testing?
'''
question_two='''When will you automate a test?
'''
question_three='''
When will you not automate testing?
'''
question_four=''' What are the steps involved in the Automation Process?`'''
question_five='''What are the points that are covered while planning phase of automation?'''
question_six='''In what condition we cannot use automation testing for the Agile method?'''
question_seven='''What are the primary features of good automation tool?'''

answer_one='''
Automation Testing is a technique using an automation tool to write and execute tester's test scripts and cases.

The main goal of Automation Testing is to reduce the number of test cases to be run manually and not eliminate Manual Testing altogether.'''
answer_two='''Automation in preferred in following cases

Repetitive Tasks
Smoke and Sanity Tests
Test with multiple data set
Regression test cases
'''
answer_three='''One should not automate in following cases

When the Application Under Test changes frequently
One time test cases
Adhoc – Random testing'''
answer_four='''In the automation process, steps involved are

Selecting the Test tool
Define scope of automation
Planning, design, and development
Test execution
Maintenance'''
answer_five='''During planning phase of automation things which must be taken in concern are

Selection the "right" Automation tool
Selection Automation Framework if any
List of In scope and out of scope items for automation
Test Environment Setup
Preparing Grant Chart of Project timelines for test script development & execution.
Identify Test Deliverables'''
answer_six='''Automation testing is not useful for agile methods in following conditions

When Agile testing always ask for changes in requirements
When Exhaustive level of documentation is required in Agile
Only suitable for those regression tests during agile testing like continuous integration'''
answer_seven='''Test Environment support and easy to use
Good debugging facility
Robust object identification
Object and Image testing abilities
Object identification
Testing of database
Support multiple frameworks'''



# ! Markdown Examples
def seed_example_six_questions():
    seed_list = [
        Questions(repo_id=example_repo_id,question=question_one,answer=answer_one),
        Questions(repo_id=example_repo_id,question=question_two,answer=answer_two),
        Questions(repo_id=example_repo_id,question=question_three,answer=answer_three),
        Questions(repo_id=example_repo_id,question=question_four,answer=answer_four),
        Questions(repo_id=example_repo_id,question=question_five,answer=answer_five),
        Questions(repo_id=example_repo_id,question=question_six,answer=answer_six),
        Questions(repo_id=example_repo_id,question=question_seven,answer=answer_seven),
    ]
    db.session.add_all(seed_list)
    db.session.commit()