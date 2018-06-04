const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const consign = require('consign');

app.use(bodyParser.json());
consign()
    .include('routes')
    .include('controllers')
    .into(app);

module.exports = {
    app,
    PORT
}
