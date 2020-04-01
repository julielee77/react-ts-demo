const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    console.log(`Request for ${pathname} received`);
    fs.readFile(pathname.substr(1), (err, data) => {
        if (err) {
            console.log(err);
            res.end();
            return;
        }
        res.end(data);
    });
}).listen(8001);
