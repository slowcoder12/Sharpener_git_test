const http = require('http');

const server = http.createServer((req,res)=>{
    let url = req.url;

    if(url==='/home'){
        res.write('<html>')
        res.write('<body><h1>welcome to home</h1></body>');
        res.write('</html>')
        
    }
    else if (url ==='/about'){
        res.write('<html>')
        res.write('<body><h1>welcome to about us page</h1></body>');
        res.write('</html>')
        

    }
    else if (url ==='/node'){
        res.write('<html>')
        res.write('<body><h1>welcome to Node Js project</h1></body>');
        res.write('</html>')
        
        return res.end();
    }
   
});

server.listen(4000);