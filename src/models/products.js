//import
const mongoose = require("mongoose");

//schema
const ProductSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  dishname: {
    type: String,
    required: true,
  },
},{timestamps:true});

//model
const Product = mongoose.model('Product', ProductSchema);

//export
module.exports = Product;
