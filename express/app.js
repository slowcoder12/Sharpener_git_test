
const express = require('express');
const path = require('path');
const app = express();


const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop")

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, "public")))

app.use("/admin",adminRouter);
app.use("/shop",shopRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'./','views','error.html'))
});






app.listen(3000);