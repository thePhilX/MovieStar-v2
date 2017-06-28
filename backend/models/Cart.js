var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

// Models
var Movie = require('./Movie');

var CartSchema = new Schema({
    userID: { type: ObjectId, ref: 'User', required: true },
    movies: {
      type: [{ type: ObjectId, ref: 'Movie', required: true }]
    },
    totalPrice: { type: Number, required: true }
});

module.exports = mongoose.model('Cart', CartSchema);
