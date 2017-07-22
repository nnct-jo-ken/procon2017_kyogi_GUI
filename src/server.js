var Path = require('path');
var FS = require('fs');
var Express = require('express');
var Browserify = require('browserify-middleware');
// var ServeIndex = require('serve-index');
var Handlebars = require('handlebars');

var app = Express();

app.set('port', process.env.PORT || 6588);

app.use('/dist/planck.js', Browserify('./lib/index.js', {standalone : 'planck'}));
app.use('/dist/planck-with-testbed.js', Browserify('./src/index.js', {standalone : 'planck'}));

app.use(Express.static(Path.resolve(__dirname, '..')));


app.get('/', function (req, res, next) {
  var script = '/src/puzzle/test.js';
  var page = Handlebars.compile(FS.readFileSync('./src/index.hbs') + '');
  
  res.send(page({
    script: script
  }));  
});


app.listen(app.get('port'), function() {
  console.log('Checkout http://localhost:' + app.get('port'));
});
