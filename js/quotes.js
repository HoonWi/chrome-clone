const quotes = [
  {
    quote: "I'm tired.",
    author: "Hoon Wi"
  },
  {
    quote: "Let it rip!",
    author: "The Bear"
  },
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

