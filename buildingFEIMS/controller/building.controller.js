const Building = require("../model/building.model");
 
class BuildingController{
  constructor(){}

  async getBuildings(){
    try {
      const Buildings = await Building.find();
      return {ok:true, Buildings};
    } catch (err) {
      return {ok:false,error:err};
    }
  }

  async getBuilding(id){
    try {
      const Building = await Building.findById(id);
      return {ok:true, Building};
    } catch (err) {
      return {ok:false,error:err};
    }
  }

  async addBuilding(data, imagePath){
    try {
      data.image = imagePath;
      const newBuilding = new Building(data);
      const building = await newBuilding.save();
      console.log(building)
      return {ok:true, building};
    } catch (err) {
      return {ok:false,error:err};
    }
  }

  async updateBuilding(id,newData){
    try {
      const updatedBuilding = await Building.findByIdAndUpdate(id, newData, {multi:false, new:true});
      return {ok:true, Building:updatedBuilding};
    } catch (err) {
      return {ok:false,error:err};
    }
  }

  async deleteBuilding(id){
    try {
      await Building.findByIdAndDelete(id);
      return {ok:true, message: "Deleted Building" };
    } catch (err) {
      return {ok:false,error:err};
    }
  }

}

module.exports = new BuildingController();