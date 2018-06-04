const { Users, Op } = require('../config/connect');

function getByName(req) {
    const params = req.params || {};
    const options = parseUserOptions(params);
    return Users.findAll(options)
        .then(result => result);     
}

function parseUserOptions(params){
    const result = {
        where: {}
    }
    if(params.name){
        result.where.name = {
            [Op.like]: `%${params.name}%`
        }
    }
    return result;
}

module.exports = {
    getByName
}