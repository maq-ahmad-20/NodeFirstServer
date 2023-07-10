const http = require('http');
const reqHandler = require('./routes');

const server = http.createServer(reqHandler.handler);

server.listen(8000);