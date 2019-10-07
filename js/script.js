/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Software Developer: Nayonna Purnell
******************************************/



//The array of 5 quote objects.

const quotes = [
  {quote: "Failure isn't fatal, but failure to change might be.",
  source: "John Wooden",
  citation: "30 Powerful Quotes on Failure: Forbes",
  year: "December 2013" 
  },
  {quote: "Only those who dare to fail greatly can ever achieve greatly.",
  source: "Robert F. Kennedy",
  citation: "30 Powerful Quotes on Failure: Forbes",
  year: false 
  },
  {quote: "If you don’t try at anything, you can’t fail… it takes back bone to lead the life you want.",
  source: "Richard Yates",
  citation: "30 Powerful Quotes on Failure: Forbes",
  year: false 
  },
  {quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  source: "Winston Churchill",
  citation: "30 Powerful Quotes on Failure: Forbes",
  year: false 
  },
  {quote: "The master has failed more times than the beginner has tried.",
  source: "Stephen McCranie",
  citation: false,
  year: false 
  }
];

//getRandomQuote function passes in the quotes objects to return a randomQuote
function getRandomQuote() {
  let randomQuote = Math.floor(Math.random() * (quotes.length)); 
  return quotes[randomQuote];
}

//https://teamtreehouse.com/library/accessing-object-properties
function printQuote( ) {
  
  //Create a variable that calls the `getRandomQuote` function.
  let storedRandomQuote = getRandomQuote();

  //Create a variable for the HTML string and set it equal to an empty string.
    let quoteHtml = ''; 

 //Add the quote and source section to the HTML string.
    quoteHtml +=  '<p class="quote">' + storedRandomQuote.quote + '</p>';
    quoteHtml += '<p class="source">' + storedRandomQuote.source;

//The if statement used to check for the citation property before adding it to the HTML string.
if (storedRandomQuote.citation) {
    quoteHtml += '<span class="citation">' + storedRandomQuote.citation +'</span>';
}
if (storedRandomQuote.year) {
    quoteHtml += '<span class="year">' + storedRandomQuote.year +'</span>';
}
quoteHtml += '</p>';

let HTML = document.getElementById("quote-box");
HTML.innerHTML = quoteHtml;

}

    

   
    

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

