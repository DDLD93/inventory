const User = require("../model/User.model");
 
class UserController{
  constructor(){}

  async getUsers(){
    try {
      const users = await User.find();
      return {ok:true,status:"success",payload:users,message:"",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to fetch users",error:err.message};
    }
  }

  async getUser(id){
    try {
      const user = await User.findById(id);
      return {ok:true,status:"success",payload:user,message:"",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to fetch user",error:err.message};
    }
  }

  async addUser(data){
    try {
      const newUser = new User(data);
      const user = await newUser.save();
      return {ok:true,status:"success",payload:user,message:"new user added",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to add user",error:err.message};
    }
  }

  async updateUser(id,newData){
    try {
      const updatedUser = await User.findByIdAndUpdate(id, newData, {multi:false, new:true});
      return {ok:true,status:"success",payload:updatedUser,message:"user updated",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to update user",error:err.message};
    }
  }

  async deleteUser(id){
    try {
      await User.findByIdAndDelete(id);
      return {ok:true,status:"success",payload:null,message:"user deleted",error:null};
    } catch (err) {
      return {ok:false,status:"failed",payload:null,message:"unable to delete user",error:err.message};
    }
  }

}

module.exports = new UserController();