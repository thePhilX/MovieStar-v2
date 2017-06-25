 // get the movie model
const Movie = require('../models/movie');

var API = {};

API.getAllMovies = function(req, res) {
    Movie.find(function(err, movies) {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).send(movies);
    });
};

API.getMovie = function(req, res) {
    Movie.findOne({
        _id: req.params.id
    }, function(err, movie) {
        if (err) {
            return res.status(400).send(err);
        }
        return res.status(200).send(movie);
    });
};

API.postMovie = function(req, res) {
    var newMovie = new Movie({
        title: req.body.title,
        year: req.body.year,
        director: req.body.director,
        genre: req.body.genre,
        duration: req.body.duration,
        price: req.body.price,
        date_added: req.body.date_added
    });
    newMovie.save(function(err, saveRes) {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).send(saveRes);
    });
};

API.updateMovie = function(req, res) {
    Movie.findOne({
        _id: req.params.id
    }, function(findErr, movie) {
        if (findErr) {
            return res.status(400).send(findErr);
        }
        var updatedMovie = movie;
        if (req.body.title) updatedMovie.title = req.body.title;
        if (req.body.year) updatedMovie.year = req.body.year;
        if (req.body.director) updatedMovie.director = req.body.director;
        if (req.body.genre) updatedMovie.genre = req.body.genre;
        if (req.body.duration) updatedMovie.duration = req.body.duration;
        if (req.body.price) updatedMovie.price = req.body.price;
        if (req.body.date_added) updatedMovie.date_added = req.body.date_added;

        return updatedMovie.save(function(saveErr, saveRes) {
            if (saveErr) {
                return res.status(500).send(saveErr);
            }
            return res.status(200).send(saveRes);
        });
    });
};

API.removeMovie = function(req, res) {
    Movie.remove({
        _id: req.params.id
    }, function(err, removeRes) {
        if (err) {
            return res.status(400).send(err);
        }
        return res.status(200).send(removeRes);

    });
};

module.exports = API;
