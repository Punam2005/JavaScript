const http=require('http');
const fs=require('fs');
const myServer=http.createServer((req,res)=>{
    const log=`${Date.now()}: New Req Received\n`;
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(req.url){
            case '/':
               // res.writeHead(200,{'Content-Type':'text/plain'});
                res.end('Welcome to the Home Page\n');
                break;
            case '/about':
                //res.writeHead(200,{'Content-Type':'text/plain'});
                res.end('Welcome to the About Page\n');
                
                break;
            case '/contact':
                //res.writeHead(200,{'Content-Type':'text/plain'});
                res.end('Welcome to the Contact Page\n');
                break;
            default:
                //res.writeHead(404,{'Content-Type':'text/plain'});
                res.end('Page Not Found\n');
        }
        //res.end('Hello from Server\n');
    });
    // console.log('Request received for:', req.url);
    // res.writeHead(200,{'Content-Type':'text/plain'});
    
});

myServer.listen(7000,()=>{
    console.log('Server is running on port 7000');
});