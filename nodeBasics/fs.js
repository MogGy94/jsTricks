const fs = require('fs');
const fsp = require('fs').promises;

/** File System using Async Await */
const EscribirFIle = async (path, content) => {
    try {
        await fsp.writeFile(path, content);
        console.log("Async File write correctly");
    } catch (error) {
        console.log(error);
    }
}

const ReadFile = async (path) => {
    try {
        const data = await fsp.readFile(path);
        return data.toString();
    } catch (error) {
        console.log(error);
    }
}

const deleteFile = (path) => {
    try {
        fsp.unlink(path);
        console.log("Async Archivo borrado");
    } catch (error) {
        console.error(error);
    }
}

EscribirFIle(`${__dirname}/async.txt`, "This is an Asyc write file")

setTimeout(
    () => ReadFile(`${__dirname}/async.txt`).then(
        data => {
            console.log({ data });
            EscribirFIle(`${__dirname}/async.txt`, `${data} Edited`)
        }
    ), 1000
)
/* 
setTimeout(() => {
    deleteFile(`${__dirname}/async.txt`);
}, 3000)
 */
/*** FIle System using Callbacks */
function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    })
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Se ha escrito el archivo correctamente");
        }
    })
}

function borrar(ruta, cb) {
    fs.unlink(ruta, (err) => {
        console.log("archivo borrado correctamente");
    });
}
const content = ` Lorem impus dolroa bla ablab alba`;
//escribir(`${__dirname}/in2.txt`, content, console.log);
//leer(`${__dirname}/in.txt`, console.log);
borrar(`${__dirname}/in2.txt`)

