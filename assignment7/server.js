const express=require('express');
const server=express();
const port=3000;
// '/'->default page/ home page
server.get('/',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/index.html');
});
// '/welcome'->url path using GET
server.get('/welcome',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/welcome.html');
});
//share the css file
server.get('/css/style.css',(req,resp)=>{
        resp.sendFile(__dirname+'/css/style.css');
});

// '/welcome'->url path using POST
server.post('/welcome',(req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.sendFile(__dirname+'/welcome.html');
});


server.listen(port,()=>{
    console.log(`http://localhost:${port} started `);
});
