const service = require('../services/users');

function getByName(req, res){
    service.getByName(req).then(result => res.send(result));
}

module.exports = {
    getByName
}