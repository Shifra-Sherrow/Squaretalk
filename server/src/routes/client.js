const router = require('express').Router();

const ClientCtrl = require('../controllers/client');

router.get('/', ClientCtrl.list);

module.exports = router;
