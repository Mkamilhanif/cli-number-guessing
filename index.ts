 import inquirer from "inquirer"

// 1#computer  will generate random select 
// 2# user input for guessing no
// 3# compare user input with computer input generate result
const randomNumber = Math.floor(Math.random() * 10 + 1)

const answer = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type: "number",
        message: "'please guess a number between (1 t0 10)' ",
    },
]);
if(answer.userGuessedNumber === randomNumber){
    console.log("'congratulation! you guessed right number.'")
}else {
    console.log("'you guessed wrong numbe'")
}
