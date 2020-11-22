const express = require('express');
const router = express.Router();

const util = require('../util/util')
const utilInstance = new util()

const dolarSiService = require('../services/dolarSiService')
const dolarSiServiceInstance = new dolarSiService()

const dolarController = require('../controller/dolarController')
const dolarInstance = new dolarController(dolarSiServiceInstance, utilInstance)

const bancoController = require('../controller/bancosController')
const bancoInstance = new bancoController(dolarSiServiceInstance, utilInstance)

const riesgoController = require('../controller/riesgoController');
const riesgoInstance = new riesgoController(dolarSiServiceInstance, utilInstance)

const euroController = require('../controller/euroController')
const euroInstance = new euroController(dolarSiServiceInstance, utilInstance)

const realController = require('../controller/realController')
const realInstance = new realController(dolarSiServiceInstance, utilInstance)

const bcraController = require('../controller/bcraController')
const bcraInstance = new bcraController(dolarSiServiceInstance, utilInstance)

/**
 * @description Rutas dolar
 */
router.get('/api/dolaroficial', dolarInstance.getDolarOficial)
router.get('/api/dolarblue', dolarInstance.getDolarBlue)
router.get('/api/contadoliqui', dolarInstance.getContadoConLiqui)
router.get('/api/dolarpromedio', dolarInstance.getDolarPromedio)
router.get('/api/dolarbolsa', dolarInstance.getDolarBolsa)

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
router.get('/api/nacion', bancoInstance.getDolarNacion)
router.get('/api/bind', bancoInstance.getDolarBIND)
router.get('/api/chaco', bancoInstance.getDolarChaco)
router.get('/api/pampa', bancoInstance.getDolarPampa)
router.get('/api/bancor', bancoInstance.getDolarBancor)

/**
 * @description Ruta riesgo pais
 */
router.get('/api/riesgopais', riesgoInstance.getRiesgoPais)

/**
 * @description Rutas euro
 */
router.get('/api/euro/nacion', euroInstance.getEuroNacion)
router.get('/api/euro/galicia', euroInstance.getEuroGalicia)
router.get('/api/euro/bbva', euroInstance.getEuroBBVA)
router.get('/api/euro/pampa', euroInstance.getEuroPampa)
router.get('/api/euro/chaco', euroInstance.getEuroChaco)
router.get('/api/euro/hipotecario', euroInstance.getEuroHipotecario)

/**
 * @description Rutas real
 */
router.get('/api/real/nacion', realInstance.getRealNacion)
router.get('/api/real/bbva', realInstance.getRealBBVA)
router.get('/api/real/chaco', realInstance.getRealChaco)

/**
 * @description Rutas Reservas y Circulante
 */
router.get('/api/bcra/reservas', bcraInstance.getReservas)
router.get('/api/bcra/circulante', bcraInstance.getCirculante)

/**
 * @description Rutas evolución mensual
 */
router.get('/api/evolucion/dolaroficial', dolarInstance.getEvolucionDolarOficial)
router.get('/api/evolucion/dolarblue', dolarInstance.getEvolucionDolarBlue)
router.get('/api/evolucion/realoficial', realInstance.getEvolucionReal)
router.get('/api/evolucion/eurooficial', euroInstance.getEvolucionEuro)


module.exports = router