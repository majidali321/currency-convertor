#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold('\n \tWelcome to My currency Converted program\n'))
 let Currency_exchange:any ={
    "USD": 1,
    "EUR":0.9,
    "JYP":113,
    "CAD":1.3,
    "AUD":1.65,
    "PKR":280,
 }

//  promt the user to select currency from to "to"

let user_answer = await inquirer.prompt([
    {

        name:"from_currency",
        type:"list",
        message:"enter the currency to convert from",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name:"to_currency",
        type:"list",
        message:"enter the currency to be convert",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name:"amount",
        type:"input",
        message:"enter amount to convert"
    }
]);
let from_amount = Currency_exchange[user_answer.from_currency];
let to_amount = Currency_exchange[user_answer.to_currency];
let amount = user_answer.amount

// formula of conversion
let base_amount = amount/from_amount
let converted_amount = base_amount*to_amount

console.log(`converted_amount = ${converted_amount.toFixed()}`);