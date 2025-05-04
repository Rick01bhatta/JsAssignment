const ps=require("prompt-sync")
const prompt=ps({sigint:true})

let firstString=prompt("Enter first string:").toLowerCase()
let secondString=prompt("Enter second string:").toLowerCase()
function checkAnagram(firstString,secondString){
    if (firstString.length===secondString.length) {
        let secondArr=secondString.split('')
        for(let i=0;i<firstString.length;i++){
            let found=false;
            for(let j=0;j<secondArr.length;j++){
                if(firstString[i]===secondArr[j]){
                  secondArr.splice(j,1)
                  found=true;
                  break;
                }
                
                
            }
            if(!found){
                return false
            }

            
        }
        return true; 
    } else {
        return false;
    }
}

const value=checkAnagram(firstString,secondString)
if(value){
    console.log("Given Two String is Anagram")
}
else{
    console.log("Given string is not an Anagram")
}
