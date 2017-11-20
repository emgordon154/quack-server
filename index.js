const Express = require('express')
const morgan = require('morgan')

const play = require('audio-play')
const load = require('audio-loader')

const app = Express()

app.use(morgan('dev'))

app.get('/', (req,res,next) => {
  
})

