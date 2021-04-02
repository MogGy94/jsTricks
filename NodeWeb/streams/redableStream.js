const { Readable } = require('stream');
/* 
const redableStream = new Readable();

redableStream.push(`${0 / 0} `.repeat(10).concat('Moggy !! MOggy'));
redableStream.push(null);

*/

/**Readable On Demand */

const redableStream = new Readable({
    read(size) {
        setTimeout(() => {
            if (this.currentChartCode > 90) {
                this.push(null)
            }

            this.push(String.fromCharCode(this.currentChartCode++));
        }, 100)
    }
});


redableStream.currentChartCode = 65;

redableStream.pipe(process.stdout);