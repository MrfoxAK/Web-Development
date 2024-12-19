const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { check, validationResult } = require('express-validator');

const router = express.Router();

// Registration Route
router.post(
    '/register',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password must be 6 or more characters').isLength({ min: 6 }),
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
        next();
    },
    registerUser
);

// Login Route
router.post('/login', loginUser);

module.exports = router;
