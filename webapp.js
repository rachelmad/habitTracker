var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('static'));
app.use(bodyParser.json());

var data = [
  {
    id: 1,
    name: "Make the bed", 
    frequency: 1, 
    current: "true"
  },
  {
    id: 2,
    name: "Laundry",
    frequency: 7,
    current: "false"
  }
];

var isValidHabit = function(habit) {
	console.log(habit);
	return (habit.name != null && 
			habit.frequency != null);
}

app.get('/api/habits', function(req, res){
	res.status(200).json(data);
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

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});