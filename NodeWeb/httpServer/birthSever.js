const http = require('http');
const moment = require('moment');

const server = http.createServer();
const PORT = 3001;
/**El objeto request es un readeable Stream que hereda de Eventemmiter*/

server.on('request', (req, res) => {
    if (req.method === 'POST' && req.url === "/birth") {
        let body = [];
        req.on('data', chunck => {
            body.push(chunck);
        })
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            body = Buffer.concat(body).toString();
            const dias = [];
            /*  res.end(body); */
            const now = moment();
            const birthdate = moment(body, "YYYYMMDD");
            const aaa = now.format('yyyy');
            const baa = birthdate.format('yyyy')
            const col = Number(aaa) - Number(baa);
            for (let i = 0; i <= col; i++) {
                const bd = moment(birthdate.format("YYYYMMDD"), "YYYYMMDD")
                dias.push({
                    año: bd.add(i, 'years').format('yyyy'),
                    dia: bd.add(i, 'years').format('dddd'),
                })
            }

            console.log(body, aaa, typeof (aaa));
            console.table(dias);
            res.end(JSON.stringify({ dias }))
        });


    } else {
        res.statusCode = 404;
        res.end();
    }
})

server.listen(PORT);
console.log(`server Runing on Port ${PORT}`);
console.log(`http://localhost:${PORT}`);