const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: { type: String, required:true },
  category: { type: String, index:true, required:true },
  quantity: { type: Number, required:true },
  unitPrice: { type: Number, required:true },
  barcode: { type: Number, required:true },
  lowThreshold: { type: Number, required:true },
  reorderLevel: { type: Number, required:true },
  status: { type: String, },
  updatedAt: { type: Date },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Product", ProductSchema);
