#! /usr/bin/env node

import inquirer from "inquirer"
let condition = true;
while(condition){
let answer = await inquirer.prompt([{
    message: "write your first number",
    type : "number",
    name : "firstNumber"},
{
    message: "write your second number",
    type : "number",
    name : "secondNumber"},

{
    message: "select your operator",
    type : "list",
    name : "operator"
    choices : ["addition","multiplication","subtraction","division","modulus","exponential"],
},])

if(answer.operator === "addition"){
    console.log(parseFloat( answer.firstNumber + answer.secondNumber))
} else if(answer.operator === "subtraction"){
    console.log(answer.firstNumber - answer.secondNumber)
} else if(answer.operator === "multiple"){
    console.log(answer.firstNumber * answer.secondNumber)
} else if(answer.operator === "division"){
    console.log(answer.firstNumber / answer.secondNumber)
} else if(answer.operator === "modulus"){
    console.log(answer.firstNumber % answer.secondNumber)
} else if(answer.operator === "exponential"){
    console.log(answer.firstNumber ** answer.secondNumber)
}
condition = answer.firstNumber && answer.secondNumber && answer.operator
}