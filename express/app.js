
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req,res,next)=>{
    res.send('<html><body><form action = "/product" method = "POST"><label>product name</label><input type="text" name = "title"><label>Quantity</label><input type = "number" name = "size"><button type= "submit">Add Product</button></form></body></html>')
});

app.post('/product',(req,res,next)=>{
    console.log(req.body);
  
    res.redirect('/');

});

app.use('/',(req,res,next)=>{
    console.log("main page");
    res.send("<h1>main page</h1>")

});



app.listen(3000);