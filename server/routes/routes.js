module.exports = app => {
    const prices = require('../controllers/controllers')
    var router = require('express').Router();

    //Get the whole sheet
    router.get('/prices', prices.getall)



    app.use('/api', router);
}