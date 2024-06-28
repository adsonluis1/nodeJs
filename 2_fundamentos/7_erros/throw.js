// throw
const readLine = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
})

readLine.question('Digite um numero',(num)=>{
    if(/\d/g.test(num))
        console.log(num + `É um numero`)
    else{
        throw new Error('Não é um numero')
    }

    console.log('fim do codigo')
    readLine.close()
})


