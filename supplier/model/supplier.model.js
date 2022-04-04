const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SupplierSchema = new Schema({
  name: { type: String, required: true, },
  contactPhone: { type: Number,  required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  balance: { type: Number, required: true },
  supplierType: {
    type: Number,
    required: true,
    enum: ["single", "hybrid"]
  },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});
module.exports = mongoose.model("Supplier", SupplierSchema);
