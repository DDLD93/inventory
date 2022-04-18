const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HighValueSchema = new Schema({
  basic: {
    name: { type: String },
    code: { type: String },
    serialNumber: { type: Number },
    hasManual: { type: Boolean, default: true },
    manufacturer: { type: String },
    dateCommissioned: { type: Date },
    model: { type: String },
    dateManufactured: { type: Date },
    dateAcquired: { type: Date },
    coordinate: {
      longitude: { type: Number },
      latitude: { type: Number },
    },
  },
  hasCircuitDiagram:{ type: Boolean, default: true },
  condition: {
    type: String,
    enum: ["Working", "Not Working", "Repairable","Obsolete","Abandoned"],
    default: "Working",
  },
  costOfRepair: { type: Number },
  additionalComponents: {
    name: { type: String },
    description: { type: String },
    quantity: { type: Number },
  },
  image:{type:String},
  createdAt: { type: Date, default: Date.now() },
});
module.exports = mongoose.model("HighValueEquipment", HighValueSchema);
