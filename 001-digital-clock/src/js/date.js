const dateFiled = document.querySelector(".date");

function displayDate(text) {
    dateFiled.innerText = text;
}

function makeString(year, month, date, day) {
    const dayText = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return `${year}. ${month < 10 ? `0${month}` : `${month}`}. ${
        date < 10 ? `0${date}` : `${date}`
    }. ${dayText[day]}`;
}

function getDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = today.getDay();

    const string = makeString(year, month, date, day);
    displayDate(string);
}

function main() {
    getDate();
}

main();
