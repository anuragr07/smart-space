var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var controller = require("../../Controllers/UserController")

router.get('/:id', controller.getOneUser);
router.post('/login/:username&', controller.userLogin);

module.exports = router