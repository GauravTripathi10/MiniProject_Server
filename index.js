// This is all about the serving muli file in server using diffrent url:

let http=require('http');
const port=8000;


let fs=require('fs');
const { log } = require('console');

let server=http.createServer((req,res)=>{

    
    res.writeHead(200,{'Content-Type':'text/html'});
    
    let fileurl;
    switch(req.url){
        case '/':
            fileurl='./index.html';
            break;
        case '/about':
            fileurl='./about.html';
            break;
        case '/contact':
            fileurl='./contact.html';
            break;
        case '/index.html':
            fileurl='./index.html';
            break;
        case '/about.html':
            fileurl='./about.html';
            break;
        case '/contact.html':
            fileurl='./contact.html';
            break;
        default:
            fileurl='./404.html';
        
    }
    fs.readFile(fileurl,(err,data)=>{
        if(err){
            console.log("You got error",err);
            res.end('<h1>You got error !!</h1>');
        }
        else{
            return res.end(data);
        }
    })



});

server.listen(port,(err)=>{
    if(err) {
        console.log("Something Went wrong!!",err);
        return;
    }
    else{
        console.log("Server listening and Running on the port: " + port);
    }

})