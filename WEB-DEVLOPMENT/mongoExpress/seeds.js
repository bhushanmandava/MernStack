const mongoose = require('mongoose');
const Product = require('./models/product')

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/farmdb');
    console.log('MOngo conection established');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
// const p = new Product({
//     name: 'ruby grape',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save().then(p => {
//     console.log(p)
// })
//     .catch(e => {
//         console.log(e)
//     })

const seedProducts = [{
    name: 'golden apple',
    price: 2.49,
    category: 'fruit'
},
{
    name: 'organic banana',
    price: 0.99,
    category: 'fruit'
},
{
    name: 'broccoli',
    price: 1.89,
    category: 'vegies'
},
{
    name: 'carrot',
    price: 0.79,
    category: 'vegies'
},
{
    name: 'milk',
    price: 3.49,
    category: 'diary'
},
{
    name: 'cheddar cheese',
    price: 4.99,
    category: 'diary'
}]
Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })