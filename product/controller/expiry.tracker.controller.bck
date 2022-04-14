const Product = require("../model/product.model");
  module.exports = async () => {
    /* get product logic*/
    console.log("before")
    const products = await Product.find();
    console.log(products)

    products.map(product => {
        console.log(product.expiryDate)
    })  

}