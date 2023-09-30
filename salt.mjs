import { scryptSync, randomBytes,timingSafeEqual } from 'crypto';
const users = [];
const signUp = (email, password) => {
    const salt=randomBytes(16).toString('hex')
    const hashedPassword=scryptSync(password,salt,64).toString('hex')
    const user = { email, password: `${salt}:${hashedPassword}` }
    users.push(user)
    return user
}
signUp("rajavikramarka@gmail.com","vikramarka")  

const login = (email, password) => {
    const user=users.find(v=>v.email===email)
    const [salt,key]=user.password.split(':')
    const hashedBuffer = scryptSync(password, salt, 64)
    const keyBuffer=Buffer.from(key,'hex')
    const match=timingSafeEqual(hashedBuffer,keyBuffer)
    if (match) {
        return 'login successful'
    } else {
        return 'login fail'
    }
}
console.log(login("rajavikramarka@gmail.com","vikramarka"))