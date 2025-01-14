const express = require('express');
const app = express();
// console.dir(app);
// app.use((req, res) => {
//     console.log("we got a neew request")
//     res.send('we lisnted your rqeuest')
//     // res.send({ <h1>this is web pahhe</h1>'' })
// })
app.get('/cats', (req, res) => {
    console.log('cat req')
    res.send('mew11')
})
app.get('/dogs', (req, res) => {
    console.log('dog req')
    res.send('woff')
})
app.get('/', (req, res) => {
    console.log('home page')
    res.send('this is home page')
})
app.listen(3000, () => {
    console.log("listening on 3000");
})