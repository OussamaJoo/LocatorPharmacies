const express = require('express');
const authRoutes = require('./auth.route');

const contactRoutes = require('./contact.route');
const pharmacieRoutes = require('./pharmacie.route');

const contactReplyRoutes = require('./contactReply.route');
const usersRoutes = require('./users.route');

const router = express.Router();

// localhost:4050/api/
router.use('/auth', authRoutes);

router.use('/contactUs', contactRoutes);
router.use('/pharmacie', pharmacieRoutes);

router.use('/contactReply', contactReplyRoutes);
router.use('/users', usersRoutes);

module.exports = router;