const { Books, Op } = require('../config/connect');

function getByTitle(req) {
    const params = req.params || {};
    const options = parseBookOptions(params);
    return Books.findAll(options)
        .then(result => result);
}

function getByAuthor(req){
    const params = req.params || {};
    const options = parseBookOptions(params);
    return Books.findAll(options)
        .then(result => result);
}

function parseBookOptions(params){
    const result = {
        where: {}
    }
    if(params.title){
        result.where.title = {
            [Op.like]: `%${params.title}%`
        }
    }
    if(params.author){
        result.where.author = {
            [Op.like]: `%${params.author}%`
        }
    }
    return result;
}

module.exports = {
    getByTitle,
    getByAuthor
}