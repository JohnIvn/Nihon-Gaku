const words = ["doko", "hai", "iie", "kore", "mizu"];
const word = words[Math.floor(Math.random() * words.length)];
const scrambledWord = word.split('').sort(() => Math.random() - 0.5).join('');
document.getElementById('scrambled-word').innerText = scrambledWord;

function checkGuess() {
    const guess = document.getElementById('guess').value.toLowerCase();
    const result = document.getElementById('result');
    if (guess === word) {
        result.innerText = "Correct!";
    } else {
        result.innerText = "Try again!";
    }
}