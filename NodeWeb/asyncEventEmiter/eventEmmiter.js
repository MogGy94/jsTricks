const { EventEmitter } = require("events");

const EventEmmiter = require('events');

class Logger extends EventEmmiter {
    execute(cb) {
        console.log("Before");
        console.group("");
        this.emit('start');
        console.group("");
        cb();
        console.groupEnd("");
        this.emit('finish');
        console.groupEnd("");
        console.log('After');
    }
}

const logger = new Logger();

logger.on('start', () => console.log("Empesando"));
logger.on("finish", () => console.log(("Finish")));
logger.on("finish", () => console.log("Its Done"));


logger.execute(() => console.log("*** Ejecutando****"));

logger.execute(() => setTimeout(() => console.log("*** Ejecutando****"), 1000));