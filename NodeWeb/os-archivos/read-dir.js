const fs = require('fs');
/**Leer Directorio */
const files = fs.readdir(__dirname, (err, files) => {
    if (err) { return console.log(err) };

    console.log(files);
});

/**Crear Directorio */

fs.mkdir("./moggy/mon/mon3", { recursive: true }, err => {
    if (err) { return console.log(err) }
});

