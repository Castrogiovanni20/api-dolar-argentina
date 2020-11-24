# API Dolar Argentina

Obtene las diferentes cotizaciones del dólar y del riesgo pais.

## Endpoints

URL: https://api-dolar-argentina.herokuapp.com/

| Metodo | Endpoint | Descripcion |
| ------ | ------ | ------ |
| GET | /api/dolaroficial | Cotizacion dólar oficial |
| GET | /api/dolarblue | Cotizacion dólar blue |
| GET | /api/contadoliqui | Cotizacion dólar contado con liqui |
| GET | /api/dolarpromedio | Cotizacion dólar promedio |
| GET | /api/dolarbolsa | Cotizacion dólar bolsa |
| GET | /api/riesgopais | Valor riesgo pais |
| GET | /api/bbva | Cotizacion del Banco BBVA |
| GET | /api/piano | Cotizacion del Banco Piano |
| GET | /api/hipotecario | Cotizacion del Banco Hipotecario |
| GET | /api/galicia | Cotizacion del Banco Galicia |
| GET | /api/santander | Cotizacion del Banco Santander |
| GET | /api/ciudad | Cotizacion del Banco Ciudad |
| GET | /api/supervielle | Cotizacion del Banco Supervielle |
| GET | /api/patagonia | Cotizacion del Banco Patagonia |
| GET | /api/comafi | Cotizacion del Banco Comafi |
| GET | /api/nacion | Cotizacion del Banco Nación |
| GET | /api/bind | Cotizacion del Banco Industrial |
| GET | /api/bancor | Cotizacion del Banco de Córdoba |
| GET | /api/chaco | Cotizacion del Nuevo Banco del Chaco |
| GET | /api/pampa | Cotizacion del Banco de La Pampa |
| GET | /api/euro/nacion | Cotizacion del Euro del Banco Nación |
| GET | /api/euro/galicia | Cotizacion del Euro del Banco Galicia |
| GET | /api/euro/bbva | Cotizacion del Euro del Banco BBVA |
| GET | /api/euro/pampa | Cotizacion del Euro del Banco de La Pampa |
| GET | /api/euro/chaco | Cotizacion del Euro del Nuevo Banco del Chaco |
| GET | /api/euro/hipotecario | Cotizacion del Euro del Banco Hipotecario |
| GET | /api/real/nacion | Cotizacion del Real del Banco Nación |
| GET | /api/real/bbva | Cotizacion del Real del Banco BBVA |
| GET | /api/real/chaco | Cotizacion del Real del Nuevo Banco del Chaco |
| GET | /api/bcra/reservas | Reservas del BCRA en dólares |
| GET | /api/bcra/circulante | Total de pesos en circulación |
| GET | /api/evolucion/dolaroficial | Evolución mensual anualizada del dólar oficial |
| GET | /api/evolucion/dolarblue | Evolución mensual anualizada del dólar blue |
| GET | /api/evolucion/realoficial | Evolución mensual anualizada del Real oficial |
| GET | /api/evolucion/eurooficial | Evolución mensual anualizada del Euro oficial |

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/409e96f2e356a5a1c14e)

### Respuestas

_Todos los endpoints de cotización devuelven la fecha y hora, el valor de compra y el valor de venta. Ejemplo:_

```javascript
{
    fecha: "2020/06/21 23:26:42",
    compra: "68.07",
    venta: "73.07"
}
```

_Los endpoints de reservas y circulante devuelven la fecha y hora, el valor y la moneda. Ejemplo:_

```javascript
{
    fecha: "2020/11/22 19:58:37",
    valor: "39120000000",
    moneda: "USD"
}
```

_Los endpoints de evolución devuelven la fecha y hora, y un array de meses con año, mes y valor. Ordenado por año y mes. Ejemplo:_

```javascript
{
    fecha: "2020/11/22 19:59:46",
    meses: [
        {
            anio: "2019",
            mes: "11",
            valor: "66.20",
        },
        {
            anio: "2019",
            mes: "12",
            valor: "69.71",
        },
        {
            anio: "2020",
            mes: "1",
            valor: "77.00",
        },

        ...

        {
            anio: "2020",
            mes: "9",
            valor: "136.80",
        },
        {
            anio: "2020",
            mes: "10",
            valor: "165.16",
        },
    ],
}
```

_La informacion es obtenida del sitio DolarSi, por lo cual tambien se puede obtener mucha mas informacion._

_Si encontras algun error o tenes alguna sugerencia, podes abrir un Issue o un Pull Request para contribuir._

