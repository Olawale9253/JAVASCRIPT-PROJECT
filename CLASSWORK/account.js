const account = {

    balance : 500,

    isBlocked : false
}

    console.log(account)

if(account.balance < 100){

    console.log("Low balance")
}

else if(account.isBlocked == true){

    console.log("Account blocked")
}

else{
    
    console.log("Account is: Ok")

}
