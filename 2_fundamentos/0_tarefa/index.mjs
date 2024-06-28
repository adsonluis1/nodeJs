import inquirer from "inquirer";

inquirer.prompt([
    {name:'nome',message:'Digite seu nome'},
    {name:'idade',message:'Digite sua idade'}
]).then((response)=>{
    if(/\d|\s|[-=+_*^%$#@!<>(){}\\]/g.test(response.nome)){
        throw new Error(`Nome invalido`)
    }
    if(/[a-z]|\s|[-=+_*^%$#@!<>(){}\\]/ig.test(response.idade)){
        throw new Error(`Idade invalida`)
    }
    console.log(response)
}).catch((error)=>{
    console.log(`Error: ${error}`)
})