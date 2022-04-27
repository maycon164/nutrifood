const express = require('express');
const connection = require('./database/connection');
const app = express();

connection();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World' });
});

app.listen('8080', () => {
  console.log('servidor no ar');
});
