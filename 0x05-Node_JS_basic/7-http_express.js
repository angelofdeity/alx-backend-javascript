const fs = require('fs');
const express = require('express');

const app = express();
const port = 1245;
const file = process.argv[2];

function handleData(data) {
  const lines = data.split('\n').filter((line) => line !== 'firstname,lastname,age,field');
  const cs = [];
  const swe = [];
  const students = lines.map((line) => line.split(','));
  for (const student of students) {
    if (student) {
      if (student[3] === 'CS') {
        cs.push(student[0]);
      } else if (student[3] === 'SWE') {
        swe.push(student[0]);
      }
    }
  }

  return (
    `Number of students: ${cs.length + swe.length}\n`
    + `Number of students in CS: ${cs.length}. List: ${cs.join(', ')}\n`
    + `Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`
  );
}
function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load database'));
      } else {
        resolve(handleData(data));
      }
    });
  });
}
app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  res.end(`This is the list of our students\n${await countStudents(file)}`);
});
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
