const http = require('http');

const host = '127.0.0.1';
const port = 1245;
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  if (req.url === '/students') {
    res.end(`This is the list of our students ${await countStudents('database.csv')}`);
  } else {
    res.end('Hello Holberton School!');
  }
});
app.listen(port, host, () => {
  console.log(`server running on http://${host}:${port}`);
});

module.exports = app;
