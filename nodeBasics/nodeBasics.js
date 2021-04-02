console.log("hola Mundo");
let i = 0;


/* setInterval(() => {
    console.log(i);
    i++;
}, 1000)

 */
setTimeout(() => {
    console.log(i);
    i++;
}, 1000)

let nombre = process.env.NOMBRE || "Default";

console.log("hola " + nombre);


function soyAsinc() {
    console.log("soy asincroono");
}

/* console.log(global) */


let interv = setInterval(() => {
    console.log(i);
    if (i === 5) {
        clearInterval(interv)
    }
    i++;
}, 1000)