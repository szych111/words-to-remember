
class Word {
    constructor(german, english, examples) {
        this.german = german;
        this.english = english;
        this.examples = [examples];
        this.repeated = 0;
    }

    get german() {
        return this.german;
    }

    get english() {
        return this.english
    }

    get examples() {
        return this.examples
    }

    get example2() {
        return this.example2
    }

    incrementRepeated() {
        return this.repeated++
    }
}
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


addButton.addEventListener('click', () => {
    console.log('klik');
    let testPar = document.getElementById('test-par')
    testPar.textContent = 'hello'
    console.log(testPar.textContent)
})
