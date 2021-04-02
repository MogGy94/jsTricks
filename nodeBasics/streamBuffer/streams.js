const fs = require('fs');
const stream = require('stream');
const util = require('util');
let data = '';
let redeableStream = fs.createReadStream(`${__dirname}/in.txt`);
redeableStream.setEncoding('UTF8');
redeableStream.on('data', (chunk) => {
    console.log(chunk);
})

redeableStream.on('end', () => {
    console.log('file Upload Succesfull');
});

process.stdout.write("  Buffer");
process.stdout.write(" De ");
process.stdout.write(" salida   ***> \n");

const Transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}

util.inherits(Mayus, Transform);
Mayus.prototype._transform = function (chunk, cod, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

var mayus = new Mayus();

redeableStream
    .pipe(mayus)
    .pipe(process.stdout)


