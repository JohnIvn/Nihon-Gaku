const words = ["doko", "iie", "hai"];
const foundWords = [];

function checkWord(word) {
    if (words.includes(word) && !foundWords.includes(word)) {
        foundWords.push(word);
        document.getElementById('result').innerText = `Found: ${foundWords.join(', ')}`;
        if (foundWords.length === words.length) {
            document.getElementById('result').innerText += " - You found all words!";
        }
    }
}

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', () => {
        const word = prompt("Enter the word you found:");
        checkWord(word.toLowerCase());
    });
});