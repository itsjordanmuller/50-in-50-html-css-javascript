const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;

loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
    // console.log(clickTime);
  } else {
    if (new Date().getTime() - clickTime < 800) {
      console.log(123);
    } else {
      clickTime = new Date().getTime();
    }
  }
});

// loveMe.addEventListener("dblclick", (e) => {
//   console.log(123);
// });
