const client = require('../db/conn')

class ProximosJogosBrasileiraoA {
    constructor(casa,fora,data,hora){
        this.casa = casa
        this.fora = fora
        this.data = data
        this.hora = hora 
    }
}

module.exports = class BrasileiraoModels {
    constructor(nome,rank,vitorias,derrotas,empates,golsMarcados,golsSofridos,saldoGols,jogosAnteriores,proximosJogos,pontos,posicao,id){
        this.nome = nome
        this.rank= rank
        this.vitorias = vitorias
        this.derrotas = derrotas
        this.empates = empates
        this.golsMarcados = golsMarcados
        this.golsSofridos = golsSofridos
        this.saldoGols = saldoGols
        this.jogosAnteriores = jogosAnteriores
        this.proximosJogos = proximosJogos
        this.pontos = pontos
        this.posicao = posicao
        this.id = id
    }

    static async getTimeByNome(nome){
        try {
            return await client.db().collection('brasileiraoA').findOne({nome:nome})
        } catch (error) {
            return error
        }
    }

    static async getGamesProximosJogosCampeonato(){
        return await client.db().collection('proximosJogosBrasileiraoA').find().toArray()
    }

    static async addGamesInProximosJogosCampeonato(casa,fora,data,horario){
        const proximoJogosBrasileiraoA = new ProximosJogosBrasileiraoA(casa,fora,data,horario)
        await client.db().collection('proximosJogosBrasileiraoA').insertOne(proximoJogosBrasileiraoA)
    }

    static async removeGamesProximosJogosCampeonato(horarioGame, dataGame){
        await client.db().collection('proximosJogosBrasileiraoA').deleteMany({hora:horarioGame, data:dataGame})
    }

    static async getTable(){
        return await client.db().collection('brasileiraoA').find().toArray()
    }
    
    static async updateTable(time){
        await client.db().collection('brasileiraoA').updateOne({nome:time.nome},{$set:{posicao:time.posicao}}).catch((err)=>{
            console.log(err)
        })
    }

    static async changingStatistics(timeNome, updatedTime){
        await client.db().collection('brasileiraoA').updateOne({nome:timeNome},{$set:updatedTime})
    }

    static async changingStatisticsProximosJogos (timeNome,proximosJogos){
        await client.db().collection('brasileiraoA').updateOne({nome:timeNome},{$set:{proximosJogos:proximosJogos}})
    }

    async save(){
        await client.db().collection('brasileiraoA').insertOne(this)
    }
}