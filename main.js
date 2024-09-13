#! /usr/bin/env node
console.log("\n\t\t\t\t *****CURRENCY CONVERTER***** \t\t\t\t\n");
import inquirer from "inquirer";
// This currency rate is randomly selected from google.
let currency = {
    USD: 1, // Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.59,
    PKR: 278
};
let result = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency:",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter To Currency:",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }
]);
let fromAmount = currency[result.from];
let toAmount = currency[result.to];
let amount = result.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
