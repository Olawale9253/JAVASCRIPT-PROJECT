const sayHello = function (name, age = 10) => {

    return `Hello ${name} \n you are ${age} years old `

}

sayHello();

console.log(sayHello("Olawale"));


const sayHello = (name, age = 10) => `Hello ${name} \n you are ${age} years old `


console.log(sayHello("Olawale"));




//
//function sayHello(name, age = 10){
//
//console.log ("Hello world");
//
//    return `Hello ${name} \n you are ${age} years old `
//
//}
//
//sayHello();
//
//console.log(sayHello("Olawale"));
