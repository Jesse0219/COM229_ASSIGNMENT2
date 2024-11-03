var express = require('express');
var router = express.Router();

let usersController = require('../controllers/users');
const users = require('../models/users');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/jesse',usersController.jesseFunction);
router.post('/',usersController.create);
router.get('/',usersController.list);
router.get('/:userID',usersController.userGet,usersController.userByID);
router.get('/:userID', usersController.userGet);
router.put('/:userID',usersController.update);
router.delete('/:userID',usersController.remove);
module.exports = router;
