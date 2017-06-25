var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

// TODO authorization

// Models
var User = mongoose.model('User');
var Movie = mongoose.model('Movie');

/* GET all users. (RESTRICTED: admin) */
router.get('/', function(req, res, next) {

  User.find().exec(
    function (err, users) {
      if (err) return next(err);
      res.status(200);
      res.json({success: true, data: users});
    }
  );
});

/* GET specific user. (RESTRICTED: specific user or admin) */
router.get('/:userId', function(req, res, next) {

  User.findById(userId).exec(
    function (err, user) {
      if (err) return next(err);
      // Return a 404 if the user is not found
      if (!user) {
        res.status(404);
        res.json({
          success: false,
          msg: 'The user does not exist.'
        });
      }
      else {
        res.status(200);
        res.json({success: true, data: user});
      };
    }
  );
});

/* POST new user. */
router.post('/', function(req, res, next) {
  // Ensure "is_admin" is set to false
  // admins can only be defined by existing admins after registration
  req.body.is_admin = false;

  User.create(req.body, function (err, user) {
    if (err) return next(err);
    res.status(200);
    res.json({success: true, data: user});
  });
});

/* PUT user. (RESTRICTED: specific user or admin) */
router.put('/:userId', auth, function(req, res, next) {
  // IMPORTANT: Only send the data that has changed

  var jwt_id = req.payload._id;
  var jwt_is_admin = req.payload.is_admin;
  var userId = req.params.userId;

  // If no user ID exists in the JWT or if the requested user does not match
  // the one of the JWT, who is no admin, return a 401
  if (!jwt_id || (jwt_id != userId && !jwt_is_admin)) {
    res.status(401);
    res.json({
      success: false,
      msg: 'No permission to change details of another user.'
    });
  } else {
    // Ensure "is_admin" is set to false if user is not an admin
    if (!jwt_is_admin) {
      req.body.is_admin = false;
    }

    // Ensure "password" field is not set (use standalone route for password updates!)
    if(req.body.password) {
      delete req.body.password;
    };

    // Update the user details
    User.findByIdAndUpdate(req.params.userId, req.body,
        { new: true, runValidators: true })
      .exec(
        function (err, user) {
          if (err) return next(err);
          // Return a 404 if the user is not found
          if (!user) {
            res.status(404);
            res.json({
              success: false,
              msg: 'The user does not exist.'
            });
          }
          else {
            res.status(200);
            res.json({success: true, data: user});
          };
        }
      );
  };
});

/* PUT user password. (RESTRICTED: specific user or admin) */
router.put('/password/:userId', auth, function(req, res, next) {
  // IMPORTANT: Only send the data that has changed
  // (otherwise the password hash will likely change)

  var jwt_id = req.payload._id;
  var jwt_is_admin = req.payload.is_admin;
  var userId = req.params.userId;

  // If no user ID exists in the JWT or if the requested user does not match
  // the one of the JWT, who is no admin, return a 401
  if (!jwt_id || (jwt_id != userId && !jwt_is_admin)) {
    res.status(401);
    res.json({
      success: false,
      msg: 'No permission to change details of another user.'
    });
  } else {
    // hash the cleartext password from the request before updating
    User.hashPassword(req.body.password, function(err, hash) {
      if (err) return next(err);

      // Construct user model with password field only to omit any other changes
      // than the password
      var user = {
        password : hash
      }

      // Update the password
      User.findByIdAndUpdate(req.params.userId, user,
          { new: true, runValidators: true })
        .exec(
          function (err, user) {
            if (err) return next(err);
            // Return a 404 if the user is not found
            if (!user) {
              res.status(404);
              res.json({
                success: false,
                msg: 'The user does not exist.'
              });
            }
            else {
              res.status(200);
              res.json({success: true, data: user});
            };
          }
        );

    });
  };
});

/* DELETE user. (RESTRICTED: specific user or admin) */
router.delete('/:userId', auth, function(req, res, next) {
  var jwt_id = req.payload._id;
  var jwt_is_admin = req.payload.is_admin;
  var userId = req.params.userId;

  // If no user ID exists in the JWT or if the requested user does not match
  // the one of the JWT, who is no admin, return a 401
  if (!jwt_id || (jwt_id != userId && !jwt_is_admin)) {
    res.status(401);
    res.json({
      success: false,
      msg: 'No permission to delete another user.'
    });
  } else {
    // Remove User
    User.findByIdAndRemove(req.params.userId)
      .exec(
        function (err, user) {
          if (err) return next(err);
          // Return a 404 if the user is not found
          if (!user) {
            res.status(404);
            res.json({
              success: false,
              msg: 'The user does not exist.'
            });
          }
          else {
            res.status(200);
            res.json({success: true, data: user});
          };
        }
      );
  };
});

module.exports = router;
