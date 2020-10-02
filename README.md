# API Dolar Argentina

Obtene las diferentes cotizaciones del dolar y del riesgo pais.

## Endpoints

URL: https://api-dolar-argentina.herokuapp.com/

| Metodo | Endpoint | Descripcion |
| ------ | ------ | ------ |
| GET | /api/dolaroficial | Cotizacion dolar oficial |
| GET | /api/dolarblue | Cotizacion dolar blue |
| GET | /api/contadoliqui | Cotizacion dolar contado con liqui |
| GET | /api/dolarpromedio | Cotizacion dolar promedio |
| GET | /api/dolarbolsa | Cotizacion dolar bolsa |
| GET | /api/riesgopais | Valor riesgo pais |
| GET | /api/bbva | Cotizacion del banco BBVA |
| GET | /api/piano | Cotizacion del banco Piano |
| GET | /api/hipotecario | Cotizacion del banco Hipotecario |
| GET | /api/galicia | Cotizacion del banco Galicia |
| GET | /api/santander | Cotizacion del banco Santander|
| GET | /api/ciudad | Cotizacion del banco Ciudad |
| GET | /api/supervielle | Cotizacion del banco Supervielle |
| GET | /api/patagonia | Cotizacion del banco Patagonia |
| GET | /api/comafi | Cotizacion del banco Comafi |

### Respuesta

_Todos los endpoints devuelven la fecha y hora, el valor de compra y el valor de venta. Ejemplo:_

```
{
    "fecha": "2020/06/21 23:26:42",
    "compra": "68.07",
    "venta": "73.07"
}
```

_La informacion es obtenida del sitio DolarSi, por lo cual tambien se puede obtener mucha mas informacion._

_Si encontras algun error o tenes alguna sugerencia, podes abrir un Issue o un Pull Request para contribuir._

