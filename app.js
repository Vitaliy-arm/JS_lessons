const secretNum = Math.round(Math.random() * 10);
let tries = 0;

function guessNum(num) {
    if (tries < 5) {
        if (num === secretNum) {
            alert('Поздравляем вы угадали число.');
            console.log(tries);
        } else {
            tries++;
            console.log(tries);
            alert("К сожалению вы не угадали число. У вас осталось " + (5-tries) + " попыток.");
        }
    } else {
        alert("К сожалению вы исчерпали свои попытки");
    }
   
}