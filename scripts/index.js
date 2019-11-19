import {Calendar} from "./Calendar.js"

let calendar = new Calendar();

window.addEventListener('load', () => {
    calendar.buildMonth(2005, 5);
});