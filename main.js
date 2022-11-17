
//Transforms menu icon to X when clicked

// Sets variable for menu icon
const navMenu = document.getElementsByClassName("nav-menu");

// Sets variables to show/hide menu div
const overlayMenu = document.querySelector(".mobile-overlay");

//navMenu.addEventListener("click", hamburgerMenu);

function hamburgerMenu (x) {
    x.classList.toggle("change");
}

function toggleOverlay () {
    if (overlayMenu.style.display !== "block") {
        overlayMenu.style.display = "block";
        } else {
            overlayMenu.style.display = "none";
        }
}

/*
function toggleMenu (e) {
    const y = document.getElementById("mobile-overlay");
    if (y.style.display === "none") {
        y.style.display = "block";
      } else {
        y.style.display = "none";
      }
}*/

