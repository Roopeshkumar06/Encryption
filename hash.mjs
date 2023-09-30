import {createHash} from 'crypto'
//create a string hash

const hash=(input) =>{
    return createHash('sha256').update(input).digest('base64')
}
// console.log(hash("roopesh@06"));

//compare two passwords
let password="Hi mom"
const hash1=hash(password)
console.log(hash1);

const hash2=hash(password)
const match = hash1 === hash2
console.log(match ? 'good password' : 'passwords do not match');
//hash by itself is not sufficient to storing a password in a data base because of the predictability that means
//when some one uses Hi mom as password then we both have the same hash that is why we use salt
//salt just adds a random number to the hash which will be discussed in the next file

