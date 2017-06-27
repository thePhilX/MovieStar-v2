const express = require('express');
const bookingRoutesApi = express();
const bookingAPI = require('../modules/bookingAPI');

bookingRoutesApi.route('/bookings')
    .get(bookingAPI.getAllBookings)
    .post(bookingAPI.postBooking);

bookingRoutesApi.route('/bookings/:id')
    .get(bookingAPI.getBooking)
    // bookings are currently not supposed to be changed
    //.put(bookingAPI.updateBooking)
    .delete(bookingAPI.removeBooking);

module.exports = bookingRoutesApi;
