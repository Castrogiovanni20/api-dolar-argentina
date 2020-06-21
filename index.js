const express = require('express')
const bodyParser = require('body-parser')
const convert = require('xml-js')
const axios = require('axios')
const app = express();


/**
 * @description Obtener el valor del dolar oficial
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
app.get('/api/dolaroficial', async (req, res) => {
    try {
        const dataDolar = await axios.get('https://www.dolarsi.com/api/dolarSiInfo.xml')
        const json = convert.xml2json(dataDolar.data, {compact: true, spaces: 4});
        const convertedJSON = JSON.parse(json);
        const valores = {
            fecha : getDateTime(),
            compra : parseFloat(convertedJSON.cotiza.Dolar.casa344.compra._text.replace(',','.')).toFixed(2),
            venta  : parseFloat(convertedJSON.cotiza.Dolar.casa344.venta._text.replace(',','.')).toFixed(2)
        }
        res.send(valores)
    } catch(e) {
        console.log(e)
        res.send(500);
    }
})


/**
 * @description Obtener el valor del dolar blue
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
app.get('/api/dolarblue', async (req, res) => {
    try {
        const dataDolar = await axios.get('https://www.dolarsi.com/api/dolarSiInfo.xml')
        const json = convert.xml2json(dataDolar.data, {compact: true, spaces: 4});
        const convertedJSON = JSON.parse(json);
        const valores = {
            fecha : getDateTime(),
            compra    : parseFloat(convertedJSON.cotiza.Dolar.casa380.compra._text.replace(',','.')).toFixed(2),
            venta     : parseFloat(convertedJSON.cotiza.Dolar.casa380.venta._text.replace(',','.')).toFixed(2)
        }

        res.send(valores)
    } catch(e) {
        
    }
})


/**
 * @description Obtener el valor del dolar contado con liqui
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
app.get('/api/contadoliqui', async (req, res) => {
    try {
        const dataDolar = await axios.get('https://www.dolarsi.com/api/dolarSiInfo.xml')
        const json = convert.xml2json(dataDolar.data, {compact: true, spaces: 4});
        const convertedJSON = JSON.parse(json);
        const valores = {
            fecha : getDateTime(),
            compra    : parseFloat(convertedJSON.cotiza.valores_principales.casa312.compra._text.replace(',','.')).toFixed(2),
            venta     : parseFloat(convertedJSON.cotiza.valores_principales.casa312.venta._text.replace(',','.')).toFixed(2)
        }

        res.send(valores)
    } catch(e) {
        
    }
})


/**
 * @description Obtener el valor del dolar promedio
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
app.get('/api/dolarpromedio', async (req, res) => {
    try {
        const dataDolar = await axios.get('https://www.dolarsi.com/api/dolarSiInfo.xml')
        const json = convert.xml2json(dataDolar.data, {compact: true, spaces: 4});
        const convertedJSON = JSON.parse(json);
        const valores = {
            fecha : getDateTime(),
            compra    : parseFloat(convertedJSON.cotiza.cotizador.casa302.compra._text.replace(',','.')).toFixed(2),
            venta     : parseFloat(convertedJSON.cotiza.cotizador.casa302.venta._text.replace(',','.')).toFixed(2)
        }

        res.send(valores)
    } catch(e) {
        
    }
})


/**
 * @description Obtener el valor del dolar bolsa
 * @returns Un objeto con el valor de compra, el de venta y la fecha y hora de la consulta
 */
app.get('/api/dolarbolsa', async (req, res) => {
    try {
        const dataDolar = await axios.get('https://www.dolarsi.com/api/dolarSiInfo.xml')
        const json = convert.xml2json(dataDolar.data, {compact: true, spaces: 4});
        const convertedJSON = JSON.parse(json);
        const valores = {
            fecha : getDateTime(),
            compra   : parseFloat(convertedJSON.cotiza.valores_principales.casa313.compra._text.replace(',','.')).toFixed(2),
            venta    : parseFloat(convertedJSON.cotiza.valores_principales.casa313.venta._text.replace(',','.')).toFixed(2)
        }

        res.send(valores)
    } catch(e) {
        
    }
})


/**
 * @description Obtener el valor del riesgo pais
 * @returns Un objeto con el valor del riesgo pais y la fecha y hora de la consulta
 */
app.get('/api/riesgopais', async (req, res) => {
    try {
        const dataDolar = await axios.get('https://www.dolarsi.com/api/dolarSiInfo.xml')
        const json = convert.xml2json(dataDolar.data, {compact: true, spaces: 4});
        const convertedJSON = JSON.parse(json);
        const valores = {
            fecha : getDateTime(),
            valor : parseFloat(convertedJSON.cotiza.Riesgo_pais.casa141.compra._text.replace(',','.')).toFixed(3),
        }

        res.send(valores)
    } catch(e) {
        
    }
})


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

// Settings
app.set('port', 8080);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server running on port ' + 8080)
});