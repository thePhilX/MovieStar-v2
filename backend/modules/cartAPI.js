const Authenticate = require('../modules/authenticate');
const Cart = require('../models/Cart');

var API = {};

API.getAllCarts = function(req, res) {
    Authenticate.authUser(req, res, user => {
        if (user) {
            Cart.find({
                userID: user._id
            }, (err, carts) => {
                if (err) {
                    return res.status(400).send(err);
                }
                return res.status(200).send({carts: carts, userid: user._id});
            });
        }
    });
};

API.getCart = function(req, res) {
    Cart.findOne({
        _id: req.params.id
    }, function(err, cart) {
        if (err) {
            return res.status(400).send(err);
        }
        return res.status(200).send(cart);
    });
};

// used if user haven't had anything in the cart before
API.postCart = function(req, res) {
    console.log(req.body);
    var newCart = new Cart({
        userID: req.body.userID,
        movies: req.body.movies,
        totalPrice: req.body.totalPrice
    });
    console.log(newCart);
    newCart.save(function(err, saveRes) {
        if (err) {
            return res.status(400).send(err);
        }
        return res.status(200).send(saveRes);
    });
};

// used when user use the "addToCart"-function
API.updateCart = function(req, res) {
    Cart.findOne({
        _id: req.params.id
    }, function(findErr, cart) {
        if (findErr) {
            return res.status(400).send(findErr);
        }
        var updatedCart = cart;
        if (req.body.userID) updatedCart.userID = req.body.userID;
        if (req.body.movies) updatedCart.movies = req.body.movies;
        if (req.body.totalPrice) updatedCart.totalPrice = req.body.totalPrice;

        return updatedCart.save(function(saveErr, saveRes) {
            if (saveErr) {
                return res.status(400).send(saveErr);
            }
            return res.status(200).send(saveRes);
        });
    });
};

// used if user buys the movies
API.removeCart = function(req, res) {
    Cart.remove({
        _id: req.params.id
    }, function(err, removeRes) {
        if (err) {
            return res.status(400).send(err);
        }
        return res.status(200).send(removeRes);
    });
};

module.exports = API;
