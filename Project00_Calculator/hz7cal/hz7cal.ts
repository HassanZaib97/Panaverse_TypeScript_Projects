#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const timer = () => {
  return new Promise((res, rej) => {
    setTimeout(res, 2000);
  });
};

const calculator = async () => {
  let welcome = chalkAnimation.rainbow("Lets Start Calculation");
  await timer();
  welcome.stop();
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
}

await calculator();

const input = async () => {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "operator",
      message: chalk.red("Which operator do you want to perform?"),
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
    {
      type: "number",
      name: "num1",
      message: chalk.greenBright("Enter Your First Numbe: "),
    },
    {
      type: "number",
      name: "num2",
      message: chalk.greenBright("Enter Your Second Number: "),
    },
  ]);

  if (answer.operator === "Addition") {
    console.log(
      chalk.green(
        `${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`
      )
    );
  } else if (answer.operator === "Subtraction") {
    console.log(
      chalk.green(
        `${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`
      )
    );
  } else if (answer.operator === "Multiplication") {
    console.log(
      chalk.green(
        `${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`
      )
    );
  } else if (answer.operator === "Division") {
    console.log(
      chalk.green(
        `${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`
      )
    );
  }
}

let repeat;
const moreCalculation = async () => {
  do {
    await input();
    repeat = await inquirer.prompt([
      {
        type: "input",
        name: "restart",
        message: "Do you want to continue? Press y or n: ",
      },
    ]);
  } while (
    repeat.restart === "y" ||
    repeat.restart === "Y" ||
    repeat.restart === "yes" ||
    repeat.restart === "YES"
  );
};

moreCalculation();