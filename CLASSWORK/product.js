const product = {

    price: 1200,

    inStock: true

}

  console.log(product)

if(product.inStock == false){
    
    console.log("Out of stock")
}
else if(product.price > 1000){
    
    console.log("Expensive")
}

else {
    
    console.log("Affordable")
}

