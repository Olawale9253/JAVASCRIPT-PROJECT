const prompt = require("prompt-sync")();
age = prompt("Enter your age: " )

function person(age){

    if (age < 5){

    return "Child";
}
else if(age < 18){

    return "Teen";
}
else if(age >= 18){

    return "Adult";
}

}
console.log(person(age))


