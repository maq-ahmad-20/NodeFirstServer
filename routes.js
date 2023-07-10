
const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    if (url === '/') {
        fs.readFile('message.txt', (err, data) => {
            res.write('<html>')
            res.write('<head><title>Enter Message</title></head>');

            res.write(`<body><h1>${data}</h1><form action ="/message" method="POST"><input type ="text" name = "message"><button type ="submit">Submit</button></form></body>`)

            res.write('</html>')
            return res.end();

        })



    }
    else if (url === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
            console.log(chunk)
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');

                return res.end();

            });



        })



    }



}


module.exports.handler = requestHandler;