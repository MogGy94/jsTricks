console.log("manejo de buffers y streams binarios");

let buffer1 = Buffer.alloc(1);
let buffer2 = Buffer.from([1, 2, 3, 67]);
let buffer3 = Buffer.from('Moggy');


console.log(buffer1);
console.log(buffer2);
console.log(buffer3);

let abc = Buffer.alloc(26);

for (let i = 0; i < 26; i++) {
    abc[i] = i + 97
}

console.log({ abc });

