'use strict'

const mainRouter = require('express').Router();

mainRouter.use('/v1', require('./components/integrationsINS/router'));

module.exports =mainRouter;