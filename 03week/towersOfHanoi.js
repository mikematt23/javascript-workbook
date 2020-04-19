'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};


function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack,endStack, result) {
  // Your code here
  console.log(result,startStack, endStack)
  let lastFrom = startStack.pop();
  let lastTo = endStack.pop()
  if(result ==  true){
    if(lastTo != null) {
       endStack.push(lastTo);
    }
    endStack.push(lastFrom);
  } else { 
    startStack.push(lastFrom);
    endStack.push(lastTo);
  }
}

function isLegal(startStack, endStack) {
  // Your code here
  let r = false;
  let lastFrom = startStack.pop();
  let lastTo = endStack.pop(); 
  
  if(lastFrom < lastTo){
    r = true;
  } else if (lastFrom > lastTo){
    r = false;
    console.log("You can Not put a bigger number on a smaller one. Please make another move")
  } else if(lastTo == null && (lastFrom === 1|| lastFrom === 2 || lastFrom === 3 || lastFrom === 4)){
    r = true;
  } else if(lastFrom == null && lastTo == null){
    r = false;
    console.log("Invalid Movie, Please Try again.")
  } 
  startStack.push(lastFrom);
  endStack.push(lastTo);
  return r
}

function checkForWin() {
  // Your code here
  let win = "4,3,2,1"
  if(stacks.b.toString() === win||
     stacks.c.toString() === win){
       console.log("Congrts!!!! You Won!")
     }
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  let fromStack = stacks[startStack];
  let toStack =stacks[endStack];
  let result = isLegal(fromStack, toStack);
  movePiece(fromStack, toStack, result);
  checkForWin();
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
