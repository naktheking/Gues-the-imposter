const title = document.getElementById('title');
const buttons = document.querySelectorAll('button');
const word = document.getElementById('word');
const continueButton = document.getElementById('continue');

let playerCount = 0;
let currentWord = '';
let words = ['word1', 'word2', 'word3', 'word4', 'word5']; // Add more words to this list
let currentPlayer = 0;
let playersWithWords = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playerCount = parseInt(button.id);
        title.textContent = '';
        buttons.forEach(button => button.style.display = 'none');
        showWord();
    });
});

continueButton.addEventListener('click', () => {
    currentPlayer++;
    if (currentPlayer < playerCount) {
        showWord();
    } else {
        playersWithWords++;
        if (playersWithWords < playerCount) {
            currentPlayer = 0;
            showWord();
        } else {
            resetGame();
        }
    }
});

function showWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    word.textContent = currentWord;
    continueButton.style.display = 'block';
}

function resetGame() {
    title.textContent = 'Imposter Game';
    buttons.forEach(button => button.style.display = 'block');
    word.textContent = '';
    continueButton.style.display = 'none';
    currentPlayer = 0;
    playersWithWords = 0;
}