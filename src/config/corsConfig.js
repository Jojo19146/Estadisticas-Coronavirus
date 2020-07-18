'use strict'

const config = require('./config');

const corsValidations = (req, cb) => {
    const whiteList = [ config.cors ];
    const corsOptions = whiteList.indexOf(req.header('Origin')) !== -1
        ? { origin: true }
        : { origin: false};
    
    return cb(null, corsOptions);
};

module.exports = { corsValidations };