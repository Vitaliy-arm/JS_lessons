const riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это съдобное', 'это фрукт'],
    tries: 3,
    checkAnswer() {}
}

window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question;
}

function chek() {
    const input = document.getElementsByTagName('input')[0];

    const guessedAnswer = input.value;

    if (guessedAnswer) {
        // вызвать метод checkAnswer() {}
    }
}