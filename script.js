// set up variables
var key = 5;
var range = 26;
var aCode = 65;
var zCode = aCode + range

//get HTML elements
var input = document.getElementById("in");
var encrypt = document.getElementById("encrypt");
var decrypt = document.getElementById("decrypt");
var output = document.getElementById("out");

encrypt.onclick = encipher;
decrypt.onclick = decipher;

function encipher() {
  var message = input.value.toUpperCase();
  output.innerHTML = "";

  for (var i = 0; i < message.length; i++) {

    var letter = message.charCodeAt(i);
    var newLetter = letter;

    if (letter >= aCode && letter <= zCode) {
      newLetter += key;

      if (newLetter >= zCode) {
        newLetter -= range;
      }
    }
    newLetter = String.fromCharCode(newLetter);
    output.innerHTML +=newLetter;
  }
}

function decipher() {
  var message = input.value.toUpperCase();
  output.innerHTML = "";

  for (var i = 0; i < message.length; i++) {

    var letter = message.charCodeAt(i);
    var newLetter = letter;

    if (letter >= aCode && letter <= zCode) {
      newLetter -= key;

      if (newLetter >= zCode) {
        newLetter += range;
      }
    }
    newLetter = String.fromCharCode(newLetter);
    output.innerHTML +=newLetter;
  }
}
