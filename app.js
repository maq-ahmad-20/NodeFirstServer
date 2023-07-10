const http = require('http');



const server = http.createServer((req, res) => {
    //console.log('Ahmad');
    res.setHeader('Content-type', 'text/html');
    res.write('<html>')
    res.write('<head><title>firstPage</title></head>');
    if (req.url === '/home') {
        res.write('<p> Welcome home</p>');
    } else if (req.url === '/about') {
        res.write('<p> Welcome to About Us page</p>');
    } else if (req.url === '/node') {
        res.write('<p>Welcome to my Node Js project</p>');
    }
    res.write('</html>')
    res.end();
})

server.listen(4000);


