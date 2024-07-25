const express = require('express')
const brasileiraoA = require('../controllers/brasileirao')
const router = express.Router()

router.get('/proximosJogos', brasileiraoA.getGamesByProximosJogosCampeonato)
router.post('/addTime', brasileiraoA.addTime)
router.patch('/changingStatistics', brasileiraoA.changingTeamStatistics)
router.patch('/changingProximosJogos', brasileiraoA.changingTeamStatisticsProximosJogos)
router.patch('/patchTable', brasileiraoA.patchTable)
router.patch('/deleteProximosJogos', brasileiraoA.removeGamesProximosJogosCampeonatoByTime)

module.exports = router