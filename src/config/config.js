'us strict'

require('dotenv').config();

const config = {
    environment: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3001,
    cors: process.env.CORS || "*",
    mongoDbName: process.env.MONGO_DB_NAME,
    mongoUserName: process.env.MONGO_DB_USERNAME,
    mongoPassword: process.env.MONGO_DB_PASSWORD,
    mongoDbHost: process.env.MONGO_DB_HOST
};

module.exports = config;