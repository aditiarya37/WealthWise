const path = require('path');
const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const morgan = require('morgan');
const { engine } = require('express-handlebars'); // Correctly importing express-handlebars
const passport = require('passport');
const session = require('express-session'); // Correct import for session
const MongoStore = require('connect-mongo');
const connectDB = require('./config/db');
const flash = require('connect-flash');

// Load config
dotenv.config({ path: './config/config.env' });

// Passport config
require('./config/passport')(passport); // Correct syntax for requiring and passing passport

// Connect to database
connectDB();

const backend = express();

// Add CORS middleware here
const cors = require('cors');
backend.use(cors()); // This lets the backend talk to any frontend

// Logging
if (process.env.NODE_ENV === 'development') { // Fixed spelling error ('deveopment' -> 'development')
  backend.use(morgan('dev'));
}

// Handlebars setup
backend.engine('.hbs', engine({ defaultLayout: 'main', extname: '.hbs' })); // Updated syntax for express-handlebars
backend.set('view engine', '.hbs');
backend.set('views', './views');

// Sessions middleware
backend.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ 
      mongoUrl: process.env.MONGO_URI // Use your MongoDB connection string
    })
  })
);

// Initialize flash middleware
backend.use(flash());

// Passport middleware
backend.use(passport.initialize());
backend.use(passport.session());

// Static folder
backend.use(express.static(path.join(__dirname, 'public')));

//Insert Body-Parsing Middleware Here
backend.use(express.urlencoded({ extended: false }));
backend.use(express.json());

// Routes
backend.use('/', require('./routes/index'));
backend.use('/auth', require('./routes/auth'));

const PORT = process.env.PORT || 3000;

backend.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
