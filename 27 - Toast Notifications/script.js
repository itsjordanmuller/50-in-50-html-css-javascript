const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

button.addEventListener("click", () => createNotification());

function createNotification() {
  const notif = document.createElement("div");
  notif.classList.add("toast");

  notif.innerText = getRandomMessage();
}
