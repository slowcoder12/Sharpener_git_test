const express = require('express');
const path = require('path');
const router = express.Router();

const rootDir = require("../helpers/path");
console.log(rootDir);

router.get('/add-product', (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop');

});

router.get('/contact',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'))
})

router.get('/success',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','success.html'))
});

router.post('/contact',(req,res,next)=>{
    //console.log(req.body.username,req.body.email);
    res.redirect('/admin/success');
});






module.exports = router;  