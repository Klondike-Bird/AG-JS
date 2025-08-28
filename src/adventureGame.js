/*
Adventure Game
This is a simple text-based adventure game where players will be able to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story outcome will change based on their decisions.
*/

// Import readline-sync for Player Input
const readline = require("readline-sync");

// Display the game title
console.log("Welcome to the Adventure Game!");
console.log("Get ready to embark on an exciting journey!");

// Game state variables
let playerName = "";
let playerHealth = 100;
let playerGold = 20; // Starting gold amount
let currentLocation = "village"; // Starting location
let gameRunning = true;
let playerInventory = []; // Array to hold player's items

// Get player name
playerName = readline.question("\nWhat is your name, brave adventurer? ");
console.log("\nWelcome, " + playerName + "!");
console.log("You start with " + playerGold + " gold");

// Initial weapon damage variable
let weaponDamage = 0; // Will increase to 10 if player buys a sword
console.log(""); // This adds a blank line
console.log("Your current weapon damage is: " + weaponDamage);
console.log("Buying a sword will increase your weapon damage by 10.");

// Monster defense stats (affecting combat outcomes)
let monsterDefense = 5; // Monster defense value
console.log(""); // This adds a blank line
console.log("Monsters have a defense of: " + monsterDefense);
console.log("Monsters can withstand some damage in combat!");

// Healing potion restoration amount
let healingPotionValue = 30; // Amount of health restored by a healing potion
console.log(""); // This adds a blank line
console.log("Healing potion value: " + healingPotionValue);
console.log("Healing potions restore " + healingPotionValue + " health.");