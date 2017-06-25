var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// Models
var Movie = mongoose.model('Movie');

// GET all movies.
router.get('/', function(req, res, next) {
  Movie.find(function (err, movies) {
    if (err) return next(err);
    res.status(200);
    res.json({success: true, data: movies});
  });
});

// GET details of a specific movie
router.get('/:movieId', function(req, res, next) {
  Movie.findById(req.params.movieId)
    .exec(
      function (err, movie) {
        if (err) return next(err);
        // Return a 404 if the article is not found
        if (!movie) {
          res.status(404);
          res.json({
            success: false,
            msg: 'Movie does not exist.'
          });
        }
        else {
          res.status(200);
          res.json({success: true, data: movie});
        };
      }
    );
});

// POST new movie (only for admins)
// TODO only for admins

router.post('/', function(req, res, next) {
  var movie = req.body.movie;

  Movie.create(movie, function (err, movie) {
      if (err) {
        console.log(err);
      };
      res.status(200);
      res.json({success: true, data: movie});
    }
});

/* PUT existing article details. (RESTRICTED: admin) */
router.put('/:movieId', function(req, res, next) {
  var movie = req.body.article;

  Movie.findByIdAndUpdate(req.params.movieId, movie,
    function (err, oldMovie) {
      if (err) return next(err);
      // Return a 404 if the movie was not found
      if (!oldMovie) {
        res.status(404);
        res.json({
          success: false,
          msg: 'Movie does not exist.'
        });
      }
      else {
        res.status(200);
        res.json({success: true, data: oldMovie});
      }
    });
});

/* DELETE article. (RESTRICTED: admin) */
router.delete('/:movieId', function(req, res, next) {

  Article.findByIdAndRemove(req.params.movieId)
    .exec(
      function (err, oldMovie) {
        if (err) return next(err);
        // Return a 404 if the movie is not found
        if (!oldMovie) {
          res.status(404);
          res.json({
            success: false,
            msg: 'Movie does not exist.'
          });
        }
        else {
          res.status(200);
          res.json({success: true, data: oldMovie});
        };
      }
    );
});

module.exports = router;
