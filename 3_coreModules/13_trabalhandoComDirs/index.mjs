// criando dirotoro
import * as fs from 'fs'
import inquirer from 'inquirer'

inquirer.prompt([
    {name:'file',message:'Nome do arquivo que vc deseja criar'}
]).then(({file})=>{
    if(!fs.existsSync(`./${file}`)){
        fs.mkdirSync(file)
        console.log('diretorio criado')
    }else{
        console.log('ERROR - diretoro ja existente!')
    }
}).catch((err)=>{
    console.log(err)
})
