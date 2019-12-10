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