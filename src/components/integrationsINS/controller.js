'use strict'

const axios = require('axios');

const getINSCovidData = async (req, res) => {
    const result = await axios.get('https://www.datos.gov.co/resource/gt2j-8ykr.json');
    res.status(200).json({ data: result.data });
};

module.exports = {
    getINSCovidData
}
