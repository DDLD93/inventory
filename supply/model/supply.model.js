const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SupplySchema = new Schema({
  name:{ type:String, required:true },
  date:{type: String,required:true},
  contactPhone:{ type:String, required:true },
  email:{ type:String, required:true },
  description:{ type:String, required:true },
  category:{ type:String, required:true },
  product:{ type:String, required:true },
  barcode:{ type:String },
  quantity:{ type:Number, required:true },
  purchaseUnitPrice:{ type:Number, required:true },
  saleUnitPrice:{ type:Number, required:true },
  status:{ type:String, required:true,
  enum:["paid","unpaid","pending"],
  default:"unpaid" },
  createdAt: { type: Date, default: Date.now() },
});
module.exports = mongoose.model("Supply", SupplySchema);


