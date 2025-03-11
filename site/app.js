const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

console.log(path.join(__dirname, 'public'));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/dist', express.static(path.join(__dirname, '../dist')));

const routes = [
  '/',
  '/index.html',
  '/button.html',
  '/form.html',
  '/wikis.html',
  '/article.html',
  '/loading.html',
  '/table.html',
  '/alert.html',
  '/avatar.html',
  '/badge.html',
  '/button.html',
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
  '/forms.html',
  '/functions.html',
  '/grid.html',
  '/header.html',
  '/icon.html',
  '/image.html',
  '/layout.html',
  '/link.html',
  '/list.html',
  '/list-group.html',
  '/loading.html',
  '/maps.html',
  '/media.html',
  '/nav.html',
  '/pagination.html',
  '/popover.html',
  '/progress.html',
  '/product.html',
  '/social.html',
  '/sparkline.html',
  '/stamp.html',
  '/statuses.html',
  '/syntax.html',
  '/table.html',
  '/tag.html',
  '/tables.html',
  '/timeline.html',
  '/type.html',
  '/utilities.html',
  '/variables.html',
  '/aside.html',
];

routes.forEach(route => {
  app.get(route, (req, res) => {
    const title = route === '/' ? 'Seafile UI' : route.replace('.html', '').replace(/\//g, '');
    return res.render('index', {title});
  });
});

module.exports = app;
