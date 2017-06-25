const express = require('express');
const userRoutesApi = express.Router();
const userAPI = require('../modules/userAPI');

userRoutesApi.route('/users')
    .get(userAPI.getAllUsers)
    .post(userAPI.postUser);

userRoutesApi.route('/users/:id')
    .get(userAPI.getUser)
    .put(userAPI.updateUser)
    .delete(userAPI.removeUser);

userRoutesApi.route('/auth')
    .post(userAPI.authenticate());

module.exports = userRoutesApi;
