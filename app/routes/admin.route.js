const { admin } = require('../controllers/admin.controller');
module.exports = x => x.app.post(`${x.url}/signup`, admin)