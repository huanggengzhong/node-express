var express = require('express');
var user = require("../controllers/userController")
var router = express.Router();

/* GET users listing. */
router.post('/sendCode', user.sendCode);

module.exports = router;
