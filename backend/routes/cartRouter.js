const express = require('express');
const cartRoutesApi = express();
const cartAPI = require('../modules/cartAPI');

cartRoutesApi.route('/cart')
    .get(cartAPI.getAllCarts)
    .post(cartAPI.postCart);

cartRoutesApi.route('/cart/:id')
    .get(cartAPI.getCart)
    .put(cartAPI.updateCart)
    .delete(cartAPI.removeCart);

module.exports = cartRoutesApi;
