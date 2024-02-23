function createTable() {
const table = document.getElementById("timetable");

// Define start and end times
const startHour = 7;
const endHour = 22;

for (let i = startHour; i <= endHour; i++) {
    const row = table.insertRow();
    for (let j = 0; j < 8; j++) {
    const cell = row.insertCell();
    if (j === 0) {
        cell.textContent = `${i < 10 ? '0' : ''}${i}:00`;
    } else {
        cell.addEventListener("click", function() {
        showMenu(this);
        });
    }
    }
}
}

function showMenu(cell) {
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
menu.style.display = "block";
overlay.style.display = "block";
menu.style.top = cell.offsetTop + cell.offsetHeight + "px";
menu.style.left = cell.offsetLeft + "px";
menu.dataset.rowIndex = cell.parentElement.rowIndex;
menu.dataset.cellIndex = cell.cellIndex;
}

function selectOption(option) {
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const table = document.getElementById("timetable");
const rowIndex = parseInt(menu.dataset.rowIndex);
const cellIndex = parseInt(menu.dataset.cellIndex);
const cell = table.rows[rowIndex].cells[cellIndex];
cell.textContent = option;
menu.style.display = "none";
overlay.style.display = "none";
}

function clearOption() {
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
menu.style.display = "none";
overlay.style.display = "none";
}

// Call createTable function when the page loads
createTable();