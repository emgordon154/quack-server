const express = require('express');
const morgan = require('morgan');
const path = require('path');

var player = require('./audio.js')

const app = express();

app.use(morgan('dev'));


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

console.log(player.list)

app.get('/', (req, res, next) => {
  // create quack sound on
  // res.send("I'm a working, non-quacking server");
  // res.sendFile(path.join(__dirname, 'index.html'));
  
  player.play()
  setTimeout(()=>{player.stop()}, 2000)
  res.status(200).send()
});