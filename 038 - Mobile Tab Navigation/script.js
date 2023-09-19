const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

function hideAllContents() {
  contents.forEach((content) => content.classList.remove("show"));
}

function hideAllItems() {
  listItems.forEach((item) => item.classList.remove("active"));
}
