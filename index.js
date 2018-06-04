const { app, PORT } = require('./config/server');
const { Books, Users } = require('./config/connect');
app.listen(PORT, (req, res) => {
    console.log(`Servidor rodando na porta ${PORT}`);
})