// import { log } from 'console';
import { generateKeyPairSync } from 'crypto'

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,//the length of your key in bits
    privateKeyEncoding: {
        type: 'pkcs8', // recommended to the node.js docs
        format: 'pem', //private enhanced  mail
        // cipher:'aes-256-cbc',
        // passphrase:'top secret'
    },
    publicKeyEncoding: {
        type: 'spki',// recommended to the node.js docs
        format: 'pem'
    }
});
// console.log(publicKey);
// console.log(privateKey);

module.exports = {
    privateKey, publicKey
}
//now we use these keys in assymetric encryption in assymetric.mjs
