const fs = require('fs');

fs.copyFile("song.txt", "limon.txt", err => {
    if (err) { console.log(err); }
    console.log("arcchivo copiado con exito");
})