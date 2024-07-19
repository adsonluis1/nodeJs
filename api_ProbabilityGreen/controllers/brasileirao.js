const Times = require('../models/timesModels')

module.exports = class brasileiraoA {
    static async addTime(req, body){
        const {nome,rank,vitorias,derrotas,empates,golsMarcados,golsSofridos,saldoGols,jogosAnteriores,proximosJogos,posicao} = req.body
        
        const newTime = new Times(nome,rank,vitorias,derrotas,empates,golsMarcados,golsSofridos,saldoGols,jogosAnteriores,proximosJogos,posicao)
        await newTime.save()
        console.log('salvo')
    }
}