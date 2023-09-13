
const path = require('path');


const rootDir = require("../helpers/path");

exports.getprod = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
};

exports.postprod = (req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop');
};