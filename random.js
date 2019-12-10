'use strict';

var body = document.body.style;

var quoteField = document.getElementById('quoteField');

var quotes = [
{ word: "But that was life: Nobody got a guided tour to their own theme park. You had to hop on the rides as they presented themselves, never knowing whether you would like the one you were in line for...or if the bastard was going to make you throw up your corn dog and your cotton candy all over the place.",
author: "-J.R. Ward"

},
{
},
{
}
]

// console.log(quotes[0].word)

// function printQuote(arr){
//   let q = 0;
//   let str = "";
//   for (let i of arr){
//     str += `${arr[q].word} <br/>`;
//     str +=  ``+ `${arr[q].author} <br/>`;
//     str += `${arr[q].source} <br/>`;
//     str += `<br/>`;
//     q++;
//   }

//   str.fontcolor('white');

//  quoteField.innerHTML = str.fontcolor('white');
//  body.backgroundColor = 'red';
 
// }
// function printQuote2(arr){
//   let str = `${arr[Math.floor(Math.random() * arr.length - 1) + 1].word}`;
//   quoteField.innerHTML = str;
// }

function changeColor () {
  body.backgroundColor = 'red';
}

function c2(){
  body.backgroundColor = 'blue';
}

// setInterval(changeColor,7000);
// setInterval(c2, 4000);
// printQuote(quotes);
var print = printQuote2(quotes);

setInterval(print, 1000);