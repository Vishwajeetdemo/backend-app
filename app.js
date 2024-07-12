const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const dotenv = require("dotenv");
const connectDatabase= require("./config/database");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config({path:'config/.env'});

connectDatabase()

// Routes
app.use('/api/user', userRoutes);

// Start server

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
