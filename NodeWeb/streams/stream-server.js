const fs = require('fs');
const server = require('http').createServer();

console.log("server working on 3000 port");
server.on('request', (req, res) => {
    console.log("handle Request");
    const src = fs.createReadStream('./big.txt');
    src.pipe(res);
});

server.listen(3000);