var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var mongo;

var url = 'mongodb://localhost:27017/habits';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  mongo = db;

  app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  });
});

app.use(express.static('static'));
app.use(bodyParser.json());

var isValidHabit = function(habit) {
	console.log(habit);
	return (habit.name != null && 
			habit.frequency != null);
}

app.get('/api/habits', function(req, res){
  mongo.collection('habits').find().toArray(function(err, docs) {
    res.status(200).send(docs);  
  });
});

app.post('/api/habits', function (req, res) {
	if (!isValidHabit(req.body)) {
		res.status(500).send("Invalid habit");
		return;
	}

	var id = data.length + 1;
	req.body.id = id;
	req.body.current = "true";
	data.push(req.body);
  	res.status(200).json(data);
});