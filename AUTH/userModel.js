const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['voyager', 'admin', 'manager', 'head-cook', 'supervisor'] },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
