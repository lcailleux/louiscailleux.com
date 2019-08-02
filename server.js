const express = require('express');
const path = require('path');
const compression = require('compression');
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
server.use(express.static(path.join(__dirname, 'build/static'), {maxAge: "31557600"}));

server.listen(PORT);