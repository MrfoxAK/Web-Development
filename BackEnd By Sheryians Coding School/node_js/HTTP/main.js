const http = require('http');

const server = http.createServer(function(req, res, next) {
     res.end("Hello World!");
})

server.listen(3000);