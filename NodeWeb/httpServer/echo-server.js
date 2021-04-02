
const http = require('http');
const server = http.createServer();
const PORT = 3001;
/**El objeto request es un readeable Stream que hereda de Eventemmiter*/

server.on('request', (req, res) => {
    if (req.method === 'POST' && req.url === "/echo") {
        let body = [];
        req.on('data', chunck => {
            body.push(chunck);
        })
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            body = Buffer.concat(body).toString();
            
            res.end(body);
        });

    } else {
        res.statusCode = 404;
        res.end();
    }
})

server.listen(PORT);
console.log(`server Runing on Port ${PORT}`);
console.log(`http://localhost:${PORT}`);