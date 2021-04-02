
const promiseFunction = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve('Hola Mundo');
        } else {
            reject(new Error('Helo Error'))
        }
    }, 500);
});

async function asyncAwait() {
    try {
        const msg = await promiseFunction();
        console.log("message", msg.toUpperCase());
    } catch (err) {
        console.log('error', err);
    }
}

asyncAwait();