var IPod = require('ipod')

var ipod = new IPod('./quacks.mp3')

ipod.on('playing', (item) => {
  console.log('Quack!')
})

// make the duck quack with 
//   ipod.play()

module.exports = ipod