var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var port = 8000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public')); 

app.get('/', function(req, res) {
    res.render('index.html');
})

app.listen(port, function() {
    console.log(`The app is listening to you on port: ${port}`);
})