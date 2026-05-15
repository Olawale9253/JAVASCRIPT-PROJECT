let number = 0;

function digit(number){

    if (number <= -1){
    
    return "negative";
}    

else if(number >= 1){

    return "positive";
}

else{

    return "zero";
}

}

console.log(digit(number))
