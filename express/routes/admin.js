const express = require('express');
const router = express.Router();

router.get('/add-product', (req,res,next)=>{
    res.send('<html><body><form action = "/admin/add-product" method = "POST"><label>product name</label><input type="text" name = "title"><label>Quantity</label><input type = "number" name = "size"><button type= "submit">Add Product</button></form></body></html>')
});

router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop/');

});

module.exports = router;  