// server nativo
// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//     response.write('hello world novamente')


//     response.end()
// })

// server.listen(3333)

import { fastify } from "fastify";
import { dataBaseMemory } from "./database-memory.js";

const server = fastify()

const dataBase = new dataBaseMemory()

server.post('/videos',(request,response)=>{
    const {title,description,duration} = request.body
    
    dataBase.create({
        title,
        description,
        duration
    })
    
    return response.status(201).send()
})

server.get('/videos',(request, response)=>{
    const videos = dataBase.list()
    
    return videos
})

server.put('/videos/:id', (request, response)=>{
    const videoId = request.params.id
    const {title,description,duration} = request.body

    dataBase.update(videoId,{
        title,
        description,
        duration
    })

    return response.status(204).send()
})

server.delete('/videos/:id', (request,response)=>{
    const videoId = request.params.id
    
    dataBase.delete(videoId)

    return response.status(204).send()
})

server.listen({
    port:3333
})