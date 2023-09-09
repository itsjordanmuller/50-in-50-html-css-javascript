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
  const notification = document.createElement("div");
  notification.classList.add("toast");

  notification.innerText = getRandomMessage();

  toasts.appendChild(notification);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
