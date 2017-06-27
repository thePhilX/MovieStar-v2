var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

// Models
var Movie = require('./Movie');

var CollectionSchema = new Schema({
    user: { type: ObjectId, ref: 'User', required: true },
    movies: {type: [{ type: ObjectId, ref: 'Movie'}]}
});

module.exports = mongoose.model('Collection', CollectionSchema);
