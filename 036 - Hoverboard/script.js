const container = document.getElementById("container");

const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];

const SQUARES = 500;

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
