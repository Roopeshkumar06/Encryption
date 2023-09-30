// import {publicKey,privateKey} from './keypair'
// import { publicEncrypt, privateDecrypt } from 'crypto'
// const message="I am coming"

// const encryptedData = publicEncrypt(
//     publicKey,
//     Buffer.from(message)
// )
// console.log(encryptedData.toString('hex'));
// const decryptedData = privateDecrypt(
//     privateKey,
//     encryptedData
// )
// console.log(decryptedData.toString("utf-8"));

import  { publicEncrypt, privateDecrypt } from 'crypto'
import { publicKey, privateKey } from "./keypair";

const message = "the british are coming!";

const encryptedData = publicEncrypt(publicKey, Buffer.from(message));

console.log(encryptedData.toString("hex"));

const decryptedData = privateDecrypt(privateKey, encryptedData);

console.log(decryptedData.toString("utf-8"));

