'use strict';

const assert = require('assert');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';
let horizonResult = false;
let horizonPiece = " "
let verticalResult = false
let verticalPiece = " "
let diagonalResult = false
let diagonalPiece = " "

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  // Your code here

  for (let i = 0; i< board.length;i++) {
    if (board[i][0] === "X" && board[i][1] === "X" && board[i][2] === "X" ) {
      horizonResult = true;
      horizonPiece = "Player X wins"
    } else if (board[i][0] === "O" && board[i][1] === "O" && board[i][2] === "O" ){
      horizonResult = true;
      horizonPiece = "Player O wins"
    }
  }
}

function verticalWin() {
  // Your code here
  for(let i = 0; i < board.length; i++){
    if(board [0][i] === "X" && board[1][i] === "X" && board[2][i] === "X"){
      verticalResult = true;
      verticalPiece = "Player X wins"
    } else if (board [0][i] === "O" && board[1][i] === "O" && board[2][i] === "O"){
      verticalResult = true;
      verticalPiece = " Player O Wins"
    }
  }
}

function diagonalWin() {
  // Your code here
  if(
    board[0][0] === "X" && board [1][1] === "X" && board[2][2] === "X" ||
    board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X"){
      diagonalResult = true;
      diagonalPiece = "player X Wins"
  } else if(
    board[0][0] === "O" && board [1][1] === "O" && board[2][2] === "O" ||
    board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O"){
      diagonalResult = true;
      diagonalPiece = "Player O wins"
    }
}

function checkForWin() {
  // Your code here
  horizontalWin()
  if (horizonResult) {
    console.log(horizonPiece)
  }
  verticalWin()
  if (verticalResult){
    console.log(verticalPiece)
  }
  diagonalWin()
  if (diagonalResult){
    console.log(diagonalPiece)
  }
}

function ticTacToe(row, column) {
  // Your code here

  let check = board[row][column];

  if(check.includes("X" || check.includes("O"))){
    console.log('invalid move')
  } else {
    board[row][column] = playerTurn
    if(playerTurn === "X"){
      playerTurn = "O"
    } else {
      playerTurn = "X"
    }
  } 
  checkForWin();
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
