import * as path from 'path'

const customPath = '/relatorios/adson/main.pdf'

console.log(path.dirname(customPath))
console.log(path.basename(customPath))
console.log(path.extname(customPath))

// path absoluto
console.log(path.resolve(customPath))

// criando path
const folder = 'arquivos'
const fileName = 'documentosAdson.pdf'

const finalPath = path.join('/',folder,fileName)
console.log(finalPath)