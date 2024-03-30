const riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это съдобное', 'это фрукт'],
    tries: 3,
    checkAnswer(str) {
        if (str.toLowerCase().includes(this.correctAnswer)){
            alert('Правильный ответ');
            console.log('Правильный ответ');
        } else {
            alert('Неправильный ответ');
            console.log('Неправильный ответ');
        }

    }
}

window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question;
}

function check() {
    const input = document.getElementsByTagName('input')[0];

    const guessedAnswer = input.value;
    console.log(guessedAnswer);

    if (guessedAnswer) {
        // вызвать метод checkAnswer() {}
        riddle.checkAnswer(guessedAnswer);
    }
}