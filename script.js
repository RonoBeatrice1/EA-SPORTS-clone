// Select the hamburger menu button and the mobile navigation menu
let menubtnE1 = document.querySelector(".humbugger-menu");
let mobileNavEl = document.querySelector(".mobile-nav");

// Add a click event listener to the hamburger menu button
menubtnE1.addEventListener("click", () => {
  // Check if the mobile navigation menu is hidden or has no display property
  if (mobileNavEl.style.display == "none" || !mobileNavEl.style.display) {
    // If hidden or no display property, show the mobile navigation menu
    mobileNavEl.style.display = "block";
  } else {
    // If visible, hide the mobile navigation menu
    mobileNavEl.style.display = "none";
  }
});

// Add a click event listener to the close button in the mobile navigation menus
document.querySelector(".closebtn").addEventListener("click", () => {
  // Hide the mobile navigation menu when the close button is clicked
  mobileNavEl.style.display = "none";
});

// stop an event from getting en element's children
// Add a click event listener to the mobile navigation menu itself to hide it when clicked
document.querySelector(".mobile-nav").addEventListener("click", (event) => {
  // Hide the mobile navigation menu when any part of it is clicked
  mobileNavEl.style.display = "none";
});
