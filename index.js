require("dotenv").config()
const http = require('node:http')
const fs  = require('fs')
const hostname = process.env.HOSTNAME;
const port = process.env.PORT;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    const url = req.url
    console.log(url);
    let filename;
    switch(url){
        case '/':
            filename = 'index.html';
            break;
        case '/about':
            filename = 'about.html';
            break;
        case '/contact':
            filename = 'contact-me.html';
            break;
        default:
            filename = '404.html';
    }
    fs.readFile(filename, 'utf-8', (err, data)=>{
        console.log(filename);
        if(err) console.log(err);
        res.writeHead(200, {'Content-type':'text/html'})
        res.write(data)
        return res.end()
    })
})
server.listen(port,hostname,()=>{
    console.log(`server running on http://${hostname}:${port}`);
})
