const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    default: 0,
  },
});

const resultSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  submittedOption: {
    type: String,
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  isCorrect: {
    type: Boolean,
    required: true,
  },
},{
    _id: false
  });

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    selectedCategories: {
      type: [String],
      default: [],
    },
    score: {
      type: [scoreSchema],
      default: [],
    },
    highScore: {
      type: Number,
      default: 0,
    },
    lastResults: {
      type: [resultSchema],
      default: [],
    },
  },
  {
    timestamps: true,
    collection: 'users',
  }
);

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
