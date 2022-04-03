const Category = require("../model/category.model");
 
class CategoryController{
  constructor(){}

  async getCategorys(){
    try {
      const categories = await Category.find();
      return {ok:true,status:"success",payload:categories,message:"",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to fetch categories",error:err.message};
    }
  }

  async getCategory(id){
    try {
      const category = await Category.findById(id);
      return {ok:true,status:"success",payload:category,message:"",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to fetch category",error:err.message};
    }
  }

  async addCategory(data){
    try {
      const newCategory = new Category(data);
      const category = await newCategory.save();
      return {ok:true,status:"success",payload:category,message:"category added",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to add new category",error:err.message};
    }
  }

  async updateCategory(id,newData){
    try {
      const updatedCategory = await Category.findByIdAndUpdate(id, newData, {multi:false, new:true});
      return {ok:true,status:"success",payload:updatedCategory,message:"category updated",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to update category",error:err.message};
    }
  }

  async deleteCategory(id){
    try {
      await Category.findByIdAndDelete(id);
      return {ok:true,status:"success",payload:nul,message:"category deleted",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to delete category",error:err.message};
    }
  }
}

module.exports = new CategoryController();