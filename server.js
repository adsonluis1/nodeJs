import { createServer } from 'node:http'

const server = createServer(() => {
    console.log('hello world')
})

server.listen(3333)