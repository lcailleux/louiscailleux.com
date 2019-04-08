const express = require('express');
const path = require('path');
const compression = require('compression');
const fs = require('fs');
const server = express();
const PORT = process.env.PORT || 5000;

server.use(compression());

server.get('/robots.txt', (req, res) => {
    if (process.env.REACT_APP_ENV === "production") {
        res.sendFile(path.join(__dirname, 'build', 'robots.txt'));
    } else {
        res.status(404).send('<pre>Cannot GET /robots.txt</pre>');
    }
});

server.get('/sitemap.xml', (req, res) => {
    if (process.env.REACT_APP_ENV === "production") {
        res.sendFile(path.join(__dirname, 'build', 'sitemap.xml'));
    } else {
        res.status(404).send('<pre>Cannot GET /sitemap.xml</pre>');
    }
});

server.get('/', function (req, res) {
    let config = {
        __CANONICAL__: "https://louiscailleux.com/",
        __DESCRIPTION__: "Hi I am Louis, a developer passionate about AI. I continuously enjoy learning about new technologies."
    };
    replaceTags(res, config);
});

server.use(express.static(path.join(__dirname, 'build'), {maxAge: "30d"}));

server.get('/projects', function (req, res) {
    let config = {
        __CANONICAL__: "https://louiscailleux.com/projects",
        __DESCRIPTION__: "The list of projects I enjoyed doing during my free time."
    };
    replaceTags(res, config);
});

server.get('/contact', function (req, res) {
    let config = {
        __CANONICAL__: "https://louiscailleux.com/contact",
        __DESCRIPTION__: "Please contact me, I am always open to new opportunities."
    };
    replaceTags(res, config);
});

server.get('*', function (req, res) {
    res.status(404);
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

function replaceTags(response, config) {
    const filePath = path.resolve(path.join(__dirname, 'build', 'index.html'));

    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            response.status(404);
            response.sendFile(path.join(__dirname, 'build', 'index.html'));
        }

        let result;
        data = data.replace('__CANONICAL__', config.__CANONICAL__);
        result = data.replace('__DESCRIPTION__', config.__DESCRIPTION__);
        response.send(result);
    });
}

server.listen(PORT);