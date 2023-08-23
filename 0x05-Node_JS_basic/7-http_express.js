const express = require('express');

const app = express();
const port = 1245;
const file = process.argv[2];
const countStudents = require('./3-read_file_async');

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  res.end(`This is the list of our students\n${await countStudents(file)}`);
});
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
