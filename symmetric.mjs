// import {createCipheriv,randomBytes,createDecipheriv} from 'crypto'

// //cipher
// let message="I love turtles"
// let key=randomBytes(64)
// let iv=randomBytes(32)
// const cipher=createCipheriv('aes256',key,iv)

// ///encrypt
// const encryptedMessage=cipher.update(message,'utf-8','hex')+cipher.final('hex')
// console.log(`encrypted:${encryptedMessage}`);

// //decipher
// const decipher=createDecipheriv('aes256',key,iv)
// const decipheredMessage=decipher.update(encryptedMessage,'hex','utf-8')+decipher.final('utf-8')
// console.log(`decrypted:${decipheredMessage.toString('utf-8')}`);
 //IV stands for initial vector (prevents identical sequences of text)

import { createCipheriv, randomBytes, createDecipheriv } from 'crypto'

/// Cipher

const message = "i like turtles";
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv("aes256", key, iv);

/// Encrypt

const encryptedMessage =
  cipher.update(message, "utf8", "hex") + cipher.final("hex");
console.log(`Encrypted: ${encryptedMessage}`);

/// Decrypt

const decipher = createDecipheriv("aes256", key, iv);
const decryptedMessage =
  decipher.update(encryptedMessage, "hex", "utf-8") + decipher.final("utf8");

console.log(`Deciphered: ${decryptedMessage.toString("utf-8")}`);


//in the case of symmetric encryption the individuals should have a shared key so we have the concept of public key and 
// and a private key so we have keypair module