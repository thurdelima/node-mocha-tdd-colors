const express = require('express'); 
const converter = require('./src/color-converter');
const app = express();

app.get('/rgb-to-hex/:red/:green/:blue', function (req, res) {
    
    const red = parseInt(req.params.red);
    const green = parseInt(req.params.green);
    const blue = parseInt(req.params.blue);
    
    const color = converter.toHex([red, green, blue]);
    res.send(color);
});

app.get('/hex-to-rgb/:hex', function (req, res) {
    
    const color =  converter.toRgb(req.params.hex);
    // let ajust = color.toString;
    // let e = ajust.split(',');

    // console.log('e: ', e);
    
    res.send(`${color[0]},${color[1]},${color[2]}`);
});


app.listen(9000);