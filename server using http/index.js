const http = require('http');

const myServer = http.createServer((req, res)=>{
     // console.log('New Req Received');
     console.log(req);
     res.end('Hello from server');
});

myServer.listen(8000,()=>{
     console.log('Server is running on port 8000');  // Log the server is running on port 8000
});