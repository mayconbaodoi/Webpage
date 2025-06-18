const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// ... existing code ...

router.post('/google-login', authController.googleLogin);

module.exports = router; 