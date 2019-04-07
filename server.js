const express = require('express');
const path = require('path');
const server = express();
const PORT = process.env.PORT || 5000;
const compression = require('compression');

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

server.use(compression());
server.use(express.static(path.join(__dirname, 'build'), {maxAge: "30d"}));

server.get('*', function (req, res) {
 res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


server.listen(PORT);