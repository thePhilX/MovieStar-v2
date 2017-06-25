var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

// Models
var Movie = require('./Movie');

var BookingSchema = new Schema({
    user: { type: ObjectId, ref: 'User', required: true },
    movies: {
      type: [{
        movies: {
          type: Movie.schema,
          required: true
        }
      }],
      required: true
    },
    price: { type: Number, required: true },
    timestamps: { createdAt: 'created_at' }
});

module.exports = mongoose.model('Booking', BookingSchema);
