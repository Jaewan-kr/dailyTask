const quotes = [
  {
    quotes:
      "The greatest glory in living lies not in never falling, but in rising every time we fall",
    author: " - Nelson Mandela",
  },
  {
    quotes: "The way to get started is to quit talking and begin doing",
    author: " - Walt Disney",
  },
  {
    quotes:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma",
    author: " - Steve Jobs",
  },
  {
    quotes:
      "If life were predictable it would cease to be life, and be without flavor",
    author: " - Eleanor Roosevelt",
  },
  {
    quotes:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
    author: " - Oprah Winfrey",
  },
  {
    quotes:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
    author: " - James Cameron",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
