class util {

    /**
     * Obtiene la fecha y hora actual formateada.
     */
    getDateTime = function () {
        let now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth() + 1;
        let day = now.getDate();
        let hour = now.getHours();
        let minute = now.getMinutes();
        let second = now.getSeconds();
        (month.toString().length == 1) ? month = '0' + month : '';
        (day.toString().length == 1) ? day = '0' + day : '';
        (hour.toString().length == 1) ? hour = '0' + hour : '';
        (minute.toString().length == 1) ? minute = '0' + minute : '';
        (second.toString().length == 1) ? second = '0' + second : '';

        let dateTime = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
        return dateTime;
    }

    /**
     * Formatea un texto numérico a formato moneda.
     * @param {string} value Texto que contiene el valor numérico a convertir.
     * @param {number} decimalPlaces Cantidad de caracteres decimales a conservar.
     */
    formatNumber = function (value, decimalPlaces) {
        let decimals = decimalPlaces || 2;
        let convertedValue = parseFloat(value.replace('.', '').replace(',', '.'))
        return !isNaN(convertedValue) ? convertedValue.toFixed(decimals) : '?'
    }

    /**
     * Devuelve un objeto que contiene los valores de la cotización anual por mes.
     * @param {object} evolucionAnual Objeto que contiene el valor de cada mes del año.
     */
    getEvolucion = function (evolucionAnual) {
        const now = new Date()
        const mesActual = now.getMonth() + 1

        let meses = []
        for (let i = 1; i <= Object.keys(evolucionAnual).length; i++) {
            meses.push({
                "anio": (i < mesActual ? now.getFullYear() : now.getFullYear() - 1).toString(),
                "mes": i.toString(),
                "valor": this.formatNumber(evolucionAnual[[Object.keys(evolucionAnual)[i - 1]]]._text).toString()
            })
        }
        meses = meses.sort((a, b) => a.anio - b.anio)

        const valores = {
            fecha: this.getDateTime(),
            meses
        }

        return valores
    }
}

module.exports = util