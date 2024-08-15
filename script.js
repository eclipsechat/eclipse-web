const currentYearElem = document.getElementsByClassName('current-year')[0];

// Get current year

let currentYear = new Date().getFullYear();

// Update the current year element

currentYearElem.textContent = currentYear;

// get all a links
const as = document.querySelectorAll('a');

// add click event listener to each a link

as.forEach(a => {
  a.addEventListener('click', function (e) {
    e.preventDefault(); // prevent the default link behavior

    if (!a.getAttribute('href').startsWith('#')) return; // skip if the link does not lead to a section

    // get target element
    const targetId = a.getAttribute('href').slice(1);
    const targetElem = document.getElementById(targetId);

    // get the position of the target element
    const targetPosition = targetElem.getBoundingClientRect().top;

    // smooth scroll to the target element
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});