
const crypt = require('crypto');

//Validacion de un Hash creado 

console.log("encription test")
var creepy = function (clear) {
    const LENGTH = 16; //16bits
    let salt = crypt.randomBytes(Math.ceil(LENGTH / 2))
        .toString('hex').slice(0, LENGTH);
    //SHA 
    const HASH = crypt.createHmac("sha512", salt);
    HASH.update(clear);
    return {
        salt,
        hash: HASH.digest('hex')
    }
}

//MocK de valor guardado en BD
const ClearPass = "Mooggy MOn";
const creeped = creepy(ClearPass);

console.log(creeped);
//Funcion de validacion de Valores crifrafos
var validate = (loginpass, hashedpass, salt) => {
    let NEW_HASH = crypt.createHmac("sha512", salt);
    NEW_HASH.update(loginpass);
    loginpass = NEW_HASH.digest("hex");

    return {
        validation: loginpass == hashedpass,
        loginpass,
        hashedpass
    }

}


const VAL = validate("Mooggy MOn", creeped.hash, creeped.salt);

console.log(VAL);
