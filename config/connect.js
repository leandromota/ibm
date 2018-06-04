const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const sequelize = new Sequelize('lirollajr53', 'lirollajr53', 'Pw@senh4', {
    host: '179.188.16.118',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    operatorsAliases: false
});

const Books = sequelize.define('ibm_books', {
    id: {type: Sequelize.INTEGER, primaryKey: true},
    title: {type: Sequelize.STRING},
    author: {type: Sequelize.STRING}
}, {timestamps: false})

const Users = sequelize.define('ibm_users', {
    id: {type: Sequelize.INTEGER, primaryKey: true},
    name: {type: Sequelize.STRING}
}, {timestamps: false})

module.exports = {
    Books,
    Users,
    Op
}