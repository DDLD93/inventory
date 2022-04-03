const Supply = require("../model/supply.model");
 
class SupplyController{
  constructor(){}

  async getSupplys(){
    try {
      const supply = await Supply.find();
      return {ok:true,status:"success",payload:supply,message:"",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to fetch supplies",error:err.message};
    }
  }

  async getSupply(id){
    try {
      const supply = await Supply.findById(id);
      return {ok:true,status:"success",payload:supply,message:"",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to get supply",error:err.message};
    }
  }

  async addSupply(data){
    try {
      const newSupply = new Supply(data);
      const supply = await newSupply.save();
      return {ok:true,status:"success",payload:supply,message:"supply added",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to add new supply",error:err.message};
    }
  }

  async updateSupply(id,newData){
    try {
      const updatedSupply = await Supply.findByIdAndUpdate(id, newData, {multi:false, new:true});
      return {ok:true,status:"success",payload:updatedSupply,message:"supply updated",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to update supply",error:err.message};
    }
  }

  async deleteSupply(id){
    try {
      await Supply.findByIdAndDelete(id);
      return {ok:true,status:"success",payload:null,message:"supply deleted",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to delete supply",error:err.message};
    }
  }
}

module.exports = new SupplyController();