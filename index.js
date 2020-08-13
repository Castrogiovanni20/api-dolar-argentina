const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
require('dotenv').config()
const router = require('./routes/router')
const PORT = process.env.PORT || 7070
const app = express();


app.get('/', async (req, res) => {
    try {
        res.send("API para obtener las cotizaciones de los distintos tipos de dolar y riesgo pais. La documentacion la podes encontrar en https://github.com/Castrogiovanni20/api-dolar-argentina")
    } catch(e) {
        console.log(e)
        res.send(500);
    }
})

// Settings
app.set('port', PORT);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', router)

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server running on port ' + PORT)
});