const dateText = document.getElementById("dateText");
const timeText = document.getElementById("timeText");
const formatText = document.getElementById("formatText");
const toggleFormatBtn = document.getElementById("toggleFormatBtn");

let is24HourFormat = true;

toggleFormatBtn.addEventListener("click", toggleFormat);

function updateClock() {
    const now = new Date();

    updateDate(now);
    updateTime(now);
}

function updateDate(date) {
    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    dateText.textContent = date.toLocaleDateString("es-MX", dateOptions);
}

function updateTime(date) {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    let period = "";

    if (!is24HourFormat) {
        period = hours >= 12 ? " PM" : " AM";
        hours = hours % 12 || 12;
    }

    const formattedHours = formatNumber(hours);
    const formattedMinutes = formatNumber(minutes);
    const formattedSeconds = formatNumber(seconds);

    timeText.textContent =
        `${formattedHours}:${formattedMinutes}:${formattedSeconds}${period}`;
}

function formatNumber(number) {
    return number.toString().padStart(2, "0");
}

function toggleFormat() {
    is24HourFormat = !is24HourFormat;

    if (is24HourFormat) {
        formatText.textContent = "Formato 24 horas";
        toggleFormatBtn.textContent = "Cambiar a formato 12h";
    } else {
        formatText.textContent = "Formato 12 horas";
        toggleFormatBtn.textContent = "Cambiar a formato 24h";
    }

    updateClock();
}

updateClock();
setInterval(updateClock, 1000);