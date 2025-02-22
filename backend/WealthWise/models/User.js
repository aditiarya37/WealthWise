const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  method: {
    type: String,
    enum: ['google', 'local'],
    required: true,
    default: 'google',
  },
  googleId: {
    type: String,
    required: function () {
      return this.method === 'google';
    },
  },
  displayName: {
    type: String,
    required: function () {
      return this.method === 'google';
    },
    default: 'Unknown User',
  },
  firstName: {
    type: String,
    required: function () {
      return this.method === 'google';
    },
    default: 'Unknown',
  },
  lastName: {
    type: String,
    required: function () {
      return this.method === 'google';
    },
    default: 'Unknown',
  },
  image: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: function () {
      return this.method === 'local';
    },
  },
  level: {
    type: Number,
    default: 1,
  },
  streak: {
    type: Number,
    default: 0,
  },
  progress: {
    type: Map,
    of: Number,
    default: {},
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', UserSchema);