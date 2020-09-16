const convert = require('xml-js')
const axios = require('axios')


class dolarSiService {

    /**
     * @description Obtener un json parseado con los valores de dolarSi
     */
    getInfoDolar = async (req, res) => {
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
}

module.exports = dolarSiService