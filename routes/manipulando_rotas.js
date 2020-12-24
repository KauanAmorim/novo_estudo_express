const express = require('express')
const router = express.Router()

// manipulando rotas

const func1 = function (req, res, next) {
    console.log('func1')
    next()
}

const func2 = function (req, res, next) {
    console.log('func2')
    next()
}

const func3 = function (req, res, next) {
    console.log('func3')
    next()
}

router.get('/manipulacoesemanipulacao', [func1, func2, func3], (req, res, next) => {
    console.log('The response will be sent by the next function!')
    next()
}, (req, res) => {
    res.send('Hello manipulador')
})

router.get('/multiplasmanupulacoes', [func1, func2, func3])

router.get('/manupuladoresderota', (req, res, next) => {
    console.log('The response will be sent by the next function!')
    next()
}, (req, res) => {
    res.send('Hello manipulador de rota')
})

module.exports = router