const express = require('express');
const router = express.Router();
const User = require('../models/User');



// Get all users
router.get('/submit-form', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to handle form submission
router.post('/submit-form', async (req, res) => {
    try {
        const formData = req.body;

        // Create a new user instance using the User model
        const newUser = new User(formData);

        // Save the new user to the database
        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
