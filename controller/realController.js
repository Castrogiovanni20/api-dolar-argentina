class realController {
    constructor(dolarSiService, util) {
        this.dolarSiService = dolarSiService
        this.util = util
    }

    /**
     * @description Obtener el valor del real del Banco Nación
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getRealNacion = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: parseFloat(data.cotiza.Real.casa230.compra._text.replace(',', '.')).toFixed(2),
                venta: parseFloat(data.cotiza.Real.casa230.venta._text.replace(',', '.')).toFixed(2)
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del real del Banco BBVA
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getRealBBVA = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: parseFloat(data.cotiza.Real.casa365.compra._text.replace(',', '.')).toFixed(2),
                venta: parseFloat(data.cotiza.Real.casa365.venta._text.replace(',', '.')).toFixed(2)
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }

    /**
     * @description Obtener el valor del real del Nuevo Banco del Chaco
     * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
     */
    getRealChaco = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha: this.util.getDateTime(),
                compra: parseFloat(data.cotiza.Real.casa366.compra._text.replace(',', '.')).toFixed(2),
                venta: parseFloat(data.cotiza.Real.casa366.venta._text.replace(',', '.')).toFixed(2)
            }
            res.send(valores)
        } catch (e) {
            console.log(e)
            res.sendStatus(500)
        }
    }
}

module.exports = realController