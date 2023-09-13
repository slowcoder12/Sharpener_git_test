const path = require('path');


const rootDir = require("../helpers/path");

exports.getcontactusController = (req,res)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'))
};

exports.postcontactusController = (req,res,next)=>{
    //console.log(req.body.username,req.body.email);
    res.redirect('/admin/success');
};

