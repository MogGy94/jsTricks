const fs = require('fs');

const file = process.argv[2];
if (!file) {
    throw new Error('Ingresa Archivo no seas Gil')
}

fs.readFile(file, function (err, content) {
    if (err) {
        return console.log(err);
    }

    const lines = content.toString().split("\n").length
    console.log(lines);

})

