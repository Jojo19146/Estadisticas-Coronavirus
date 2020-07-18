'use strict'

const notFound = (req, res, next) => {
    const err = new Error('Resource not found');
    err.status = 404;
    next(err);
};

const errorHandler = (err, req, res, next) => {
    err.stack = err.stack || '';

    const errorDetails = {
        message: err.message,
        status: err.status ? err.status : 500
    };

    res.status(err.status).json(errorDetails);
};

const handlerFatalError = (err) => {
    console.log(`Fatal Server Error: $(err.mesage)`);
};

module.exports = {
    notFound,
    errorHandler,
    handlerFatalError
};