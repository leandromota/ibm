const controller = require('../controllers/books');

module.exports = (app) => {
    app.get('/book/by-title/:title', controller.getByTitle);
    app.get('/book/by-author/:author', controller.getByAuthor);
}