var express = require('express');
var router = express.Router();

var controller = require('../controllers/user.controller');

router.get('/create', controller.create);

router.get('/users-list', controller.show);

router.get('/search', controller.search);

router.get('/login', controller.login);

router.post('/create', controller.createPost);

module.exports = router; 