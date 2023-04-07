var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var controller = require("../../Controllers/UserController")

router.get('/:id', controller.getOneUser);
router.post('/login/:user/:pass', controller.userLogin);

// 174.6.73.177:3000/user/login/AnuragRawal/1234
// {
//     "auth": true,
//     "user_id": 1002,
//     "email": "spaffot1@facebook.com"
// }

module.exports = router