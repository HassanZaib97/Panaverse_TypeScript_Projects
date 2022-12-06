import inquirer from "inquirer";
let guessedNum;
let randomNum = Math.floor(Math.random()*10 +1);
const guessedNumFunc = async () => {
        guessedNum  = await inquirer.prompt([
        {
            name: "num",
            type: "number",
            message: "Guess the number?"
        }
    ])
    guessedNum = guessedNum.num
    switch (randomNum) {
        case guessedNum:
            console.log("You guessed it!")
            break;
    
        default:
            console.log(`The answer is ${randomNum}`)
    }
}


do{
    await guessedNumFunc();
}while(guessedNum !== randomNum)

