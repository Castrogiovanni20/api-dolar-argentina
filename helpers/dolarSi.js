const convert = require('xml-js')
const axios = require('axios')


/**
 * @description Obtener un json con los valores de dolarSi
 */
async function getInfoDolar(req, res){
    try {
        const dataDolar = await axios.get("https://www.dolarsi.com/api/dolarSiInfo.xml")
        const json = convert.xml2json(dataDolar.data, {compact: true, spaces: 4});
        const jsonParsed = JSON.parse(json);

        return jsonParsed
    } catch(e) {
        res.sendStatus(500)
        console.log(e)
    }
}

module.exports = { getInfoDolar }