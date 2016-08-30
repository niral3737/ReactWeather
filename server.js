var express = require('express');

//create app
var app = express();

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Express app is up and running');
})
