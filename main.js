
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

// add-new form
let addButton = document.getElementById('add-new-word-btn');

addButton.addEventListener('click', event => {
    event.preventDefault()
    let newDeWord = document.getElementById('new-de-word').value
    let newEnWord = document.getElementById('new-en-word').value
    let newExamples = document.getElementById('examples').value
    let deWordPar = document.getElementById('de-word-par')
    let enWordPar = document.getElementById('en-word-par')
    let newExamplesPar = document.getElementById('examples-par')
    console.log('klik');
    new Word (newDeWord, newEnWord, newExamples)
    deWordPar.innerText = newDeWord
    enWordPar.innerText = newEnWord
    newExamplesPar.innerText = newExamples
})


// learn form
let checkButton = document.getElementById('check-btn');
let deWord = document.getElementById('de-word').value
let enWord = document.getElementById('en-word').value
let testPar = document.getElementById('test-par')
let examplesPar = document.getElementById('examples-paragraph')



