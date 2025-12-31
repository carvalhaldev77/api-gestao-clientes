const express = require('express');
const router = express.Router();
const controller = require('../controllers/clients.controller');
const auth = require('../middlewares/auth.middleware');

router.post('/', auth, controller.createClient);
router.get('/', auth, controller.getClients);

module.exports = router;
