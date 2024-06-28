const fs = require('fs')

fs.unlink('index.txt',(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('arquivo excluido')
})