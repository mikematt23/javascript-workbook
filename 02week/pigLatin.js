'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word)  => {

  // Your code here
  let vowels = "aeiou"
  if (
    word.charAt(0) === "a" ||
    word.charAt(0) === "e" ||
    word.charAt(0) === "i" ||
    word.charAt(0) === "o" ||
    word.charAt(0) === "u"
  ) {
    return word + "yay"
  } else {
     for(let i =0; i < word.length; i++){
       if (vowels.includes(word[i]) === true) {
         let result = word.substring(i) + word.substring(i,0) + "ay"
         return result
       }
     } 
     return "Please enter a word"
  }
}


const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
