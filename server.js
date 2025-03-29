const express = require('express');
const connectDB = require('./AUTH/database');
const loginRoute = require('./AUTH/login');
const signupRoute = require('./AUTH/signup');
require('dotenv').config();

const app = express();

connectDB();

app.use(express.json());
app.use('/api/auth', loginRoute);
app.use('/api/auth', signupRoute);

const PORT = process.env.PORT || 3000; // Updated to use port 3000 from .env
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
