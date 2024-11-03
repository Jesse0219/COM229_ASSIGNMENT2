var express = require('express');
var router = express.Router();
let contactsController = require('../controllers/contacts');
/* GET users listing. */

router.get('/',contactsController.list);
router.post('/',contactsController.create);
router.get('/:id', contactsController.contactGet);
router.put('/:id', contactsController.update);
router.delete('/:id', contactsController.remove);


module.exports = router;