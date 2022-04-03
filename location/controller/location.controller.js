const Location = require("../model/location.model");
 
class LocationController{
  constructor(){}

  async getLocations(){
    try {
      const locations = await Location.find();
      return {ok:true,status:"success",payload:locations,message:"",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"error getting locations",error:err.message};
    }
  }

  async getLocation(id){
    try {
      const location = await Location.findById(id);
      return {ok:true,status:"success",payload:location,message:"",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"error getting location",error:err.message};
    }
  }

  async addLocation(data){
    try {
      const newLocation = new Location(data);
      const location = await newLocation.save();
      return {ok:true,status:"success",payload:location,message:"location added",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to add new location",error:err.message};
    }
  }

  async updateLocation(id,newData){
    try {
      const updatedLocation = await Location.findByIdAndUpdate(id, newData, {multi:false, new:true});
      return {ok:true, location:updatedLocation};
    } catch (err) {
      return {ok:false,error:err};
    }
  }

  async deleteLocation(id){
    try {
      await Location.findByIdAndDelete(id);
      return {ok:true, message: "Deleted Location" };
    } catch (err) {
      return {ok:false,error:err};
    }
  }
}

module.exports = new LocationController();