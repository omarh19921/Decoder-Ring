// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!input || !shift || shift < -25 || shift > 25 || shift === 0) {
      return false;
    }
    //make a none case sensetive case for letters
    const regEx = /[A-Za-z]/;
    // break up array string into substrings for indevidual character letters
    const subArrays = input.split("");
    // loop through subArrays w/ .map
    let result = subArrays.map((char) => {
      // first lets test that all the characters are letters, if not it will push to the end of array auto bc .map
      if (!regEx.test(char)) {
        return char;
      }
      // now move on to make the letters lowercase && make into ascii code && shift
      let asciiCharCode = char.toLowerCase().charCodeAt();
      let shiftedChar = 0;
      let finalChar = 0;
      if (encode) {
        shiftedChar = asciiCharCode + shift;
      } else {
        shiftedChar = asciiCharCode - shift;
      }
      if (shiftedChar > 122) {
        finalChar = 96 + (shiftedChar - 122);
      } else if (shiftedChar < 97) {
        finalChar = 122 - (96 - shiftedChar);
      } else {
        finalChar = shiftedChar;
      }
      // if it shifts outside border, make it wrap around to other end using ascii code table
      //after getting shifted ascii code, turn shifted into a wanted letter
      const wantedCharacter = String.fromCharCode(finalChar);
      return wantedCharacter;
    });
    // put all characters back into one string
    return result.join("");
    //console.log(result);
  }
  return {
    caesar,
  };
})();

let ceez = caesarModule.caesar("test", 3);
console.log(ceez);
module.exports = { caesar: caesarModule.caesar };
