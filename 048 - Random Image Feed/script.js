const container = document.querySelector(".container");

const unsplashURL = "https://source.unsplash.com/random/";

const rows = 10;

for (let i = 0; i < row * 3; i++) {
  const img = document.createElement("img");
  img.src = `${unsplashURL}`;
}
