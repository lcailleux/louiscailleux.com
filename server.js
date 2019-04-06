const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/robots.txt', (req, res) => {
 if (process.env.REACT_APP_ENV === "production") {
  res.sendFile(path.join(__dirname, 'build', 'robots.txt'));
 } else {
  res.status(404).send('<pre>Cannot GET /robots.txt</pre>');
 }
});

app.get('/sitemap.xml', (req, res) => {
 if (process.env.REACT_APP_ENV === "production") {
  res.sendFile(path.join(__dirname, 'build', 'sitemap.xml'));
 } else {
  res.status(404).send('<pre>Cannot GET /sitemap.xml</pre>');
 }
});

app.use(express.static(path.join(__dirname, 'build'), {maxAge: "30d"}));

app.get('*', function (req, res) {
 res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(PORT);