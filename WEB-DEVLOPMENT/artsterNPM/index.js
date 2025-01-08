const figlet = require('figlet');
const color = require('colors');
figlet('hello world', function (err, data) {
    if (err) { console.log('opps'); }
    console.log(data.rainbow)
})