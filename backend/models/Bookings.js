var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

// Models
var Movie = require('./Movie');

var BookingSchema = new Schema({
    userID: { type: ObjectId, ref: 'User', required: true },
    movies: {
      type: [{
        movies: {
          type: Movie.schema,
          required: true
        }
      }],
      required: true
    },
    totalPrice: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', BookingSchema);
