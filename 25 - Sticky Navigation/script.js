const nav = document.querySelector(".nav");

window.addEventListener("scroll", fixNav);

function fixNav() {
  console.log(window.scrollY, nav.offsetHeight);
}
