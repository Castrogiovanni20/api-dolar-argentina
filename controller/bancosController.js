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
 * @description Obtener las cotizaciones del BBVA
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
async function getDolarBBVA(req, res){
    try {
        const data = await dolarSi.getInfoDolar()
        const valores = {
            fecha : getDateTime(),
            compra : parseFloat(data.cotiza.Capital_Federal.casa336.compra._text.replace(',','.')).toFixed(2),
            venta : parseFloat(data.cotiza.Capital_Federal.casa336.venta._text.replace(',','.')).toFixed(2)
        }  
        res.send(valores)
    } catch(e) {
        res.sendStatus(500)
        console.log(e)
    }
}

module.exports = { 
    getDolarBBVA 
}