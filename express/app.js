const express = require('express');
const app = express();

app.use((req,res,next) => {
    console.log("first middle");
    next();

});

app.use((req,res,next)=>{
    console.log("second middleware");
    res.send('<h1>first express response</h1>');
});

app.listen(3000);