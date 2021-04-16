
class vigenere {

    /**
     * 
     * @param string input Input word that is used to generate the encoded version of the word
     */
    encode (input) {
        var alphabet = 'abcdefghijklmnopqrstuvwxyz'
        console.log("  " + input.substr(0, 1))
        var columnstart = input.substr(0, 1)
        var column2 = alphabet.indexOf(columnstart, 1)
        var column = column2 + 1
    
    
        for (var i = 0; i < input.length; i++) {
            var letter1 = input.substr(i, 1)
            var cipherLetter = this.cipherletter(letter1, column)
            console.log  (letter1, cipherLetter)
        }
    }

    decode(word) {

    }

    cipherletter(inputLetter, column) {
        var alphabet = "abcdefghijklmnopqrstuvwxyz"
        var letterinput = inputLetter
        var letternumber = alphabet.indexOf(letterinput, 1)
        var letterproccess = letternumber+column
        var newLetterProcess = letterproccess % 26
        var outputLetter = alphabet.substr(newLetterProcess, 1)
        return outputLetter
    }

}

module.exports.vigenere = vigenere

/*let cipher = new vigenere()
let encoded = cipher.encode('hello')
console.log(encoded)*/

/*

class Dog {

    constructor(name, type, age) {
        this.name = name
        this.type = type
        this.age = age
    }

    birthday() {
        this.age += 1
    }

    info() {
        return `${this.name} is ${this.age} years old and of type ${this.type}!`
    }

}

let banjo = new Dog('Banjo', 'kelpie', 2)
let ross = new Dog('Ross', 'chihuahua', 6)

console.log(banjo.info())
console.log(ross.info())
banjo.birthday()
ross.birthday()
console.log(banjo.info())
console.log(ross.info())

*/
