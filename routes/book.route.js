var express = require('express');
var router = express.Router();

var shortid = require('shortid');
var db = require('../db');

router.get('/add', function(req, res) {
	res.render('books/add');
});

router.get('/borrow', function(req, res) {
	var q = req.query.q;
	if (q === undefined) {
		res.render('books/borrow', {
			books: []
		});
	} else {
		var matchedBooks = db.get('books').value().filter(function(book) {
			return book.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
		});
		res.render('books/borrow', {
			books: matchedBooks
		});
	}
});

router.post('/add', function(req, res) {
	req.body.id = shortid.generate();
	if (req.body !== '') {
		db.get('books').push(req.body).write();
		res.redirect('/');
	} else {
		res.redirect('/');
	}
});

module.exports = router;