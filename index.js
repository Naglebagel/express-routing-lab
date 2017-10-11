const express = require('express');
const app = express();

// Answer These Questions

// Create an express application from scratch

// Greetings

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

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


//Magic 8 Ball
const magicArr = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

app.get('/magic/:q', (req, res) => {
	const answer = Math.floor(Math.random()*magicArr.length)
	res.send(req.params.q + '?'  + magicArr[answer]);
});














app.listen(3000, () => {

});