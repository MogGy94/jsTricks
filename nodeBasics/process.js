//const p = require('process')

process.on('beforeExit', () => {
    console.log('el proceso va a terminar');
});
process.on('exit', () => {
    console.log('proceso finalizado');
    setTimeout(() => {
        console.log('Ya nos desconectamos del event loop esto no se ve');
    })
});

process.on('uncaughtException', (err, origin) => {
    console.error(`nosea pussy ${err} , ${origin}`);
});
//process.on('unhandledRejection')

tacos()