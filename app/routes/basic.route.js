const { bmi, calc } = require('../controllers/basic.controller');

module.exports = x => {
    x.app.post(`${x.url}/bmi`, bmi)
    x.app.post(`${x.url}/calc`, calc)
}