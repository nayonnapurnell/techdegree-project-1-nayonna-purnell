/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Software Developer: Nayonna Purnell
******************************************/



//The array of 5 quote objects.

let quotes = [
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
function getRandomQuote(quotes) {
  let randomQuote = [Math.floor(Math.random() * quotes.length)]; 
  return randomQuote;
}

 

//https://teamtreehouse.com/library/accessing-object-properties
function printQuote(getRandomQuote) {
    let quote = quotes[i].quote;
    let source = quotes[i].source;
    let citation = quotes[i].citation;
    let year = quotes[i].year;
  
    const quoteHtml =
    

  }
  
  



//let quoteHtml = "Your Html code"


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

// function printQuote(getRandomQuote){
//   let randomQuote = getRandomQuote;

//   quote_view = '<p class = "quote">' + randomQuote.quote + '</p>';
//   quote_view += '<p class="source">' + randomQuote.source;


//   //If there is a quote.citation property, add it to the string
//   if (randomQuote.citation !== undefined && randomQuote.year !== undefined) {
//     quote_view += '<span class="citation">' + randomQuote.citation + '</span>'; 
//     quote_view += '<span class="year">' + randomQuote.year + '</span>' + '</p>';

// }
// quote_view += '<h4>' + randomQuote.tags + '</h4>';
// print(quote_view)
// }
/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.