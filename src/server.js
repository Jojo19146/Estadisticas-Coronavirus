'use strict'

/**Package Requirements */
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');

/** File Requirements*/
const config = require('./config/config');
const { corsValidations } = require('./config/corsConfig');
const { databaseConnection } = require('./config/database');
const { notFound, errorHandler, handlerFatalError } = require('./utils/middlewares/errorHandlers');
const mainRouter = require('./router');

/** Inits */
const server = express();

/** Middlewares */
server.use(morgan('dev'));
server.use(cors(corsValidations));
server.use(express.json());
server.use(compression());
server.use(helmet());

/** Routes */
//** server.use('/', (req, res) => res.status(200).send('Welcome to my server'));/
server.use('/api', mainRouter);

/**  Error Handlers */
server.use(notFound);
server.use(errorHandler);
server.use(handlerFatalError);

/**Functions */
const startServer =  async () => {
    try {
        await databaseConnection(); 
        console.log(`Environment: ${config.environment}`);
        server.listen(config.port, () => console.log(`Server start successfully on port ${config.port}!`));
    } catch (error) {
        process.on('uncaughtException', handlerFatalError(error));
        process.on('unhandledRejection', handlerFatalError(error));
    }
};

module.exports = { startServer };