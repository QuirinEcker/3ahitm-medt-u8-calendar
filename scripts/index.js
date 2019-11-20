import {Calendar} from "./Calendar.js"

let calendar = new Calendar();

window.addEventListener('load', () => {
    let currentMonth = new Date().getMonth() + 1;
    const backButton = document.querySelector("#back");
    const forwardButton = document.querySelector("#forward");
    calendar.buildMonth(new Date().getFullYear(), currentMonth);

    backButton.addEventListener('click',() => {
        if (currentMonth === 1) {
            currentMonth = 11;
        } else {
            currentMonth--;
        }

        console.log(currentMonth);

        calendar.buildMonth(new Date().getFullYear(), currentMonth);
    });

    forwardButton.addEventListener('click',() => {
        if (currentMonth === 12) {
            currentMonth = 1;
        } else {
            currentMonth++;
        }

        console.log(currentMonth);

        calendar.buildMonth(new Date().getFullYear(), currentMonth);
    });
});