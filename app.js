var express = require('express');
var convertNameContent = require('./convertNameContent');
var templateValues = require('./templateValues');
var exphbs = require('express-handlebars');

var app = express();

//doesnt do anything (simply returns what was passed)
var helpers = {
  title: function (msg) {
    return msg;
  },
  upper: function (msg) {
    return msg;
  }
};

app.set('views', __dirname);
app.engine('.hbs', exphbs({extname: '.hbs', helpers: helpers}));
app.set('view engine', '.hbs');


/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('template', convertNameContent(templateValues, {}));
});


module.exports = app;
