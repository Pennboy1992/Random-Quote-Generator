'use strict';

var quoteField = document.getElementById('quoteField');
var author = document.getElementById('authorField');
var btn = document.getElementById('btn');

var quotes = [
{ 
  word: "But that was life: Nobody got a guided tour to their own theme park. You had to hop on the rides as they presented themselves, never knowing whether you would like the one you were in line for...or if the bastard was going to make you throw up your corn dog and your cotton candy all over the place.",
  author: "-J.R. Ward"
},
{ 
  word: "I have no special talent. I am only passionately curious.",
  author: "-Albert Einstein"
},
{ 
  word: "If you judge people, you have no time to love them.",
  author: "-Mother Teresa"
},
{
  word: "Stay hungry, stay foolish.",
  author: "-Steve Jobs"
},
{
  word: "The greatest wealth is to live content with little.",
  author: "-Plato"
},
{
  word: "The future belongs to those who prepare for it today. ",
  author: "-Malcom X"
},
{
  word: "The successful warrior is the average man, with laser-like focus.",
  author: "-Bruce Lee"
},
{
  word: "A great man is always willing to be little.",
  author: "-Ralph Waldo Emmerson"
},
{
  word: "It always seems impossible until it’s done.",
  author: "-Nelson Mandela"
},
{
  word: "The unexamined life is not worth living.",
  author: "-Socrates"
}
];

quoteField.innerHTML= quotes[0].word;
author.innerHTML= quotes[0].author;

function newQuote(){
  var quoteNum = Math.floor(Math.random() * quotes.length) ;
  console.log(quoteNum);
  quoteField.innerHTML = quotes[quoteNum].word;
  author.innerHTML = quotes[quoteNum].author;
  console.log('clicked');
}

btn.addEventListener('click',newQuote);

console.log(quotes[0]);