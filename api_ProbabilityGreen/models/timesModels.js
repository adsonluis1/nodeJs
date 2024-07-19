const client = require('../db/conn')

module.exports = class Times {
    constructor(nome,rank,vitorias,derrotas,empates,golsMarcados,golsSofridos,saldoGols,jogosAnteriores,proximosJogos,posicao){
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
        this.posicao = posicao
    }

    async save(){
        await client.db().collection('brasileiraoA').insertOne(this)
    }
}