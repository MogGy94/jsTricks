const sharp = require('sharp');
console.log('manejo de imagenes con la libreria sharp');
const file = 'amigos.jpg';
console.log(__dirname);
sharp(`${__dirname}/${file}`).resize(30).toFile(`${__dirname}/resz.jpg`)
sharp(`${__dirname}/${file}`).grayscale().toFile(`${__dirname}/gray.jpg`)