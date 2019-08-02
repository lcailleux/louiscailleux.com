const express = require('express');
const path = require('path');
const compression = require('compression');
const fs = require('fs');
const server = express();
const PORT = process.env.PORT || 5000;

server.use(compression());

server.get('/robots.txt', (req, res) => {
    if (process.env.REACT_APP_ENV === "production") {
        res.status(200);
        res.sendFile(path.join(__dirname, 'build', 'robots.txt'));
    } else {
        res.status(404).send('<pre>Cannot GET /robots.txt</pre>');
    }
});

server.get('/sitemap.xml', (req, res) => {
    if (process.env.REACT_APP_ENV === "production") {
        res.status(200);
        res.sendFile(path.join(__dirname, 'build', 'sitemap.xml'));
    } else {
        res.status(404).send('<pre>Cannot GET /sitemap.xml</pre>');
    }
});

server.get('/index.html', function (req, res) {
    res.redirect(301, '/');
});

server.use(express.static(path.join(__dirname, 'build'), {maxAge: "31557600"}));

server.get('/', function (req, res) {
    res.status(200);
    sendResponse(res);
});

server.get('/projects', function (req, res) {
    res.status(200);
    sendResponse(res);
});

server.get('/contact', function (req, res) {
    res.status(200);
    sendResponse(res);
});

server.get('*', function (req, res) {
    res.status(404);
    sendResponse(res);
});

function sendResponse(response) {
    const filePath = path.resolve(path.join(__dirname, 'build', 'index.html'));

    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            response.status(404);
            response.sendFile(path.join(__dirname, 'build', 'index.html'));
        }
        response.send(data);
    });
}

server.listen(PORT);