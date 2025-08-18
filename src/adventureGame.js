/*
Adventure Game
This is a simple text-based adventure game where players will be able to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story outcome will change based on their decisions.
*/

// Import the readline-sync
const readline = require("readline-sync");

//Game state variables
let playerName = "";
let playerHealth = 100;
let playerGold = 20; // Starting gold amount
let currentLocation = "village"; // Starting location
let gameRunning = true;
let playerInventory = []; // Array to hold player's items

// Display the game title
console.log("Welcome to the Adventure Game!");
console.log("Get ready to embark on an exciting journey!");

// Get player name
playerName = readline.question("\nWhat is your name, brave adventurer? ");
console.log("\nWelcome, " + playerName + "!");
console.log("You start with " + playerGold + " gold");