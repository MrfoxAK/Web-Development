require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connectDB = require('./config/db');
const User = require('./models/User');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
console.log('Serving static files from:', path.join(__dirname, 'public'));


// Routes
// Home Page (Register Page)
app.get('/', (req, res) => {
    res.render('register');
});

// Register User
app.post('/register', async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    // Validate form data
    if (!name || !email || !password || password !== confirmPassword) {
        return res.render('register', { error: 'All fields are required and passwords must match' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.render('register', { error: 'Email is already registered' });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();
        res.redirect('/login');
    } catch (error) {
        console.error(error);
        res.render('register', { error: 'An error occurred. Please try again later.' });
    }
});

// Login Page
app.get('/login', (req, res) => {
    res.render('login');
});

// Login User
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Validate the user's credentials
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ error: 'Invalid credentials.' });
    }

    // Check if password matches (use bcrypt)
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
        return res.status(400).json({ error: 'Invalid credentials.' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Optionally set token in a cookie (for convenience)
    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

    // Or send the token in the response body (for a front-end)
    res.json({ token });
});

// Dashboard (Protected Route)
app.get('/dashboard', (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect('/login');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.render('dashboard', { userId: decoded.id });
    } catch (error) {
        res.redirect('/login');
    }
});

// Logout
app.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/login');
});

// Start Server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
