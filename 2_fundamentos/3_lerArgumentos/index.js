const args = process.argv.slice(2)
const argumentos = {}
args?.map((arg)=>{
    arg = arg.split('=')
    argumentos[arg[0]]=arg[1]
})
console.log(argumentos)
