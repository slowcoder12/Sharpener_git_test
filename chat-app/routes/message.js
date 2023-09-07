const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
    fs.readFile("messages.txt", (err, data) => {
        if (err) {
            console.log("Error");
            data = "no data exists";
        }
        res.send(`${data}
        <form action="/" method="POST" onsubmit="document.getElementById('username').value = localStorage.getItem('username');">
            <input type="text" id="message" name="message">
            <input type="hidden" id="username" name="username">
            <button type="submit">send</button>
        </form>
        `);
    });
});

router.post('/', (req, res) => {
    console.log(req.body.username);
    console.log(req.body.message);
    fs.appendFile("messages.txt", `${req.body.username}: ${req.body.message}\n`, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/");
        }
    });
    
});

module.exports = router;
