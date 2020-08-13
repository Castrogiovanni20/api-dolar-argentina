const dolarSi = require('../helpers/dolarSi')

function getDateTime() {
    var now     = new Date(); 
    var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds(); 
    (month.toString().length == 1) ? month = '0'+month : '';
    (day.toString().length == 1)   ? day = '0'+day : '';
    (hour.toString().length == 1)  ? hour = '0'+hour : '';
    (minute.toString().length == 1)? minute = '0'+minute : '';
    (second.toString().length == 1)? second = '0'+second : '';
    
    var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;   
         return dateTime;
}


/**
 * @description Obtener el valor del dolar oficial
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
async function getDolarOficial(req, res){
    try {
        const data = await dolarSi.getInfoDolar()
        const valores = {
            fecha : getDateTime(),
            compra : parseFloat(data.cotiza.Dolar.casa344.compra._text.replace(',','.')).toFixed(2),
            venta  : parseFloat(data.cotiza.Dolar.casa344.venta._text.replace(',','.')).toFixed(2)
        }
        res.send(valores)
    } catch(e) {
        console.log(e)
        res.sendStatus(500)
    }
}


/**
 * @description Obtener el valor del dolar blue
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
async function getDolarBlue(req, res){
    try {
        const data = await dolarSi.getInfoDolar()
        const valores = {
            fecha : getDateTime(),
            compra    : parseFloat(data.cotiza.Dolar.casa380.compra._text.replace(',','.')).toFixed(2),
            venta     : parseFloat(data.cotiza.Dolar.casa380.venta._text.replace(',','.')).toFixed(2)
        }

        res.send(valores)
    } catch(e) {
        res.sendStatus(500)
        console.log(e)
    }
}


/**
 * @description Obtener el valor del dolar contado con liqui
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
async function getContadoConLiqui(req, res){
    try {
        const data = await dolarSi.getInfoDolar()
        const valores = {
            fecha : getDateTime(),
            compra    : parseFloat(data.cotiza.valores_principales.casa312.compra._text.replace(',','.')).toFixed(2),
            venta     : parseFloat(data.cotiza.valores_principales.casa312.venta._text.replace(',','.')).toFixed(2)
        }
        res.send(valores)
    } catch(e) {
        res.sendStatus(500)
        console.log(e)
    }
}


/**
 * @description Obtener el valor del dolar promedio
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
async function getDolarPromedio(req, res){
    try {
        const data = await dolarSi.getInfoDolar()
        const valores = {
            fecha : getDateTime(),
            compra    : parseFloat(data.cotiza.cotizador.casa302.compra._text.replace(',','.')).toFixed(2),
            venta     : parseFloat(data.cotiza.cotizador.casa302.venta._text.replace(',','.')).toFixed(2)
        }

        res.send(valores)
    } catch(e) {
        res.sendStatus(500)
        console.log(e)
    }
}


/**
 * @description Obtener el valor del dolar bolsa
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
async function getDolarBolsa(req, res){
    try {
        const data = await dolarSi.getInfoDolar()
        const valores = {
            fecha : getDateTime(),
            compra   : parseFloat(data.cotiza.valores_principales.casa313.compra._text.replace(',','.')).toFixed(2),
            venta    : parseFloat(data.cotiza.valores_principales.casa313.venta._text.replace(',','.')).toFixed(2)
        }

        res.send(valores)
    } catch(e) {
        res.sendStatus(500)
        console.log(e)
    }
}


module.exports = {
    getDolarOficial,
    getDolarBlue,
    getContadoConLiqui,
    getDolarPromedio,
    getDolarBolsa
}