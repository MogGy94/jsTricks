const bcrypt = require('bcrypt');
const pass = 'pasSegura1';

bcrypt.hash(pass, 4, (err, hash) => {
    console.log(hash);

    bcrypt.compare(pass, hash, (err, res) => {
        console.log(res);
    })
});
