const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: { type: String, index:true, required: true, },
  description: { type: String, required: true, },
  createdAt: { type: Date, default: Date.now() },
});
module.exports = mongoose.model("Category", CategorySchema);
