const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/moviesdb');
    console.log('conection established');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    onsale: {
        type: Boolean,
        deafult: false
    }

})
const Product = mongoose.model('Product', productSchema)
const bike = new Product({
    name: 'mountain Bike',
    price: 100
})
bike.save()
    .then(data => {
        console.log(data);
        console.log("it worked");
    })
    .catch(err => {
        console.log(err);
    })