/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

var quotes = [
  { 
    quote: "But that was life: Nobody got a guided tour to their own theme park. You had to hop on the rides as they presented themselves, never knowing whether you would like the one you were in line for...or if the bastard was going to make you throw up your corn dog and your cotton candy all over the place.",
    source: "-J.R. Ward",
    citation: "",
    year: ""
  },
  { 
    quote: "I have no special talent. I am only passionately curious.",
    source: "-Albert Einstein",
    citation: "",
    year: ""
  },
  { 
    quote: "If you judge people, you have no time to love them.",
    source: "-Mother Teresa",
    citation: "",
    year: ""
  },
  {
    quote: "Stay hungry, stay foolish.",
    source: "-Steve Jobs",
    citation: "",
    year: ""
  },
  {
    quote: "The greatest wealth is to live content with little.",
    source: "-Plato",
    citation: "",
    year: ""
  },
  {
    quote: "The future belongs to those who prepare for it today. ",
    source: "-Malcom X",
    citation: "",
    year: ""
  },
  {
    quote: "The successful warrior is the average man, with laser-like focus.",
    source: "-Bruce Lee",
    citation: "",
    year: ""
  },
  {
    quote: "A great man is always willing to be little.",
    source: "-Ralph Waldo Emmerson",
    citation: "",
    year: ""
  },
  {
    quote: "It always seems impossible until it’s done.",
    source: "-Nelson Mandela",
    citation: "",
    year: ""
  },
  {
    quote: "The unexamined life is not worth living.",
    source: "-Socrates",
    citation: "",
    year: ""
  },
  {
    quote: "To be poor and dependent is very nearly an impossibility.",
    source: "William Cobbett",
    citation: "Advice to Young Men",
    year: "1829"
  },
  {
    quote: "It's about what YOU are going to do with the short time you have left on this earth.",
    source: "Hugh Macleod",
    citation: "How to Be Creative",
    year: "2004"
  }
  ];



/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
  // Gets the length of the quotes array and randomly generates a number depending on the length.
  var quoteNum = Math.floor(Math.random() * quotes.length) ;
  console.log(quoteNum);
  return quoteNum;
}



/***
 * `printQuote` function
***/

function printQuote(){
  var quoteNum = getRandomQuote();
  // Starts the quote string 
  var html = "";
  // Gets the quote from the quotes array
  html += '<p class="quote">' + quotes[quoteNum].quote + '</p>';
  // Gets the source from the quotes array
  html += '<p class="source">' + quotes[quoteNum].source;
  // First checks to see if the random quote has a citation property and concatenates if it does.
  if(quotes[quoteNum].citation !== ""){
    html += '<span class="citation">' + quotes[quoteNum].citation + '</span>';}
    else {
      html += "";
    }
  // Checks to see if quote has a year property then concatenates if it does
  if(quotes[quoteNum].year !== ""){
    html += '<span class="year">' + quotes[quoteNum].year + '</span>';
  } else {
    html += "";
  }

  html += '</p>';
  var quoteField = document.getElementById('quote-box');
  quoteField.innerHTML = html;
  }



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);