const prompt = require("prompt-sync")();

let number = prompt("Enter number: " )


if(number % 2 == 0){

    console.log("even")
}
else if(number % 2 != 0){
    
    console.log("odd")
}
