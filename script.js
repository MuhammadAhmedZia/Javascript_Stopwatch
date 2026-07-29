let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let display = document.querySelector('.timer-display');

let interger = null;

document.querySelector('#start-timer').addEventListener('click', () => {
    if (interger !== null) {
        clearInterval(interger);
    }
    interger = setInterval(displayFunc, 10);
});

document.querySelector('#pause-timer').addEventListener("click", () => {
    clearInterval(interger);
});

document.querySelector('#reset-timer').addEventListener("click", () => {
    clearInterval(interger);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    display.innerHTML = '00 : 00 : 00 : 000';
});

function displayFunc() {

    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms =
        milliseconds < 10 
    ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    display.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}