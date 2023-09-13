const express = require('express');
const path = require('path');
const router = express.Router();

const rootDir = require("../helpers/path");
//console.log(rootDir);
const getcontactusController = require("../controllers/contact");

const postcontactusController = require("../controllers/contact");

const getSuccess = require("../controllers/success");

const getprod = require("../controllers/products");
const postprod = require("../controllers/products");

router.get('/add-product', getprod.getprod); 

router.post('/add-product',postprod.postprod);

router.get('/contact',getcontactusController.getcontactusController
);

router.get('/success',getSuccess.getSuccess);

router.post('/contact',postcontactusController.postcontactusController);






module.exports = router;  