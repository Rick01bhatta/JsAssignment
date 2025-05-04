
const ps=require("prompt-sync")
const prompt=ps({sigint:true})

const input=prompt("Enter a number:")


function checkPalindrome(input){
    let start=0
    let end=input.length-1

    while(start<=end){
        if(input[start]===input[end]){
            start++;
            end--
        }
        else{
            return false
        }
    }
    return true;
}

const value=checkPalindrome(input)
if(value){
    console.log("The given number is a palindrome")
}
else{
    console.log("The given number is not a palindrome")
}
