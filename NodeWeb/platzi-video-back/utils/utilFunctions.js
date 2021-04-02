const fsp = require('fs').promises;
const crypto = require('crypto');
async function ReadFile(path, cb) {
    try {
        const data = await fsp.readFile(path);
        return data.toString();
    } catch (error) {
        console.log(error);
    }
}

async function EscribirFIle(path, content, cb) {

    try {
        await fsp.writeFile(path, content);
        console.log("Async File write correctly");
        //cb() ;
    } catch (error) {
        console.log(error);
    }
}

/*crea un hash de 256b con un string*/
function hash(secret) {
    const h = crypto.createHmac('sha256', secret).digest('hex');
    //  .update('I love cupcakes')

    return h
}


/**Regresa una Arreglo en posiciones aleatorias */
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp
    }
    return arr
}



module.exports = {
    ReadFile,
    EscribirFIle,
    hash,
    shuffleArray
}