const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
    title: String,
    plot: String,
    genre: String,
    year: Number,
    poster: String,
    director: String,
    rating: Number,
    review: String,
});

module.exports = model('Movie', movieSchema);