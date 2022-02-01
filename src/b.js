const http = require("http");
const API = require('./OK_get_cliente'); // AQUI VOCÊ PASSA O NOME DA ROTA QUE VOCÊ FEZ

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    new API().listar();
    console.log('Server is running on http://${host}:${port}');
});