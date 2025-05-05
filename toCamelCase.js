const ps=require("prompt-sync")
const prompt=ps({sigint:true})

let input=prompt("Enter a string:")

const toCamelCase=(str)=>{
    let lower=str.toLowerCase().split(" ")
    let result=lower.map((curValue,i)=>{
        let camelCase;
        if(i==0){
            camelCase=curValue;
        }
        else{
            camelCase=curValue.charAt(0).toUpperCase() + curValue.slice(1);
        }
        return camelCase;
    }).join("")
    return result;
    
}
const output=toCamelCase(input)
console.log(output)
