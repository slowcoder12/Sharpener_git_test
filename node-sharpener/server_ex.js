const http = require("http");

const server = http.createServer((req,res)=>{
    console.log("Sreeman");
})
server.listen(4000);