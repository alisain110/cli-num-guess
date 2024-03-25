#!usr/bin/env node
import inquirer from "inquirer";
 
const randomNumber = Math.floor(Math.random()*10 + 1)

const answers = await inquirer.prompt([
    {

 name: "usernumberguessing",
 type:"number",
 message:" Guess a random number"



}
])
if (answers.usernumberguessing === randomNumber)
{
    console.log("Congrats you did it")

}
else{
console.log("you lose it hahahaha")
}