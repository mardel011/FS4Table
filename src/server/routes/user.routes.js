let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let chatHistory = require('../models/chatHistory.js');

router.route('/').get((req, res) => {
    chatHistory.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/edit/:id').get((req, res) => {
    chatHistory.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

module.exports = router;