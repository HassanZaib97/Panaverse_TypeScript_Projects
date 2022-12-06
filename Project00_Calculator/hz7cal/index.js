#!usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const timer = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
const welcome = async () => {
    let animation = chalkAnimation.rainbow("Lets Start the Calculation");
    await timer();
    animation.stop();
    console.log(`     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
};
await welcome();
const calculator = async () => {
    let answer = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "Select Operator",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
        {
            type: "number",
            name: "num1",
            message: "Enter Your First Number",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Your Second Number",
        },
    ]);
    if (answer.operator === "Addition") {
        console.log(chalk.green(`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`));
    }
    else if (answer.operator === "Subtraction") {
        console.log(chalk.green(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`));
    }
    else if (answer.operator === "Multiplication") {
        console.log(chalk.green(`${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`));
    }
    else if (answer.operator === "Division") {
        console.log(chalk.green(`${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`));
    }
};
let moreCalculation;
const restart = async () => {
    do {
        await calculator();
        moreCalculation = await inquirer.prompt([
            {
                type: "input",
                name: "res",
                message: "Want to more calculation? Type y for Yes OR n for No",
            },
        ]);
    } while (moreCalculation.res === "y");
};
restart();
