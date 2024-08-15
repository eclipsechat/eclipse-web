const currentYearElem = document.getElementsByClassName('current-year')[0];

// Get current year

let currentYear = new Date().getFullYear();

// Update the current year element

currentYearElem.textContent = currentYear;