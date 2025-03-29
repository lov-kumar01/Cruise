const express = require('express');
const router = express.Router();
const User = require('./userModel');

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || user.password !== password) {
            return res.status(400).send('Invalid username or password');
        }
        res.send({
            success: true,
            message: 'Login successful',
            user: {
                id: user._id,
                username: user.username,
                role: user.role,
            },
        });
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
