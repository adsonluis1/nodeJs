import chalk from "chalk";
import inquirer from "inquirer";
import * as fs from "fs"

function getAllAccount (bancoData){
    let contas
    try {
        const data = fs.readFileSync(bancoData,'utf-8')
        contas = JSON.parse(data)
    } catch (error) {
        console.log(chalk.bgRed('ERROR - ' + error))
    }
    return contas
}

function sacar (accountName, valor){
    const {contas} = getAllAccount('bg.json')
    if(!/[a-z]|\s|[-=+_*^%$#@!<>(){}\\]/g.test(valor)){
        const accountUpdate = contas.filter((account)=>{
            if(account.name == accountName){
                account.saldo-= Number(valor)
                return account
            } 
        })
        const newContas = contas.filter((account)=> account.name != accountName)
        newContas.push(accountUpdate[0])
        const json = {
            contas:newContas 
        }
        fs.writeFileSync('bg.json', JSON.stringify(json)) 
        console.log(chalk.bgCyan('Saque realizado'))
        checkBalance(accountName)
    }else{
        console.log(chalk.bgRed('Digite um valor correto para afetuar o saque'))
    }
}

function deposit (accountName, valor){
    const {contas} = getAllAccount('bg.json')
    if(!/[a-z]|\s|[-=+_*^%$#@!<>(){}\\]/g.test(valor)){
        const accountUpdate = contas.filter((account)=>{
            if(account.name == accountName){
                account.saldo+= Number(valor)
                return account
            } 
        })
        const newContas = contas.filter((account)=> account.name != accountName)
        newContas.push(accountUpdate[0])
        const json = {
            contas:newContas 
        }
        fs.writeFileSync('bg.json', JSON.stringify(json)) 
        console.log(chalk.bgCyan('Deposito realizado'))
        checkBalance(accountName)
    }else{
        console.log(chalk.bgRed('Digite um valor correto para afetuar o deposito'))
    }
}

function checkBalance (nameAccount){
    const {contas} = getAllAccount('bg.json')
    const account = contas.filter((conta)=> conta.name == nameAccount.toLowerCase())[0]
    
    if(account){
        console.log(chalk.bgGray(`Come da conta: ${account.name} \nSaldo atual: R$${account.saldo}`))
        return true
    }else{
        console.log(chalk.bgRed('Conta não encontrada'))
        return false
    }
    
}  

function existingAccountVerification(nameAccount){
    let pass = false
    const {contas} = getAllAccount('bg.json')
    if(contas.some((conta)=> conta.name == nameAccount.toLowerCase())) return pass

    pass = true
    return pass
}

function createAccount (nameAccount){
    if(!existingAccountVerification(nameAccount)){
        console.log(chalk.bgRed('Conta já existe'))
        return
    }
    const {contas} = getAllAccount('bg.json')
    const newConta = {name:nameAccount.toLowerCase(), saldo:0}    
    contas.push(newConta)
    const json = {
        contas:contas 
    }
    fs.writeFileSync('bg.json', JSON.stringify(json))
    console.log(chalk.bgCyan("Conta criada!"))
}

inquirer.prompt([
    {name:'tipo',message:'qual o tipo da operação',type:'list',choices:['Criar conta','Consultar Saldo','Depositar','Sacar','Sair']}
]).then(({tipo})=>{
    if(tipo == 'Criar conta'){
        console.log(chalk.bgCyan('Parabéns por escolher o adsinBank'))
        inquirer.prompt([{name:'nameAccount',message:'Digite o nome que deseja para sua conta'}]).then(({nameAccount})=>{
            createAccount(nameAccount)
        })
       
    }

    else if(tipo == 'Consultar Saldo'){
        inquirer.prompt([{name:'nameAccount', message:'Digite o nome da conta, para checarmos o saldo'}]).then(({nameAccount})=>{
            checkBalance(nameAccount)
        })      

    }

    else if(tipo == 'Depositar'){
        inquirer.prompt([{name:'nameAccount', message:'Digite o nome da conta que deseja depositar'}]).then(({nameAccount})=>{
            if(checkBalance(nameAccount)){
                inquirer.prompt([{name:'valor', message:`Digite o valor que deseja depositar na conta, ${nameAccount}`}]).then(({valor})=>{
                    deposit(nameAccount,valor)
                })  
            }
        })    
    }

    else if(tipo == 'Sacar'){
        inquirer.prompt([{name:'nameAccount', message:'Digite o nome da conta que deseja sacar'}]).then(({nameAccount})=>{
            if(checkBalance(nameAccount)){
                inquirer.prompt([{name:'valor', message:`Digite o valor que deseja sacar da conta, ${nameAccount}`}]).then(({valor})=>{
                    sacar(nameAccount,valor)
                })  
            }
        }) 
    }

}).catch((err)=>{
    console.log(chalk.bgRed('ERROR - ' + err))
})