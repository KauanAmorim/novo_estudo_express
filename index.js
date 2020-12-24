const express = require('express')

const app = express()
const port = 3000

const rotas_basicas = require('./routes/rotas_basicas')
const manipulando_rotas = require('./routes/manipulando_rotas')
const router_route = require('./routes/router_route')

app.use('/rotas_basicas', rotas_basicas)
app.use('/manipulando_rotas', manipulando_rotas)
app.use('/router_route', router_route)

app.listen(port)