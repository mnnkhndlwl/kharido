const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    desc: String,
    banner: String,
    category: String,
    subcategory: String,
    unit: Number,
    regular_price: Number,
    store: String,
    highlight: String,
    weight: String,
    brand: String,
    price: Number,
    available: Boolean
});

module.exports =  mongoose.model('Product', ProductSchema);