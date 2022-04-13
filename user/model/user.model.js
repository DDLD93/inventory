const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  location: {type: String, required : true}, 
  lastName: { type: String,required: true },
  email: { type: String, unique:true ,required: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  address: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  status: { type: String },
  userType: { type: String, 
    enum: ["admin", "store","supplier" ,"guest"], 
    default: "store" },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("User", UserSchema);
