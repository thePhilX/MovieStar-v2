const Authenticate = require('../modules/authenticate');
const Booking = require('../models/Bookings');

var API = {};

API.getAllBookings = function(req, res) {
    Authenticate.authUser(req, res, user => {
        if (user) {
            Booking.find({
                userID: user._id
            }, (err, bookings) => {
                if (err) {
                    return res.status(400).send(err);
                }
                return res.status(200).send(bookings);
            });
        }
    });
};

API.getBooking = function(req, res) {
    Booking.findOne({
        _id: req.params.id
    }, function(err, booking) {
        if (err) {
            return res.status(400).send(err);
        }
        return res.status(200).send(booking);
    });
};

API.postBooking = function(req, res) {
    var newBooking = new Booking({
        userID: req.body.userID,
        movies: req.body.movies,
        totalPrice: req.body.totalPrice
    });
    newBooking.save(function(err, saveRes) {
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).send(saveRes);
    });
};

// the Bookings are not meant to be changed, if needed, updateBooking could be added

/*
API.updateBooking = function(req, res) {
    Booking.findOne({
        _id: req.params.id
    }, function(findErr, booking) {
        if (findErr) {
            return res.status(400).send(findErr);
        }
        var updatedBooking = booking;
        if (req.body.userID) updatedBooking.userID = req.body.userID;
        if (req.body.movies) updatedBooking.movies = req.body.movies;
        if (req.body.totalPrice) updatedBooking.totalPrice = req.body.totalPrice;

        return updatedBooking.save(function(saveErr, saveRes) {
            if (saveErr) {
                return res.status(500).send(saveErr);
            }
            return res.status(200).send(saveRes);
        });
    });
}; */

API.removeBooking = function(req, res) {
    Booking.remove({
        _id: req.params.id
    }, function(err, removeRes) {
        if (err) {
            return res.status(400).send(err);
        }
        return res.status(200).send(removeRes);
    });
};

module.exports = API;
