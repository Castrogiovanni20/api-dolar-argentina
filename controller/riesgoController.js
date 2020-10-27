function getDateTime() {
    const now     = new Date(); 
    const year    = now.getFullYear();
    let month   = now.getMonth()+1; 
    let day     = now.getDate();
    let hour    = now.getHours();
    let minute  = now.getMinutes();
    let second  = now.getSeconds(); 
    (month.toString().length == 1) ? month = '0'+month : '';
    (day.toString().length == 1)   ? day = '0'+day : '';
    (hour.toString().length == 1)  ? hour = '0'+hour : '';
    (minute.toString().length == 1)? minute = '0'+minute : '';
    (second.toString().length == 1)? second = '0'+second : '';
    
    const dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;   
         return dateTime;
}

class riesgoController{
    constructor(dolarSiService){
        this.dolarSiService = dolarSiService
    }

    /**
     * @description Obtener el valor del riesgo pais
     * @returns Un objeto con el valor del riesgo pais y la fecha y hora de la consulta
     */
    getRiesgoPais = async (req, res) => {
        try {
            const data = await this.dolarSiService.getInfoDolar()
            const valores = {
                fecha : getDateTime(),
                valor : parseFloat(data.cotiza.Riesgo_pais.casa141.compra._text.replace(',','.')).toFixed(3),
            }

            res.send(valores)
        } catch(e) {
            res.sendStatus(500)
            console.log(e)
        }
    }
}

module.exports = riesgoController