const Express = require('express')
const morgan = require('morgan')

const app = Express()

app.use(morgan('dev'))

