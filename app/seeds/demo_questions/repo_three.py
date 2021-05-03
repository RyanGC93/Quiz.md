# Javascript Basics
from app.models import db, Questions

example_repo_id = 3

question_one ='''On page script''' 
answer_one ='''```js<script type="text/javascript">  ...
</script>
```''' 

question_two ='''Include external JS file ''' 
answer_two ='''```js
<script src="filename.js"></script>
```''' 

question_three ='''Delay - 1 second timeout ''' 
answer_three ='''```js
setTimeout(function () {

}, 1000);
```''' 

question_four ='''Functions ''' 
answer_four ='''```js
function addNumbers(a, b) {
return a + b; ;
}
x = addNumbers(1, 2);
```''' 


question_five='''Edit DOM element ''' 
answer_five='''```js
document.getElementById("elementID").innerHTML = "Hello World!";
```''' 
question_six ='''Output
''' 
answer_six ='''```js
console.log(a);             // write to the browser console
document.write(a);          // write to the HTML
alert(a);                   // output in an alert box
confirm("Really?");         // yes/no dialog, returns true/false depending on user click
prompt("Your age?","0");    // input dialog. Second argument is the initial value
````''' 
question_seven ='''Comments ''' 
answer_seven ='''```js
/* Multi line
comment */
// One line
````''' 

question_eight ='''For Loop
 ''' 
answer_eight ='''```js
for (var i = 0; i < 10; i++) {
document.write(i + ": " + i*3 + "<br />");
}
var sum = 0;
for (var i = 0; i < a.length; i++) {
sum + = a[i];
}               // parsing an array
html = "";
for (var i of custOrder) {
html += "<li>" + i + "</li>";
}
````''' 

question_nine ='''While Loop
''' 
answer_nine ='''```js
var i = 1;                      // initialize
while (i < 100) {               // enters the cycle if statement is true
i *= 2;                     // increment to avoid infinite loop
document.write(i + ", ");   // output
}
````''' 

question_ten ='''Do While Loop ''' 
answer_ten ='''```js
var i = 1;                      // initialize
do {                            // enters cycle at least once
i *= 2;                     // increment to avoid infinite loop
document.write(i + ", ");   // output
} while (i < 100)               // repeats cycle if statement is true at the end
````'''  

question_eleven ='''Break''' 
answer_eleven ='''```js
for (var i = 0; i < 10; i++) {
if (i == 5) { break; }          // stops and exits the cycle
document.write(i + ", ");       // last output number is 4
}
````''' 

question_twelve ='''Continue''' 
answer_twelve ='''```js
for (var i = 0; i < 10; i++) {
if (i == 5) { continue; }       // skips the rest of the cycle
document.write(i + ", ");       // skips 5
}
````''' 


# ! Markdown Examples
def seed_example_three_questions():
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
    ]
    db.session.add_all(seed_list)
    db.session.commit()

        