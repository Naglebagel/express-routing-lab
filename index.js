const express = require('express');
const app = express();

// Answer These Questions

// Create an express application from scratch

// Greetings

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/greeting/', (req, res) => {
	res.send('Hello, stranger');
});

app.get('/greeting/:name', (req, res) => {
	res.send('Hello there, ' + req.params.name )
});



//Tip Calculator

app.get('/tip/:total/:tipPercentage', (req, res) => {
	res.send(String(req.params.total * (req.params.tipPercentage /100)));
});
















app.listen(3000, () => {

});