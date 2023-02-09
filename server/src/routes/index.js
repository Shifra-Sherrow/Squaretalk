const routes = require('express').Router();

const clientRoutes = require('./client');

routes.use('/client', clientRoutes);

module.exports = routes;
