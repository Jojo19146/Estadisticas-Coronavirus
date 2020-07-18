'use strict'

const mongoose = require('mongoose');
const config = require ('./config');

const connectionURL = `mongodb+srv://${config.mongoUserName}:${config.mongoPassword}@${config.mongoDbHost}/${config.mongoDbName}`;

const databaseConnection = async (url=connectionURL) => {
    try {
        await mongoose.connect(
            url,
            {
              useNewUrlParser: true,
              useUnifiedTopology: true,
              useFindAndModify: false,
              useCreateIndex: true
            }
            );
      console.log('Database connection established');      
    } catch (error) {
      throw(error);  
    }
};

module.exports = { databaseConnection };