const { app, PORT } = require('./config/server');

app.listen(PORT, (req, res) => {
    console.log('Conectado!');
})

