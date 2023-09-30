//HMAC-Hash Based Message Authentication Code
import {createHmac} from 'crypto'
const key = "super-secret!";
const message = "boo 👻";

const hmac = createHmac("sha256", key).update(message).digest("hex");

console.log(hmac);

const key2 = "other-password";
const hmac2 = createHmac("sha256", key2).update(message).digest("hex");

console.log(hmac2);

// we get the same hash when the same password is used but different hash when different password is used
//when we want to let some one know our secret that means letting some one to read your message that is where the encryption comes in
// there are two types of encryptions 1.Symmetric encryption and asymmetric