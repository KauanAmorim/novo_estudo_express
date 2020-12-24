const express = require('express')
const router = express.Router()

router.route('/')
    .get((req, res) => {
        res.send('requisição get')
    })
    .post((req, res) => {
        res.send('requisição post')
    })
    .put((req, res) => {
        res.send('requisição put')
    })
    .delete((req, res) => {
        res.send('requisição delete')
    })

module.exports = router