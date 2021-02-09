const fieldHour = document.querySelector(".hours");
const fieldMin = document.querySelector(".mins");
const fieldSec = document.querySelector(".secs");

function displayTime(hour, min, sec) {
    fieldHour.innerText = `${hour < 10 ? `0${hour}` : `${hour}`}`;
    fieldMin.innerText = `${min < 10 ? `0${min}` : `${min}`}`;
    fieldSec.innerText = `${sec < 10 ? `0${sec}` : `${sec}`}`;
}

function getTime() {
    const now = new Date();
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    displayTime(hour, min, sec);
}

function main() {
    setInterval(getTime, 1000);
}

main();
