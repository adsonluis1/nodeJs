const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Qual seu nome? ',(nome)=>{
    if(/^\w/g.test(nome))
        console.log(`Ola, ${nome}. Seja bem vindo`)
    else
        console.log('Digite nome correto')

    readline.close()
})