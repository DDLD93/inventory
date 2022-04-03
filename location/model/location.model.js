const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  code:{ type:String, required:true },
  description:{ type:String, required:true },
  email:{ type:String, required:true },
  contactPhone:{ type:String, required:true },
  address:{ type:String, required:true },
  coordinates:{
    latitude:{ type:Number },
    longitude:{ type:Number }
  },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Location", LocationSchema);


