console.log("Este archivo crea un servidor http y lo expone por el puerto 300");
const http = require('http');
const PORT = 3000;

const router = (req, res) => {
    console.log('nueva');
    console.log(req.url);

    switch (req.url) {
        case '/holi':
            res.writeHead(200, { 'Content-Type': 'text/plain' })
            res.write('Welcome Moggy ya te respondí')

            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.write("404: Not Found Nada TO YOU")

            break;
    }
    res.end();
}


http.createServer(router).listen(PORT);





console.log(`llisten on Port ${PORT}`);
/// inspect Code
// nodemon --inspect [file.jal]

// ir a chrome > chrome://inspect/

//seleccionar el prosceso