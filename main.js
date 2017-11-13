/*
console log empty board
  |  |
--------
  |  |
---------
  |  |


*/
var prompt = require('prompt')

var board = [[false, false, false], [false, false, false], [false, false, false]]

var initialize = () => {
  prompt.start()
  console.log('Welcome to tic tac toe. You are X. I am O. Enter coordinates to make your move (ex 0,1).')
//   console.log(
// `    |  |  
//   --------
//     |  |  
//   ---------
//     |  |  `)

  console.log(board)

  promptForMove();

}

var promptForMove = () => {
  prompt.get(['location'], function(err, results) {
    console.log('got', results.location)
    //check spot is not occupied
    var coord = results.location.split(',')
    var canPlay = checkAndPlay(coord[0], coord[1], 'them')
    //print board
    console.log(board)
    //check for winner
    var gameOver = checkForWinner()
    //if no winner say my turn and make play @ available location
    if(!gameOver) {
      generatePlay()
    } else {
      rollCredits()
    }
    //print board
    console.log(board)
    //check for winner
    gameOver = checkForWinner()
    
    if(!gameOver) {
      promptForMove()
    }
  })
}

var generatePlay = () => {
  //generate random numbers within board
  var validPlay = false;
  while(!validPlay) {
    var row = Math.floor(Math.random() * (2 - 0 + 1));
    var col = Math.floor(Math.random() * (2 - 0 + 1));
    validPlay = checkAndPlay(row, col, 'me')
  }
  return
}

var checkAndPlay = (row, col, player) => {
  if(!board[col][row]) {
    board[col][row] = player === 'them' ? 'X' : 'O'
    return true
  }
  return false
}

var checkForWinner = () => {
  return false
}

var rollCredits = () => {

}

initialize()
//call initialize to start