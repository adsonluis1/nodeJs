import { randomUUID } from 'node:crypto' 

export class dataBaseMemory {
    #videos = new Map()

    create(video) {
        const videoId = randomUUID()
        this.#videos.set(videoId,video)
    }

    list() {
        return Array.from(this.#videos.entries()).map((video)=>{
            const id = video[0]
            const dataVideo = video[1]

            return {
                id,
                ...dataVideo
            }
        })
    }

    update(id,video) {
        this.#videos.set(id,video)
    }

    delete(id) {
        this.#videos.delete(id)
    }

} 