const express = require('express');
const pratoRoute = require('./routes/pratoRoute');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World' });
});

app.use('/pratos', pratoRoute);

app.listen('8080', () => {
  console.log('servidor no ar');
});
