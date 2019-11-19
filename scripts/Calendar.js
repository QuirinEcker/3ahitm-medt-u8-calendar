class Calendar {
    buildMonth(year, month) {
        const monthBox = document.querySelector("#month");
        let date = new Date(year, month, 0);

        for (let i = 1; i <= date.getDate(); i++) {
            let element = document.createElement('div');
            element.textContent = i.toString();
            monthBox.appendChild(element);
        }
    }
}

export {Calendar}