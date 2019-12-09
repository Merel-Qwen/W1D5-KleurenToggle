// en dicht klappen menu
let toggleNavStatus = false;

let toggleNav = function() {
  let getSiteBar = document.querySelector(".nav-sidebar");

  if (toggleNavStatus === false) {
    getSiteBar.style.visibility = "visible";
    getSiteBar.style.width = "272px";
    toggleNavStatus = true;
  } else {
    getSiteBar.style.width = "50px";
    getSiteBar.style.visibility = "hidden";

    toggleNavStatus = false;
  }
};

// onderstaand is om de achtergrondkleur te veranderen

const colorHome = function() {
  const bodyElement = document.body;
  bodyElement.classList.add("Home");

  let getSiteBar = document.querySelector(".nav-sidebar");

  if (toggleNavStatus === false) {
    getSiteBar.style.visibility = "visible";
    getSiteBar.style.width = "272px";
    toggleNavStatus = true;
  } else {
    getSiteBar.style.width = "50px";
    getSiteBar.style.visibility = "hidden";

    toggleNavStatus = false;
  }
};

const colorRed = function() {
  const bodyElement = document.body;
  bodyElement.classList.add("Red");

  let getSiteBar = document.querySelector(".nav-sidebar");

  if (toggleNavStatus === false) {
    getSiteBar.style.visibility = "visible";
    getSiteBar.style.width = "272px";
    toggleNavStatus = true;
  } else {
    getSiteBar.style.width = "50px";
    getSiteBar.style.visibility = "hidden";

    toggleNavStatus = false;
  }
};
const colorOrange = function() {
  const bodyElement = document.body;
  bodyElement.classList.add("Orange");
  let getSiteBar = document.querySelector(".nav-sidebar");

  if (toggleNavStatus === false) {
    getSiteBar.style.visibility = "visible";
    getSiteBar.style.width = "272px";
    toggleNavStatus = true;
  } else {
    getSiteBar.style.width = "50px";
    getSiteBar.style.visibility = "hidden";

    toggleNavStatus = false;
  }
};
const colorPurple = function() {
  const bodyElement = document.body;
  bodyElement.classList.add("Purple");
  let getSiteBar = document.querySelector(".nav-sidebar");

  if (toggleNavStatus === false) {
    getSiteBar.style.visibility = "visible";
    getSiteBar.style.width = "272px";
    toggleNavStatus = true;
  } else {
    getSiteBar.style.width = "50px";
    getSiteBar.style.visibility = "hidden";

    toggleNavStatus = false;
  }
};
const colorGreen = function() {
  const bodyElement = document.body;
  bodyElement.classList.add("Green");
  let getSiteBar = document.querySelector(".nav-sidebar");

  if (toggleNavStatus === false) {
    getSiteBar.style.visibility = "visible";
    getSiteBar.style.width = "272px";
    toggleNavStatus = true;
  } else {
    getSiteBar.style.width = "50px";
    getSiteBar.style.visibility = "hidden";

    toggleNavStatus = false;
  }
};

//onderstaand blijft onderaan.
// document.addEventListener("DOMContentLoaded", event => {
//   toggleNav();
