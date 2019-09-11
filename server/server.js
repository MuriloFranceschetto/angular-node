const http = require('http');
const cors = require("cors");
const app = require('./config/express');

require('./config/database');
require('./routes')(app);

app.use(cors());

http.createServer(app).listen(3000, () => {
    console.log('Servidor Rodando na Porta 3000!!!!')
})

