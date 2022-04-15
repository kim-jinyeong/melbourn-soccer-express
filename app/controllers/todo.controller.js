const db = require('../models/index')
const TodoSchema = db.user
exports.addup = (req, res) =>{
    console.log(' ### 진행 4 : 노드서버에 진입 ' + JSON.stringify(req.body))

    new TodoSchema(req.body).save(() => {
        res.status(200).json({'result' : 'ok'})
    })
}
