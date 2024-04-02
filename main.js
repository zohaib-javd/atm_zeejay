#! /usr/bin/env node
import inquirer from 'inquirer';
let myBalance = 5000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: 'pin',
        message: 'Enter your pin code please.',
        type: 'number',
    },
]);
if (pinAnswer.pin === myPin) {
    console.log('Correct pin code!!!');
    let operationAns = await inquirer.prompt([
        {
            name: 'operation',
            message: 'Please select any option',
            type: 'list',
            choices: ['cash withdraw', 'check account balance', 'fast cash'],
        },
    ]);
    if (operationAns.operation === 'cash withdraw') {
        let amountAns = await inquirer.prompt([
            {
                name: 'amount',
                message: 'Enter your amount',
                type: 'number',
            },
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`Your remaining account balance is: ${myBalance}`);
        }
        else {
            console.log('Your account balance is insufficient for this transaction');
        }
    }
    else if (operationAns.operation === 'check account balance') {
        console.log(`Your account balance is: ${myBalance}`);
    }
    else if (operationAns.operation === 'fast cash') {
        let amountAns = await inquirer.prompt([
            {
                name: 'amount',
                message: 'Enter your amount',
                type: 'list',
                choices: [500, 1000, 5000, 10000, 25000],
            },
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`Your remaining account balance is: ${myBalance}`);
        }
        else {
            console.log('Your account balance is insufficient for this transaction');
        }
    }
}
else {
    console.log('Incorrect pin number');
}
