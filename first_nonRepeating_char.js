const ps=require("prompt-sync")
const prompt=ps({sigint:true})

let userInput=prompt("Enter a string:")

for(let i=0;i<userInput.length;i++){
    if(userInput.indexOf(userInput[i])===userInput.lastIndexOf(userInput[i])){
        console.log(userInput[i])
        break;
    }
}
