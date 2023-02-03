
//Transforms menu icon to X when clicked

// Sets variable for menu icon
const navMenu = document.getElementById("nav-menu");

// Sets variables to show/hide menu div
const overlayMenu = document.querySelector(".mobile-overlay");

//navMenu.addEventListener("click", hamburgerMenu);
/*
const hamburgerMenu = (e) => {
    e.classList.toggle("change");
    toggleOverlay();
}*/

function toggleOverlay () {
    if (overlayMenu.style.display !== "block") {
        overlayMenu.style.display = "block";
        } else {
            overlayMenu.style.display = "none";
        }
}

document.getElementById("nav-menu").addEventListener("click", function(){
    navMenu.classList.toggle("change");
    toggleOverlay();
});

/*
function toggleMenu (e) {
    const y = document.getElementById("mobile-overlay");
    if (y.style.display === "none") {
        y.style.display = "block";
      } else {
        y.style.display = "none";
      }
}*/

