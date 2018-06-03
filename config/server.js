const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
app.use(bodyParser.json());
module.exports = {
    app,
    PORT
}