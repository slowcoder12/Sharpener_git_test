const fs = require('fs');

const requestHandler = (req,res)=>{
    const url = req.url;
    const method = req.method;
    if (url==='/') {
        fs.readFile('message.txt',{encoding: "utf-8"} ,(err,data)=> {
            if(err){
                console.log("error");
            }
            res.write('<html>')
                res.write(`<body>${data}</body`);
    
        res.write('<body><form action = "/message" method = "POST"><input type ="text" name = "message"><button>Add Message</button></form></body>');
        res.write('</html>')
    
        res.end();
        });
    }
    
    if (url === '/message' && method === "POST") {
        const body= [];
        req.on('data', (chunk)=>{
        body.push(chunk);
        });
    
        req.on('end',()=>{
            const parsed = Buffer.concat(body).toString();
            const message = parsed.split("=")[0]
            console.log(parsed);
        
            fs.writeFile('message.txt', message, err =>{
                res.statusCode = 302;
                res.setHeader("Location", '/');
                
                res.end();
            });
       
    
          
        });
       
       
    }
}

module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler, 
// }

// module.exports.handler = requestHandler;