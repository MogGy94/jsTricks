/***MOdulo para trabajar con fechas */
const mom = require('moment');
console.log('manejo de fechas');
const ahora = mom();

console.log({ ahora });
console.log(ahora.toString());

console.log(ahora.format('YYYY/MM/DD'));
console.log(ahora.format(' YYYY  MM  DD'));
