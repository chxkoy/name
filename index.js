const express = require('express');
const fs = require('fs');

const file = fs.readFileSync('data.json');
const data = JSON.parse(file);
let request = 0

const app = express();
app.get('/', (req, res) => {
  request = request + 1
  const random = Math.floor(Math.random() * data.length);
  res.json({'name': data[random], "request": request})
  console.log(data[random])
});

app.listen(5000)


