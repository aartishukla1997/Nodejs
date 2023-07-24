const http = require('http');

const port =5050;

const server = http.createServer((req,res)=> {
    res.end("this is done");
});

server.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})