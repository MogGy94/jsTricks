const { log } = require('console');
const os = require('os');

console.log("Cpu Info");
console.table(os.cpus());
console.table(os.cpus().map(cpu => cpu.times))

/* console.log("Ip Adress", os.networkInterfaces()) */;
console.log(os.release());
console.log(os.userInfo());