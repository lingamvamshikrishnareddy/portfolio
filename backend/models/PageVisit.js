const mongoose = require('mongoose');

const pageVisitSchema = new mongoose.Schema({
  page: {
    type: String,
    required: true,
    unique: true
  },
  visitCount: {
    type: Number,
    default: 1
  },
  lastVisited: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('PageVisit', pageVisitSchema);
