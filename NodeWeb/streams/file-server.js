const fs = require('fs');
const server = require('http').createServer();

console.log("server working on 3000 port");
server.on('request', (req, res) => {
    console.log("handle Request");
    fs.readFile("./big.txt", (err, data) => {
        if (err) {
            console.log("error", err);
        }
        res.end(data)
    })
});

server.listen(3000);