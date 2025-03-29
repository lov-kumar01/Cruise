const express = require('express');
const router = express.Router();
const User = require('./userModel');

router.post('/signup', async (req, res) => {
    const { username, password, role, firstName, lastName } = req.body;
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).send('Username already exists');
        }
        const user = new User({ username, password, role, firstName, lastName });
        await user.save();
        res.send({
            success: true,
            message: 'Signup successful',
            user: {
                id: user._id,
                username: user.username,
                role: user.role,
                firstName: user.firstName,
                lastName: user.lastName,
            },
        });
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
