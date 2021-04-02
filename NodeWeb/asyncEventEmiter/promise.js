
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            resolve('Hola Mundo');
        } else {
            reject(new Error('Helo Error'))
        }
    }, 500);
});

promise
    .then(msg => msg.toUpperCase())
    .then(msg => console.log("message", msg))
    .catch(err => console.log("error", err))