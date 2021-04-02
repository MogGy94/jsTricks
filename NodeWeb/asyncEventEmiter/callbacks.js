const asycnCallback = function (cb) {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            return cb(null, 'Hola Mundo');
        } else {
            return cb(new Error('Helo Error'))
        }
    }, 1000)
}


asycnCallback((err, msg) => {
    if (err) {
        console.log('error', err);
    } else {
        console.log('message', msg);
    }
});

