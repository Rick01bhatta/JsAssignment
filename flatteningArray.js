const ps=require("prompt-sync")
const prompt=ps({sigint:true})

let userInput=prompt("Enter a nested array:")
let updatedUserInput=JSON.parse(userInput)
let ans=[];
function flatteningArray(input){
    
    for(let i=0;i<input.length;i++){
        if(Array.isArray(input[i])){
            flatteningArray(input[i])
    }
    else{
        ans.push(input[i])
    }
    }
    return ans;
}

const finalresult=flatteningArray(updatedUserInput)
for (let index = 0; index < finalresult.length; index++) {
    console.log(finalresult[index])
    
}
