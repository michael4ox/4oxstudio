// Header NavBar
let navbar = document.querySelector(".header .navbar");
let navbtn = document.querySelector(".menu-btn");

document.querySelector(".menu-btn").onclick = () => {
  navbar.classList.toggle("show");
  navbtn.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("show");
};
// Blog Page

// My own attempt to filter

function showAll() {
  for (let element of document.getElementsByClassName("media")) {
    element.style.display = "block";
  }
  for (let element of document.getElementsByClassName("sport")) {
    element.style.display = "block";
  }
  for (let element of document.getElementsByClassName("tech")) {
    element.style.display = "block";
  }

  for (let element of document.getElementsByClassName("filter-media")) {
    element.classList.remove("active-filter");
  }
  for (let element of document.getElementsByClassName("filter-all")) {
    element.classList.add("active-filter");
  }
  for (let element of document.getElementsByClassName("filter-sport")) {
    element.classList.remove("active-filter");
  }
  for (let element of document.getElementsByClassName("filter-tech")) {
    element.classList.remove("active-filter");
  }
}

// Showing only Media

function showMedia() {
  for (let element of document.getElementsByClassName("media")) {
    element.style.display = "block";
  }
  for (let element of document.getElementsByClassName("sport")) {
    element.style.display = "none";
  }
  for (let element of document.getElementsByClassName("tech")) {
    element.style.display = "none";
  }

  for (let element of document.getElementsByClassName("filter-media")) {
    element.classList.add("active-filter");
  }
  for (let element of document.getElementsByClassName("filter-all")) {
    element.classList.remove("active-filter");
  }
  for (let element of document.getElementsByClassName("filter-sport")) {
    element.classList.remove("active-filter");
  }
  for (let element of document.getElementsByClassName("filter-tech")) {
    element.classList.remove("active-filter");
  }
}

// Showing Only Sports
function showSport() {
  for (let element of document.getElementsByClassName("sport")) {
    element.style.display = "block";
  }
  for (let element of document.getElementsByClassName("media")) {
    element.style.display = "none";
  }
  for (let element of document.getElementsByClassName("tech")) {
    element.style.display = "none";
  }

  for (let element of document.getElementsByClassName("filter-media")) {
    element.classList.remove("active-filter");
  }
  for (let element of document.getElementsByClassName("filter-all")) {
    element.classList.remove("active-filter");
  }
  for (let element of document.getElementsByClassName("filter-sport")) {
    element.classList.add("active-filter");
  }
  for (let element of document.getElementsByClassName("filter-tech")) {
    element.classList.remove("active-filter");
  }
}

// Showing Only Tech
function showTech() {
  for (let element of document.getElementsByClassName("sport")) {
    element.style.display = "none";
  }
  for (let element of document.getElementsByClassName("media")) {
    element.style.display = "none";
  }
  for (let element of document.getElementsByClassName("tech")) {
    element.style.display = "block";
  }

  for (let element of document.getElementsByClassName("filter-media")) {
    element.classList.remove("active-filter");
  }
  for (let element of document.getElementsByClassName("filter-all")) {
    element.classList.remove("active-filter");
  }
  for (let element of document.getElementsByClassName("filter-sport")) {
    element.classList.remove("active-filter");
  }
  for (let element of document.getElementsByClassName("filter-tech")) {
    element.classList.add("active-filter");
  }
}

// Header Background Change on Scroll

function scrollFunc() {
  for (let element of document.getElementsByClassName("bheader")) {
    element.classList.toggle("shadow", window.scrollY > 0);
  }
}
