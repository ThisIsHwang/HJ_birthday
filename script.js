var secretNumber = Math.floor(Math.random() * 10) + 1;
var secretCode = "[Your Secret Code]";
var hiddenMessage = "[Your Hidden Message]";

function guessNumber() {
    var guess = document.getElementById('guess').value;
    var result = document.getElementById('gameResult');
    if (guess == secretNumber) {
        result.textContent = "Congratulations! You've guessed the number!";
    } else {
        result.textContent = "Oops! Try again!";
    }
}

function revealMessage() {
    var code = document.getElementById('code').value;
    var message = document.getElementById('revealedMessage');
    if (code == secretCode) {
        message.textContent = hiddenMessage;
    } else {
        message.textContent = "Incorrect code. Try again!";
    }
}
