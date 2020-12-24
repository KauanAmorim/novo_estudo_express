const express = require('express')

const app = express()
const port = 3000

// rotas básicas

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.post('/', (req, res) => {
    res.send('Got a POST request')
})

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at user')
})

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

app.get('/manipulacoesemanipulacao', [func1, func2, func3], (req, res, next) => {
    console.log('The response will be sent by the next function!')
    next()
}, (req, res) => {
    res.send('Hello manipulador')
})

app.get('/multiplasmanupulacoes', [func1, func2, func3])

app.get('/manupuladoresderota', (req, res, next) => {
    console.log('The response will be sent by the next function!')
    next()
}, (req, res) => {
    res.send('Hello manipulador de rota')
})

app.listen(port)