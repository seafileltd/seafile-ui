const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

console.log(path.join(__dirname, 'public'));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/dist', express.static(path.join(__dirname, '../dist')));

const routes = [
  '/alert.html',
  '/article.html',
  '/aside.html',
  '/avatar.html',
  '/badge.html',
  '/breadcrumb.html',
  '/button.html',
  '/cards.html',
  '/carousel.html',
  '/charts.html',
  '/chat.html',
  '/chips.html',
  '/core.html',
  '/dropdown.html',
  '/example.html',
  '/footer.html',
  '/form.html',
  '/grid.html',
  '/header.html',
  '/icon.html',
  '/image.html',
  '/layout.html',
  '/link.html',
  '/list-group.html',
  '/list.html',
  '/loading.html',
  '/maps.html',
  '/media.html',
  '/nav.html',
  '/pagination.html',
  '/popover.html',
  '/product.html',
  '/progress.html',
  '/social.html',
  '/sparkline.html',
  '/stamp.html',
  '/statuses.html',
  '/syntax.html',
  '/table.html',
  '/tables.html',
  '/tag.html',
  '/text.html',
  '/timeline.html',
  '/type.html',
  '/utilities.html',
  '/variables.html',
  '/wikis.html',
];

app.get('/', (req, res) => {
  return res.redirect('/alert.html');
});

routes.forEach(route => {
  app.get(route, (req, res) => {
    const title = route.replace('.html', '').replace(/\//g, '');
    return res.render('index', {title});
  });
});

module.exports = app;
