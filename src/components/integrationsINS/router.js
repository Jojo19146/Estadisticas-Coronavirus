'use strict'

const router = require('express').Router();

const { getINSCovidData } = require('./controller');
const { catchErrors } = require('../../utils/catchError')

router.get('/get-ins-data', catchErrors(getINSCovidData));

module.exports = router;