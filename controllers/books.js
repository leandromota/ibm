const service = require('../services/books');

function getByTitle(req, res){
    service.getByTitle(req).then(result => res.send(result));
}

function getByAuthor(req, res){
    service.getByAuthor(req).then(result => res.send(result));
}

module.exports = {
    getByTitle,
    getByAuthor
}