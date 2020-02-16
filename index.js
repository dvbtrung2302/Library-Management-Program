var express = require('express');
var app = express();
var port = 3000;

var userRouter = require('./routes/user.route');
var bookRouter = require('./routes/book.route');
var bodyParser = require('body-parser');

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function(req, res) {
	res.render('index');
});

app.use('/users', userRouter);
app.use('/books', bookRouter);
app.use(express.static('public'));

app.listen(port, function() {
	console.log('Example app listening on port ' + port);
});
