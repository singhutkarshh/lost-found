require('dotenv').config();

const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
const Router = require('./routes/index.router');

const app = express();

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
}));

app.use(cookieParser());
app.use(express.urlencoded({
    limit: '50mb',
    extended: true,
}));

app.enable('trust proxy');
app.use(express.json({limit: '50mb'}));
app.use('/', Router);


module.exports = app;
