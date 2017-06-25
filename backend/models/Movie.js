var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MovieSchema = new Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    director: { type: String, required: true },
    genre: { type: String, required: true },
    duration: {type: Number, required: true},
    price: { type: Number, required: true },
    date_added: { type: Date, required: true, default: Date.now() }
});
module.exports = mongoose.model('Movie', MovieSchema);
