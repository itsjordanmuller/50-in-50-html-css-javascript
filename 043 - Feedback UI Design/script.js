const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

panel.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    e.target.parentNode.classList.add("active");
  }
});
