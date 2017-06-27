const express = require('express');
const movieRoutesApi = express();

const movieAPI = require('../modules/movieAPI');

movieRoutesApi.route('/movies')
    .get(movieAPI.getAllMovies)
    .post(movieAPI.postMovie);

movieRoutesApi.route('/movies/:id')
    .get(movieAPI.getMovie)
    .put(movieAPI.updateMovie)
    .delete(movieAPI.removeMovie);

module.exports = movieRoutesApi;
