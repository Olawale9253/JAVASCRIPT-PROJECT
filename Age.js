const prompt = require("prompt-sync")();

let age = prompt("What is your age? " )

let isValid = true;

if(age || isValid){
    console.log("login")
}

//if(age > 0 && age <= 12){
//
//    console.log("I am a child")
//}
//
//else if(age > 12 && age < 18){
//
//    console.log("Teenager")
//}
//
//else if(age >= 18){
//
//    console.log("Adut")
//}
//
//else{
//    
//    console.log("invalid age")
//}
