const person = {
    
    firstName: "Miracle",

    lastName: "Sharon",

    age: 56

}

const user = {

//    first_name: "Chinedu",

    first_name: ["Chinedu", "Ahmed", "Grace"],
    
    last_name: "Femi",

    age_: 16,

    isValid_: false,

    ...person,

};

    

    user.gender = "sheMale";

    console.log(user)

//    console.log(user.firstName, user.lastName) // Member Operator
//
//    console.log(user)
//
//    console.log(user.firstName[2])


            //    Destructuring

//const {age, isValid} = user;
//
//    console.log(age)
//    console.log(isValid)
