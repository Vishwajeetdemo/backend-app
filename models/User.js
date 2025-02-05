const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    interests: { type: [String], required: true },
    birthDate: { type: Date, required: true },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
