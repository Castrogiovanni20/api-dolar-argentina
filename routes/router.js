const express = require('express');
const router = express.Router();

const dolarSiService = require ('../services/dolarSiService')
const dolarSiServiceInstance = new dolarSiService()

const dolarController  = require('../controller/dolarController')
const dolarInstance = new dolarController(dolarSiServiceInstance)

const bancoController  = require('../controller/bancosController')
const bancoInstance = new bancoController(dolarSiServiceInstance)

const riesgoController = require('../controller/riesgoController');
const riesgoInstance = new riesgoController(dolarSiServiceInstance)


/**
 * @description Rutas dolar
 */
router.get('/api/dolaroficial',  dolarInstance.getDolarOficial)
router.get('/api/dolarblue',     dolarInstance.getDolarBlue)
router.get('/api/contadoliqui',  dolarInstance.getContadoConLiqui)
router.get('/api/dolarpromedio', dolarInstance.getDolarPromedio)
router.get('/api/dolarbolsa',    dolarInstance.getDolarBolsa)

/**
 * @description Rutas bancos
 */
router.get('/api/bbva', bancoInstance.getDolarBBVA)
router.get('/api/piano', bancoInstance.getDolarPiano)
router.get('/api/hipotecario', bancoInstance.getDolarHipotecario)
router.get('/api/galicia', bancoInstance.getDolarGalicia)
router.get('/api/santander', bancoInstance.getDolarSantander)
router.get('/api/ciudad', bancoInstance.getDolarCiudad)
router.get('/api/supervielle', bancoInstance.getDolarSupervielle)
router.get('/api/patagonia', bancoInstance.getDolarPatagonia)
router.get('/api/comafi', bancoInstance.getDolarComafi)

/**
 * @description Ruta riesgo pais
 */
router.get('/api/riesgopais', riesgoInstance.getRiesgoPais)


module.exports = router