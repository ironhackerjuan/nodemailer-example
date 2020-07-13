const router = require('express').Router();
const mainController = require('../controllers/main.controller');

router.get('/', mainController.index);
router.post('/sendform', mainController.handleForm)


module.exports = router;