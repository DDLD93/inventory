const Supplier = require("../model/supplier.model");
 
class SupplierController{
  constructor(){}

  async getSuppliers(){
    try {
      const suppliers = await Supplier.find();
      return {ok:true,status:"success",payload:suppliers,message:"",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to get suppliers",error:err.message};
    }
  }

  async getSupplier(id){
    try {
      const supplier = await Supplier.findById(id);
      return {ok:true,status:"success",payload:supplier,message:"",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to get supplier",error:err.message};
    }
  }

  async addSupplier(data){
    try {
      const newSupplier = new Supplier(data);
      const supplier = await newSupplier.save();
      return {ok:true,status:"success",payload:supplier,message:"supplier added",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to add new supplier",error:err.message};
    }
  }

  async updateSupplier(id,newData){
    try {
      const updatedSupplier = await Supplier.findByIdAndUpdate(id, newData, {multi:false, new:true});
      return {ok:true,status:"success",payload:updatedSupplier,message:"supplier updated",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to update supplier",error:err.message};
    }
  }

  async deleteSupplier(id){
    try {
      await Supplier.findByIdAndDelete(id);
      return {ok:true,status:"success",payload:null,message:"supplier deleted",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to deleted supplier",error:err.message};
    }
  }
}

module.exports = new SupplierController();