var express = require('express');
var router = express.Router();

let usersController = require('../controllers/users');
const users = require('../models/users');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/jesse',usersController.jesseFunction);
router.post('/create',usersController.create);
router.get('/list',usersController.list);
router.get('/get/:userID',usersController.userGet,usersController.userByID);
router.put('/edit/:userID',usersController.update);
router.put('/delete/:userID',usersController.remove);
module.exports = router;
