const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lowValueEquipment = new Schema({
 
    name: { type: String },
    code: { type: String },
    quantity: { type: Number },
    serialNumber: { type: Number },
    dateCommissioned: { type: Date},
    brand: { type: String },
    model: { type: String },
    condition: {
      type: String,
      enum: ["Working", "Not Working", "Repairable","Obsolete","Abandoned"],
      default: "Working",
    },
    costOfRepair: { type: Number },
    comment: { type: String },
    image:{type:String}
});
module.exports = mongoose.model("LowValueEquipment", lowValueEquipment);
