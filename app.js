var express = require('express');
var bodyParser = require('body-parser');
var dummyData = require('./models/dummy-data.json');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/search', function(req, res){
	// console.log(req.query.userInputKey);
	// res.send(dummyData);
	res.send(dummyData.programming[req.query.userInputKey].desc);
});

var server = app.listen(6547, function() {
	console.log('Express server listening on port ' + server.address().port);
});

