const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

console.log(path.join(__dirname, 'public'));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  return res.render('index', {title: 'Seafile UI'});
});

app.get('/index.html', (req, res) => {
  return res.render('index', {title: 'home'});
});

app.get('/button.html', (req, res) => {
  return res.render('index', {title: 'button'});
});

app.get('/form.html', (req, res) => {
  return res.render('index', {title: 'form'});
});

app.get('/wikis.html', (req, res) => {
  return res.render('index', {title: 'wikis'});
});

app.get('/article.html', (req, res) => {
  return res.render('index', {title: 'article'});
});

app.get('/loading.html', (req, res) => {
  return res.render('index', {title: 'loading'});
});

module.exports = app;
