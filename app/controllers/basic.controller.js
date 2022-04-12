const db = require('../models/index')
const BmiSchema = db.bmi
const CalcSchema = db.calc

exports.bmi = (req, res) => {
    new BmiSchema(req, res).save(() =>{
        res.status(200).json({'result' : 'ok'})
    })
}
exports.calc = (req, res) => {
    new CalcSchema(req, res).save(() =>{
        res.status(200).json({'result' : 'ok'})
    })
}
