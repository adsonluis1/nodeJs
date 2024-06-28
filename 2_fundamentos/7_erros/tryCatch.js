const readLine = require(`readline`).createInterface({
    input: process.stdin,
    output: process.stdout
})

readLine.question('Digite um numero ',(num)=>{
    try {
        if(!/\d/g.test(num))
            throw new Error(`Numero incorreto`)
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }

    console.log(`fim do codigo`)
    readLine.close()
})
