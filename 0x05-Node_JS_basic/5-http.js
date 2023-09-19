const http = require('http');

const host = '127.0.0.1';
const port = 1245;

const fs = require('fs');

function handleData(data) {
  const lines = data.split('\n').filter((line) => line !== '');
  const headers = lines.shift().split(',');
  const fieldIndex = headers.indexOf('field');
  const cs = [];
  const swe = [];
  const students = lines.map((line) => line.split(','));
  for (const student of students) {
    if (student) {
      if (student[fieldIndex] === 'CS') {
        cs.push(student[0]);
      } else if (student[fieldIndex] === 'SWE') {
        swe.push(student[0]);
      }
    }
  }

  return (
    `Number of students: ${students.length}\n`
    + `Number of students in CS: ${cs.length}. List: ${cs.join(', ')}\n`
    + `Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`
  );
}
async function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(Error('Cannot load database'));
      } else {
        resolve(handleData(data));
      }
    });
  });
}
const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((data) => res.end(data))
      .catch((error) => res.end(error.message));
  } else if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
});
app.listen(port, host, () => {
  console.log(`server running at http://${host}:${port}`);
});

module.exports = app;
