var shortid = require('shortid');
var db = require('../db');

module.exports.create = function(req, res) {
	res.render('users/create');
};

module.exports.show = function (req, res) {
	res.render('users/users-list', {
		users: db.get('users').value()
	});
};

module.exports.search = function(req, res) {
	var q = req.query.q;
	if (q === undefined) {
		res.render('users/search', {
			users: []
		});
	} else {
		var matchedUsers = db.get('users').value().filter(function(user) {
			return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
		});
		res.render('users/search', {
			users: matchedUsers
		});
	}
};

module.exports.login = function(req, res) {
	var q = req.query.q;
	if (q === undefined) {
		res.render('users/login');
	} else {
		var matchedUser = db.get('users').value().filter(function(user) {
			return user.name.toLowerCase().localeCompare(q.toLowerCase()) === 0;
		});
		if (matchedUser.length === 0) {
			res.render('users/login', {
				alert: 'Wrong User Name'
			});
		} else {
			res.redirect('../books/borrow');
		}
	}
};

module.exports.createPost = function(req, res) {
	req.body.id = shortid.generate();
	if (req.body.name !== '') {
		db.get('users').push(req.body).write();
		res.redirect('/');
	} else {
		res.redirect('/');
	}
};