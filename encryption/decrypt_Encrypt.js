console.log("encriptar y des encriptar mensajes");
const crypto = require('crypto');

const alice = crypto.createECDH('secp256k1');
alice.generateKeys();

const bob = crypto.createECDH('secp256k1');
bob.generateKeys();

const alicePublicKeyBase64 = alice.getPublicKey().toString('base64');
const bobPublicKeyBase64 = bob.getPublicKey().toString('base64');

const aliceShareKey = alice.computeSecret(bobPublicKeyBase64, 'base64', 'hex');
const bobShareKey = bob.computeSecret(alicePublicKeyBase64, 'base64', 'hex');

const statusOBJ = {
    validation: aliceShareKey === bobShareKey,
    Alice_Share_Key: aliceShareKey,
    Bob___Share_Key: bobShareKey
}

console.log(statusOBJ)


const MESSAGE = "THIS IS THE SECRET INFO Moggy mOn ";
const IV = crypto.randomBytes(16);

// Se crea un Objeto Cypher ( [algoritmo] , [llave], [vectorDeInicializacion_IV] )
/**
 * IV: Vector de inicializacion,
 * Puede se Publico
 * debe ser Aleatorio
 * Solo se usa una vez por mensaje
 */
const cipher = crypto.createCipheriv(
    'aes-256-gcm', Buffer.from(aliceShareKey, 'hex'), IV);

let encrypted = cipher.update(MESSAGE, 'utf8', 'hex');
encrypted += cipher.final('hex');

const Auth_tag = cipher.getAuthTag().toString('hex');
console.table({
    IV_16bytes: IV.toString('hex'),
    encrypted,
    Auth_tag
})
const payload = IV.toString('hex') + encrypted + Auth_tag;
const payloadB64 = Buffer.from(payload, 'hex').toString('base64');

console.log({
    CipherMSG: payloadB64
});
/*** Fase De Decifrado *****/
/*** Es Necesario Calcular desde el payload Hexagesimal
 *   El Vector de Inicializacion
 *   El Mensaje encriptado
 *   El Tag de autenticacion
 *  *****/
/*** Fase De Decifrado *****/

const bob_payload = Buffer.from(payloadB64, 'base64').toString('hex');//Hecagesimal

const bob_iv = bob_payload.substr(0, 32);
const bob_encrypted = bob_payload.substr(32, bob_payload.length - 32 - 32);
const bob_auth_tag = bob_payload.substr(bob_payload.length - 32, 32);

console.table({ bob_iv, bob_encrypted, bob_auth_tag });

try {
    const decipher = crypto.createDecipheriv(
        'aes-256-gcm',
        Buffer.from(bobShareKey, 'hex'),
        Buffer.from(bob_iv, 'hex')
    );

    decipher.setAuthTag(Buffer.from(bob_auth_tag, 'hex'));

    let decrypted = decipher.update(bob_encrypted, 'hex', 'utf8')
    decrypted += decipher.final('utf8');

    console.log({
        DecryptedMSG: decrypted
    });

} catch (error) {
    console.log(error);
}
/* hay que mapear todo el Arreglo de Llaves
    y cirfrarlo
*/
