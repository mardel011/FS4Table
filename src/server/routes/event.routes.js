let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let eventHistory = require('../models/eventHistory.js');

router.route('/').get((req, res) => {
    eventHistory.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/edit/:id').get((req, res) => {
    eventHistory.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = router;