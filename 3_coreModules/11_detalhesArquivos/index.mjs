import * as fs from 'fs'

fs.stat('teste',(err, stats)=>{
    if(err){
        console.log(err)
        return
    }

    console.log(stats.isDirectory())
    console.log(stats.isFile())
    console.log(stats.isCharacterDevice())
    console.log(stats.isSymbolicLink())
    console.log(stats.birthtime)
    console.log(stats.size)
})
