const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// ... existing code ...

exports.googleLogin = async (req, res) => {
    try {
        const { credential } = req.body;
        
        // Verify Google token
        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: process.env.GOOGLE_CLIENT_ID
        });

        const payload = ticket.getPayload();
        const { email, name, picture, sub: googleId } = payload;

        // Check if user exists
        let user = await User.findOne({ email });

        if (!user) {
            // Create new user if doesn't exist
            user = await User.create({
                email,
                username: email.split('@')[0], // Use email prefix as username
                fullName: name,
                avatar: picture,
                googleId,
                password: Math.random().toString(36).slice(-8), // Generate random password
                isGoogleAccount: true
            });
        } else if (!user.googleId) {
            // Update existing user with Google info
            user.googleId = googleId;
            user.avatar = picture;
            user.isGoogleAccount = true;
            await user.save();
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Return user info and token
        res.json({
            token,
            user: {
                id: user._id,
                email: user.email,
                username: user.username,
                fullName: user.fullName,
                avatar: user.avatar,
                role: user.role
            }
        });
    } catch (error) {
        console.error('Google login error:', error);
        res.status(401).json({ message: 'Google authentication failed' });
    }
}; 