require('dotenv').config(); // <-- (Ensure this is at the very top)
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; // <-- ADDED: Import LocalStrategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports = function(passport) {
  // ================================
  // Local Strategy (Email/Password)
  // ================================
  passport.use(
    'local',
    new LocalStrategy(
      {
        usernameField: 'email', // Use email as the login field
        passwordField: 'password',
      },
      async (email, password, done) => {
        try {
          // Find user by email
          const user = await User.findOne({ email });
          if (!user) {
            return done(null, false, { message: 'Incorrect email or password.' });
          }
          // Compare provided password with stored hashed password
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return done(null, false, { message: 'Incorrect email or password.' });
          }
          return done(null, user);
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  // ================================
  // Google OAuth Strategy
  // ================================
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,   // Ensure these environment variables are set in your .env file
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log('Google profile received:', profile);

        // Prepare new user object with fallback values
        const newUser = {
          method: 'google', // Indicate signup via Google
          googleId: profile.id,
          displayName: profile.displayName || '',
          firstName: profile.name?.givenName || '',
          lastName: profile.name?.familyName || '', // Fallback for missing lastName
          email: profile.emails?.[0]?.value || '',
          image: profile.photos?.[0]?.value || '',
        };

        try {
          // Check if the user already exists
          let user = await User.findOne({ googleId: profile.id });
          if (user) {
            return done(null, user);
          }
          // Create new user if not found
          user = await User.create(newUser);
          return done(null, user);
        } catch (err) {
          console.error('Error during Google authentication:', err);
          return done(err, null);
        }
      }
    )
  );

  // =================================
  // Session Serialization / Deserialization
  // =================================
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      console.error('Error during user deserialization:', err);
      done(err, null);
    }
  });
};
