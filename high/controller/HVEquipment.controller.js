const HVEquipment = require("../model/HVEquipment.model");
 
class HVEquipmentController{
  constructor(){}

  async getHVEquipments(){
    try {
      const categories = await HVEquipment.find();
      return {ok:true,status:"success",payload:categories,message:"",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to fetch Equipment",error:err.message};
    }
  }

  async getHVEquipment(id){
    try {
      const HVEquipment = await HVEquipment.findById(id);
      return {ok:true,status:"success",payload:HVEquipment,message:"",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to fetch Equipment",error:err.message};
    }
  }


  async addHVEquipment(data,imagePath){
    try {
      data.image = imagePath;
      const newHVEquipment = new HVEquipment(data);
      const Equipment = await newHVEquipment.save();
      return {ok:true,status:"success",payload:Equipment,message:"Equipment added",error:null};
    } catch (err) {
      console.log(err)
      return {ok:false,status:"failed",payload:null,message:"unable to add new Equipment",error:err.message};
    }
  }

  async updateHVEquipment(id,newData){
    try {
      const updatedHVEquipment = await HVEquipment.findByIdAndUpdate(id, newData, {multi:false, new:true});
      return {ok:true,status:"success",payload:updatedHVEquipment,message:"Equipment updated",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to update Equipment",error:err.message};
    }
  }

  async deleteHVEquipment(id){
    try {
      await HVEquipment.findByIdAndDelete(id);
      return {ok:true,status:"success",payload:nul,message:"Equipment deleted",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to delete Equipment",error:err.message};
    }
  }
}

module.exports = new HVEquipmentController();