require('dotenv').config();
const mongoose = require('mongoose');

const User = require('../models/User');

const dbName = 'nomadaTravel';
mongoose.connect(process.env.DBURL);


