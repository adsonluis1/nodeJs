const EventEmiter = require(`events`)
const eventEmiter = new EventEmiter()

eventEmiter.on('contar',()=>{
    let a = 0
    while(a<=5){
        console.log(a)
        a++
    }
})

eventEmiter.emit('contar')