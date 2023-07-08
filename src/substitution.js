// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const realAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || alphabet.length !== 26 || alphabet.split("").some((r1,r2,r3) => r3.lastIndexOf(r1) !== r2)) {
      return false;
    } 
    // based on param input, changes the alphabet to use regarding encode or decode
    enArray = encode ? [realAlphabet,alphabet.split("")] : [alphabet.split(""),realAlphabet]
    return input.toLowerCase().split("").reduce((acc,letter) => {
      // if alphabet doesn't have letters in string then push
      if (!alphabet.split("").includes(letter)){
        acc.push(letter)
      } else {
  //if it does have the letters, find the letters index in array1 to match array2 letter index
        acc.push(enArray[1][enArray[0].indexOf(letter)])
      }
      return acc
    }, []).join("")
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
