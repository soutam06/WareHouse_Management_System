const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  item_id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    // enum: ['in_stock', 'out_of_stock', 'discontinued'], // Restrict status values
    required: true
  },
  godown_id: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  attributes: {
    type:Object,
    required: true
  },
  image_url: {
    type: String,
    required: true
  }
}, { timestamps: true });  

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
