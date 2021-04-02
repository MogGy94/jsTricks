const fs = require('fs');
const file = fs.createWriteStream('./big.txt');
const texto = `Herman Miller Work Chairs ... Manual de uso de la silla Herman Miller Embody. ... Escuche de qué manera Embody brinda soporte a la investigación del neurobiólogo oftálmico Budd Tucker.\n`
for (let i = 0; i <= 1e6; i++) {
    file.write(texto);
}

file.end();


