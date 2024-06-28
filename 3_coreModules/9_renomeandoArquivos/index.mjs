import { rename } from "fs"
import inquirer from "inquirer"

inquirer.prompt([
    {name:"old",message:"nome atual do arquivo: "},
    {name:"new", message:"novo nome do arquivo: "}    
]).then((data)=>{
    rename(data.old,data.new,(err)=>{
        if(err){
            throw new Error("Não foi possivel mudar o nome do arquivo")
        }
        console.log(`O arquivo ${data.old} agora se chama ${data.new}`)
    })
}).catch((err)=>{
    console.log(err)
})



