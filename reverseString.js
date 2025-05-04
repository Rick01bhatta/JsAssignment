const ps=require("prompt-sync")
const prompt=ps({sigint:true})

const input=prompt("enter a string:")



function reversedString(input){
    let reversed=""
        for (let i= input.length-1; i >=0; i--) {
            
            reversed=reversed+input[i]
            
        }
        return reversed
}

console.log("Reverse String:", reversedString(input))
