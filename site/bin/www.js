const http = require('http');
const app = require('../app');

const server = http.createServer(app);

server.listen(4000, () => {
  console.log("server is serve on http://127.0.0.1:4000");
});

process.on('unhandledRejection', (reason, p) => {
  console.error(reason && (reason.stack || reason), 'Unhandled Rejection at Promise', p)
});

process.on('uncaughtException', (err, origin) => {
  console.error(err, origin);
});
