const express = require('express');
const passport = require('passport'); // Correctly imported passport
const bcrypt = require('bcryptjs'); // For password hashing
const User = require('../models/User'); // Ensure you have a User model
const router = express.Router();

// @desc Authenticate with Google
// @route GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// @desc Google auth callback
// @route GET /auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

// Login route (GET)
router.get('/login', (req, res) => {
  res.render('login'); // render login page (login.hbs)
});

// @desc Handle User Login
// @route POST /auth/login
router.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard', // Redirect on success
  failureRedirect: '/auth/login', // Redirect on failure
  failureFlash: true // Optional: flash messages for errors
}));

// Signup route (GET)
router.get('/signup', (req, res) => {
  res.render('signup'); // render signup page (signup.hbs)
});

// @desc Handle User Signup
// @route POST /auth/signup
router.post('/signup', async (req, res) => {
  console.log("Received signup data:", req.body);

  const { name, email, password, password2 } = req.body;

  // Simple validation
  if (password !== password2) {
    return res.status(400).send('Passwords do not match');
  }

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send('User already exists');
    }

    // Create a new user for a local signup
    user = new User({
      method: 'local',             // Set method to local
      displayName: name,           // Store the provided name in displayName
      email: email,
      password: password           // We'll hash it below
      });

    // Hash password before saving
    user.password = await bcrypt.hash(password, 10);

    await user.save();

    // Redirect to login after successful signup
    res.redirect('/auth/login');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// @desc Logout user
// @route GET /auth/logout
router.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/'); // Redirect to homepage after logout
  });
});

module.exports = router;
