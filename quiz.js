var rs= require('readline-sync');
var username=rs.question("May I have your name ");
console.log("Hey "+username+" !! How Well Do You Know Me ??")
var score=0;
function personal(question,answer){
  var username=rs.question(question);
  if(username==answer){
    console.log("Right")
    score=score+1;

  }
  else{
    console.log("Wrong")
  }
}
questions=[{
  question:`What is my favourite colour?
  a: blue
  b: black
  c: white
  d: red\n`,
  answer:"b"
},
{
  question:`Who is my favourite superhero?
  a: Superman
  b: Ironman
  c: The Hulk
  d: Captain America\n`,
  answer:"d"},

{
  question:`Which is my favoritr sport to watch?
  a: Baseball
  b: Football
  c: Cricket
  d: Tennis\n`,
  answer:"c"
},
{
  question:`What is my favourite food?
  a: Pizza
  c: Biryani\n`,
  answer:"c"
}]
for(var i=0;i<questions.length;i++){
  current=questions[i];
  personal(current.question,current.answer)
}
console.log("Your score is "+score)
console.log("Thank You !!!")
console.log("--------------------------------")