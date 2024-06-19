// server nativo
// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//     response.write('hello world novamente')


//     response.end()
// })

// server.listen(3333)

// import { dataBaseMemory } from "./database-memory.js";
import { fastify } from "fastify";
import { dataBasePostgres } from "./database-postgre.js";

const server = fastify()

// const dataBase = new dataBaseMemory()
const dataBase = new dataBasePostgres()

server.post('/videos',async (request,response)=>{
    const {title,description,duration} = request.body
    
    await dataBase.create({
        title,
        description,
        duration
    })
    
    return response.status(201).send()
})

server.get('/videos',async (request, response)=>{
    const videos = await dataBase.list()
    
    return videos
})

server.put('/videos/:id', async (request, response)=>{
    const videoId = request.params.id
    const {title,description,duration} = request.body

    await dataBase.update(videoId,{
        title,
        description,
        duration
    })

    return response.status(204).send()
})

server.delete('/videos/:id', async (request,response)=>{
    const videoId = request.params.id
    
    await dataBase.delete(videoId)

    return response.status(204).send()
})

server.listen({
    port:3333
})