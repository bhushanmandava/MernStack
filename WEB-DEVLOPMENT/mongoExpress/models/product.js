const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        reuire: true
    },
    price: {
        type: Number,
        require: true,
        min: 0
    },
    category: {
        type: String,
        enum: ['fruit', 'vegetable', 'dairy']
    }

})
const Product = mongoose.model('Product', productSchema);
module.exports = Product;