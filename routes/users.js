const controller = require('../controllers/users');

module.exports = (app) => {
    app.get('/user/by-name/:name', controller.getByName)
}