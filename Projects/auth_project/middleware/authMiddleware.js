const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
function authenticateToken(req, res, next) {
    const token = req.header('Authorization')?.split(' ')[1] || req.cookies.token;

    if (!token) {
        return res.status(403).json({ error: "Access denied. No token provided." });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; // Store the user data in the request object
        next();
    } catch (err) {
        return res.status(400).json({ error: "Invalid token." });
    }
}
