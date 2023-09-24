const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("rating")) {
    removeActive();
    target.classList.add("active");
    selectedRating = target.querySelector("small").innerHTML;
  } else if (target.parentNode.classList.contains("rating")) {
    removeActive();
    target.parentNode.classList.add("active");
    selectedRating = target.nextElementSibling
      ? target.nextElementSibling.innerHTML
      : target.previousElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click", (e) => {
  panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support!</p>
    `;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
