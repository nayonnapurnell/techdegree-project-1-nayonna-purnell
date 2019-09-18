/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Array of 5 quote objects.
***/

let quotes = [
  {quote1: "Failure isn't fatal, but failure to change might be.",
  source1: "John Wooden",
  citation1: "30 Powerful Quotes on Failure: Forbes",
  year1: "December 2013" 
  },
  {quote2: "Only those who dare to fail greatly can ever achieve greatly.",
  source2: "Robert F. Kennedy",
  citation2: "30 Powerful Quotes on Failure: Forbes",
  year2: "" 
  },
  {quote3: "If you don’t try at anything, you can’t fail… it takes back bone to lead the life you want.",
  source3: "Richard Yates",
  citation3: "30 Powerful Quotes on Failure: Forbes",
  },
  {quote4: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  source4: "Winston Churchill",
  citation4: "30 Powerful Quotes on Failure: Forbes",
  },
  {quote5: "The master has failed more times than the beginner has tried.",
  source5: "Stephen McCranie",
  }
];

//getRandomQuote function randomly passes in the quotes objects
function getRandomQuote(quotes) {
  return quotes = [Math.floor(Math.random() * quotes.length)];
}

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

function printQuote(getRandomQuote){


}



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.