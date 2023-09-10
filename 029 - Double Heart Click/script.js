const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;

loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
    // console.log(clickTime);
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  const offsetLeft = e.target.offsetLeft;
  const offsetTop = e.target.offsetTop;

  const xInside = x - offsetLeft;
  const yInside = y - offsetTop;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);
  //   console.log(xInside, yInside);
};

// loveMe.addEventListener("dblclick", (e) => {
//   console.log(123);
// });
