
const express = require('express')
const app = express()

app.get('/', function (req, res) {	
	res.write("Mathematical Functions");
	res.end();
})


app.get('/add', function (req, res) {	
	res.write("<br/>Addition Functions=" + (10 + 20));
	res.end();
})

app.get('/sub', function (req, res) {	
	res.write("<br/>Substraction Functions= "+ (20 - 10));
	res.end();
})


app.get('/mul', function (req, res) {	
	res.write("<br/>Multiplication Functions=" + (10 * 20));
	res.end();
})


app.get('/dev', function (req, res) {	
	res.write("<br/>Division Functions=" + (20/10));
	res.end();
})


app.listen(3000)
