// var Player = require('player')

// var player = new Player('./quacks.mp3')

// player.on('error', (err) => {
//   console.log(err)
// })

// module.exports = player



var IPod = require('ipod')

var ipod = new IPod('./quacks.mp3')

ipod.on('playing', (item) => {
  console.log('Quack!')
})

// make the duck quack with 
//   ipod.play()

ipod.on('error', (err) => {
  console.log(err)
})

ipod.on('playend', (item) => {
  ipod.stop()
})

module.exports = ipod


