var express = require('express');
var path = require('path');

var app = express();

var bodyParser = require('body-parser');
app.use( bodyParser.json() ); 
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
var index = require('./routes/index');
var tasks = require('./routes/tasks');

// View Engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use('/', index);
app.use('/api', tasks);
var port = 3200;
app.listen(port, function() {
    console.log("Server Started on : " + port);
});;