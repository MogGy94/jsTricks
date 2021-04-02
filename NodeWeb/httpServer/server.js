const http = require('http');
const server = http.createServer();
const PORT = 3000;

server.on('request', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('hello World');
})

server.listen(PORT);
console.log(`server Runing on Port ${PORT}`);
console.log(`http://localhost:${PORT}`);