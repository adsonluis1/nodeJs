import * as os from "os"

console.log('ram: ' + os.freemem())
console.log('cpu: ' + os.cpus())
console.log('sistema: ' + os.type())
console.log('diretorio principal' + os.homedir())
console.log(os.hostname())

