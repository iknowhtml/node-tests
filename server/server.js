const express = require('express');

var app = express();

app.get('/', (req, res) => {
  // res.send("Hello world");
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([
    {
      name: 'Aki',
      age: '23'
    },
    {
      name: 'Austin',
      age: '20'
    },
    {
      name: 'Lizzi',
      age: '22'
    }
  ]);
});
app.listen(8080);

module.exports.app = app;
