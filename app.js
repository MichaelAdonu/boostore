const express = require('express');
const morgan = require('morgan');

const app = express();

const bookRoute = require('./routes/bookRoute');

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/v1/books', bookRoute);

module.exports = app;
