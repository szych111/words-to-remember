
class Word {
    constructor(german, english, examples) {
        this._german = german;
        this._english = english;
        this._examples = examples;
        this._index = 0;
        this._repeated = 0;
    }

    set german(newGermanWord) {
        this._german = newGermanWord;
    }

    get german() {
        return this._german;
    }

    set english(newEnglishWord) {
        this._english = english;
    }

    get english() {
        return this._english
    }

    set examples(newExamples) {
        this._examples = newExamples;
    }

    get examples() {
        return this._examples
    }

    incrementRepeated() {
        return this.repeated++
    }
}

const gut = new Word ('gut', 'good')
const aufgeben = new Word ('aufgeben', 'give up')
const trostpreis = new Word ('der Trostpreis', 'consolation prize')
const gemeinsam = new Word ('together, jointly', 'together', 'der Grundstück gehörte ihnen gemeinsam')
const akne = new Word ('die Akne', 'acne', 'mit Knötchen- und Pustelbildung einhergehende Entzündung der Talgdrüsen')

console.log(gemeinsam.examples)

console.log(trostpreis.english)

console.log(gut.german)

// add new form
let addButton = document.getElementById('add-new-word-btn');
console.log(addButton)
let newDeWord = document.getElementById('new-de-word').value
console.log(newDeWord)
let newEnWord = document.getElementById('new-en-word').value
console.log(newEnWord)
let newExamples = document.getElementById('examples').value
console.log(newExamples)

// learn form
let checkButton = document.getElementById('check-btn');
console.log(checkButton)
let deWord = document.getElementById('de-word').value
console.log(deWord)
let enWord = document.getElementById('en-word').value
console.log(enWord)
let testPar = document.getElementById('test-par')
console.log(testPar)
let examplesPar = document.getElementById('examples-paragraph')
console.log(examplesPar)


addButton.addEventListener('click', event => {
    event.preventDefault()
    console.log('klik');
    let newWordToRemember = new Word (newDeWord, newEnWord, newExamples)
})


