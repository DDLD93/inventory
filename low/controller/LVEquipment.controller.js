const LVEquipment = require("../model/LVEquipment.model");
 
class LVEquipmentController{
  constructor(){}

  async getLVEquipments(){
    try {
      const categories = await LVEquipment.find();
      return {ok:true,status:"success",payload:categories,message:"",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to fetch Equipment",error:err.message};
    }
  }

  async getLVEquipment(id){
    try {
      const LVEquipment = await LVEquipment.findById(id);
      return {ok:true,status:"success",payload:LVEquipment,message:"",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to fetch Equipment",error:err.message};
    }
  }


  async addLVEquipment(data,imagePath){
    try {
      data.image = imagePath;
      const newLVEquipment = new LVEquipment(data);
      const Equipment = await newLVEquipment.save();
      return {ok:true,status:"success",payload:Equipment,message:"Equipment added",error:null};
    } catch (err) {
      console.log(err)
      return {ok:false,status:"failed",payload:null,message:"unable to add new Equipment",error:err.message};
    }
  }

  async updateLVEquipment(id,newData){
    try {
      const updatedLVEquipment = await LVEquipment.findByIdAndUpdate(id, newData, {multi:false, new:true});
      return {ok:true,status:"success",payload:updatedLVEquipment,message:"Equipment updated",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to update Equipment",error:err.message};
    }
  }

  async deleteLVEquipment(id){
    try {
      await LVEquipment.findByIdAndDelete(id);
      return {ok:true,status:"success",payload:nul,message:"Equipment deleted",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to delete Equipment",error:err.message};
    }
  }
}

module.exports = new LVEquipmentController();