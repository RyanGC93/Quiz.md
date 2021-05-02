# Markdown Examples
from app.models import db, Questions

example_repo_id = 1
question_one ='''Example of Headers''' 

answer_one ='''# Heading level 1		
Heading level 1

## Heading level 2
Heading level 2

### Heading level 3	
Heading level 3

#### Heading level 4	
Heading level 4

##### Heading level 5
	
Heading level 5
###### Heading level 6
''' 

question_two ='''Example of Bold''' 
answer_two ='''
I just love \*\*\*bold text***
Not Formatted:I just love \*\*\*bold text***
I just love _bold text_.
Not Formatted:I just love \_bold text_.
Love**is**bold
Not Formatted:Love\**is**bold
''' 

question_three ='''Example of Lists''' 
answer_three ='''### Ordered List
1. First Item

### UnOrder List
- Unordered one 

**Not Formatted** \- Unordered one 
* Unordered three

**Not Formatted** \* Unordered two 

+ Unordered three

**Not Formatted** \+ Unordered three ''' 

question_four ='''url expression''' 
answer_four ='''<somebbob@example.com>''' 


question_five='''text url expression''' 
answer_five='''
[like this](http://someurl)''' 
question_six ='''titled text url expression
''' 
answer_six ='''
[like this](http://someurl "this title shows up when you hover")
''' 
question_seven ='''reference link''' 
answer_seven ='''You can also put the [link URL][1] below the current paragraph
like [this][2].
[1]: http://url
[2]: http://another.url "A funky title" this = []''' 

question_eight ='''artifact link''' 
answer_eight ='''
[MyWikiPage] # Wiki - name of wiki page`''' 

question_nine ='''user mention
''' 
answer_nine ='''@test-user-1'''

question_ten ='''blockquote''' 
answer_ten ='''> Use it if you're quoting a person, a song or whatever.''' 

question_eleven ='''Checklist''' 
answer_eleven ='''
- [ ] this is not checked
- [ ] this is too
- [x] but this is checked''' 

question_twelve ='''Table''' 
answer_twelve ='''First Header | Second Header
------------- | -------------
Content Cell | Content Cell
Content Cell | Content Cell''' 

question_thirteen ='''Image''' 
answer_thirteen ='''
![alternate text](https://sourceforge.net/images/icon_linux.gif)''' 

question_fourteen ='''Code Highlighting''' 
answer_fourteen =''':::python
import abc''' 
# ! Markdown Examples
def seed_example_one_questions():
    seed_list = [
        Questions( repo_id=example_repo_id, question=question_one, answer=answer_one),
        Questions( repo_id=example_repo_id, question=question_two, answer=answer_two),
        Questions( repo_id=example_repo_id, question=question_three, answer=answer_three),
        Questions( repo_id=example_repo_id, question=question_four, answer=answer_four),
        Questions( repo_id=example_repo_id, question=question_five, answer=answer_five),
        Questions( repo_id=example_repo_id, question=question_six, answer=answer_six),
        Questions( repo_id=example_repo_id, question=question_seven, answer=answer_seven),
        Questions( repo_id=example_repo_id, question=question_eight, answer=answer_eight),
        Questions( repo_id=example_repo_id, question=question_nine, answer=answer_nine),
        Questions( repo_id=example_repo_id, question=question_ten, answer=answer_ten),
        Questions( repo_id=example_repo_id, question=question_eleven, answer=answer_eleven),
        Questions( repo_id=example_repo_id, question=question_twelve, answer=answer_twelve),
        Questions( repo_id=example_repo_id, question=question_thirteen, answer=answer_thirteen),
        Questions( repo_id=example_repo_id, question=question_fourteen, answer=answer_fourteen),
    ]
    db.session.add_all(seed_list)
    db.session.commit()

        