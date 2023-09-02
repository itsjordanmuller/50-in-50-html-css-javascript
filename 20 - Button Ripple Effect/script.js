const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // console.log(x, y);

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    // console.log(buttonTop, buttonLeft);

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    console.log(xInside, yInside);
  });
});
