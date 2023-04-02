const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote: "The world is a book and those who do not travel read only",
        author: "Saint Augustine",
    },
    {
        quote: "Travel expands the mind and fills the gap.",
        author: "Sheda Savage",
    },
    {
        quote: "To travel is to Live.",
        author: "Hans christian Andersen",
    },
    {
        quote: "We Wander for distraction, but we travel for fulfillment.",
        author: "Hilaire Belloc",
    },
    {
        quote: "Never go on trips with anyone you do not love.",
        author: "Hemingway",
    },
    {
        quote: "Life is a series of building, testing, changing and iterating.",
        author: "Lauren Mosenthal",
    },
    {
        quote: "But man is not made for defeat. A man can be destroyed but not defeated.",
        author: "Ernest Hemingway",
    },
    {
        quote: "Learning never exhausts the mind.",
        author: "Leonardo da Vinci",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

