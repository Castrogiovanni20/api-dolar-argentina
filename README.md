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

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/409e96f2e356a5a1c14e)

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

