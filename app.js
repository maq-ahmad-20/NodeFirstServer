const http = require('http');



const server = http.createServer((req, res) => {
    console.log('Ahmad');
})

server.listen(4000);