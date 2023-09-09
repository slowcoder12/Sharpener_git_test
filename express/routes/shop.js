const express = require('express');
const path = require('path');
const router = express.Router();


const rootDir = require("../helpers/path");
//console.log(rootDir);

router.get('/',(req,res,next)=>{
    console.log("main page");
    res.sendFile(path.join(rootDir,"views","shop.html"));

}); 

module.exports = router;

