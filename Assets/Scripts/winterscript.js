const words = ["mizu", "ocha", "gohan", "nihon", "sushi"];
const word = words[Math.floor(Math.random() * words.length)];
let guessedWord = '_'.repeat(word.length).split('');
let guessesLeft = 6;

document.getElementById('word-to-guess').innerText = guessedWord.join(' ');

function guessLetter() {
    const letter = document.getElementById('letter').value.toLowerCase();
    const result = document.getElementById('result');
    if (letter) {
        let correctGuess = false;
        for (let i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                guessedWord[i] = letter;
                correctGuess = true;
            }
        }
        if (!correctGuess) {
            guessesLeft--;
        }
        document.getElementById('word-to-guess').innerText = guessedWord.join(' ');
        document.getElementById('guesses-left').innerText = guessesLeft;
        if (guessedWord.join('') === word) {
            result.innerText = "You win!";
        } else if (guessesLeft === 0) {
            result.innerText = `Game over! The word was ${word}.`;
        }
    }
    document.getElementById('letter').value = '';
}