// built in modules
const os = require('os')
const user = os.userInfo()
// info about user
console.log(user);
console.log(`the system uptime is ${os.uptime()}s`);

const currentOs = {
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOs);

