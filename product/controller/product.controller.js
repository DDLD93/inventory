const Product = require("../model/product.model");
 
class ProductController{
  constructor(){}

  async getProducts(){
    try {
      const products = await Product.find();
      return {ok:true,status:"success",payload:products,message:"",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"error to fetching product",error:err.message};
    }
  }

  async getProduct(id){
    try {
      const product = await Product.findById(id);
      return {ok:true,status:"success",payload:product,message:"",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"error getting product",error:err.message};
    }
  }

  async addProduct(data){
    try {
      const newProduct = new Product(data);
      const product = await newProduct.save();
      return {ok:true,status:"success",payload:product,message:"product added",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to add new product",error:err.message};
    }
  }

  async updateProduct(id,newData){
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, newData, {multi:false, new:true});
      return {ok:true,status:"success",payload:updatedProduct,message:"product updated",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to update product",error:err.message};
    }
  }

  async deleteProduct(id){
    try {
      await Product.findByIdAndDelete(id);
      return {ok:true,status:"success",payload:null,message:"product deleted",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to delete product",error:err.message};
    }
  }
}

module.exports = new ProductController();