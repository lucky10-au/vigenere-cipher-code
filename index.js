function cipherletter(inputLetter, column) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var letterinput = inputLetter
    var letternumber = alphabet.indexOf(letterinput,1)
    var letterproccess = letternumber+column
    var newLetterProcess = letterproccess % 26
    var outputLetter = alphabet.substr(newLetterProcess,1)
    return outputLetter
}
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Insert word here: ', wrd => {
var finishingwrd = finishingword(wrd)
    console.log(finishingwrd);
    readline.close();
  });
function finishingword (wrd) {
var alphabet = 'abcdefghijklmnopqrstuvwxyz'
input = wrd
console.log("  " + input.substr(0,1))
columnstart = input.substr(0,1)
column2 = alphabet.indexOf(columnstart,1)
column = column2 + 1
for(var i = 0; i < input.length; i++) {
    var letter1= input.substr(i,1)
    var cipherLetter = cipherletter(letter1, column)
    console.log  (letter1, cipherLetter)
}
}


































































































































































































































































































































































































































































































































































































