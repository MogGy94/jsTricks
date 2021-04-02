/**Acceder a variables de bajo nivel en el entorno de Js
 *
 */
const os = require('os');
console.log("Os varibles");

console.log(os.arch());
console.log(os.platform());

console.log(`Los Nucleos de mi Pc : ${os.cpus().length}`)
console.table(os.cpus());
const times = os.cpus().map(cpu => (cpu.times));
console.table(times)

//console.log(os.constants);

console.log(os.freemem());
const SIZE = 1024;
const mem = os.freemem()
const kb = (bytes) => (bytes / SIZE);
const mb = (bytes) => (kb(bytes) / SIZE);
const gb = (bytes) => (mb(bytes) / SIZE);

const memtable = [
    {
        unit: "bits",
        size: mem,
    },
    {
        unit: "bytes",
        size: kb(mem)
    },
    {
        unit: "megabytes",
        size: mb(mem),
    },
    {
        unit: "gygabytes",
        size: gb(mem),
    },
    {
        unit: "MEMORIA_TOTAL GB",
        size: gb(os.totalmem()),
    }
]

console.table(memtable);

console.log({ homeDir: os.homedir() });
console.log({ tempDir: os.tmpdir() });
console.log({ PcName: os.hostname() });

console.log(os.networkInterfaces());

