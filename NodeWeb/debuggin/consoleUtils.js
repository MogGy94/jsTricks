/*  */
const util = require('util');
// %s - string
// %d - numero
// %j - json

console.log("Un %s y un %s", "perrito", "gatito");

const a = util.format("Un %s y un %s", "perrito", "gatito")
console.log(a);
console.info("hello world");
console.warn("hello world");
console.assert(1 == "1");
console.assert(1 === "1");

//console.trace("hello")
const debuglog = util.debuglog("foo");

debuglog("hola from foo")


