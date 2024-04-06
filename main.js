import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let userInput = await inquirer.prompt([{
        message: "ENTER FROM CURRENCY",
        name: "from",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        message: "ENTER TO CURRENCY",
        name: "to",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "amount",
        message: "ENTER YOUR AMOUNT",
        type: "number",
    }
]);
let fromAmount = currency[userInput.from];
let toAmount = currency[userInput.to];
let amount = userInput.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
