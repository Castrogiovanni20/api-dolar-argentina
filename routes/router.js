const express = require('express');
const router = express.Router();
const dolarc  = require('../controller/dolarController')
const bancoc  = require('../controller/bancosController')
const riesgoc = require('../controller/riesgoController')


/**
 * @description Rutas dolar
 */
router.get('/api/dolaroficial',  dolarc.getDolarOficial)
router.get('/api/dolarblue',     dolarc.getDolarBlue)
router.get('/api/contadoliqui',  dolarc.getContadoConLiqui)
router.get('/api/dolarpromedio', dolarc.getDolarPromedio)
router.get('/api/dolarbolsa',    dolarc.getDolarBolsa)

/**
 * @description Rutas bancos
 */
router.get('/api/bbva', bancoc.getDolarBBVA)

/**
 * @description Ruta riesgo pais
 */
router.get('/api/riesgopais', riesgoc.getRiesgoPais)


module.exports = router