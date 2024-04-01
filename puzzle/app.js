const riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это съедобное', 'это фрукт'],
    tries: 3,
    checkAnswer(str) {
        if (this.tries < 1) {
            return alert('Игра окончена!')
        }
        if (str.toLowerCase().includes(this.correctAnswer)){
            alert('Правильный ответ');
            console.log('Правильный ответ');
        } else {
            alert('Неправильный ответ');
            console.log('Неправильный ответ');
            this.tries--;

            const hint = this.hints[this.tries === 2 ? 0 : 1];
            if(this.tries){
                alert('Подсказка: ' + hint);
               
            } else {
                alert('Игра окончена!');
            }

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