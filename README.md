# 50 Projects in 50 Days - HTML, CSS & JavaScript Sandbox

Self-Paced Learning Sandbox for HTML, CSS & JavaScript

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

## Project Setup

### [Project Starter Template/Boilerplate](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/000-Project-Starter-Template)

---

#### [HTML5 Boilerplate - HTML5 (HyperText Markup Language 5)](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/000-Project-Starter-Template/index.html)

![HTML5 Boilerplate](https://img.shields.io/badge/HTML5_-_Project%20Boilerplate%20Code-595959.svg?style=for-the-badge&logo=HTML5&logoColor=white&labelColor=E34F26)

|[index.html](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/000-Project-Starter-Template/index.html)|
|---|

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    /> -->
    <link rel="stylesheet" href="style.css" />
    <title>Project Template</title>
  </head>
  <body>
    <h1>Project Template</h1>
    <script src="script.js"></script>
  </body>
</html>
```

---

#### [CSS Boilerplate - CSS3 (Cascading Style Sheets Level 3)](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/000-Project-Starter-Template/style.css)

![CSS3 Boilerplate](https://img.shields.io/badge/CSS3-Project%20Boilerplate%20Code-595959.svg?style=for-the-badge&logo=CSS3&logoColor=white&labelColor=1572B6)

|[style.css](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/000-Project-Starter-Template/style.css)|
|---|

```css
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}
```

---

#### [JavaScript Boilerplate - JS ES6+ (ECMAScript 2015 Onwards)](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/000-Project-Starter-Template/script.js)

![JavaScript Boilerplate](https://img.shields.io/badge/JavaScript-Project%20Boilerplate%20Code-595959.svg?style=for-the-badge&logo=JavaScript&logoColor=black&labelColor=F7DF1E)

|[script.js](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/000-Project-Starter-Template/script.js)|
|---|
```js
// Empty
```

---

## Day 1

### [1. Expanding Cards](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/001-Expanding-Cards)

![Expanding Cards - Image 1](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/001-Expanding-Cards/001-expanding-cards-1.png)

![Expanding Cards - Image 2](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/001-Expanding-Cards/001-expanding-cards-2.png)

![Expanding Cards - Image 3](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/001-Expanding-Cards/001-expanding-cards-3.png)

![Expanding Cards - Image 4](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/001-Expanding-Cards/001-expanding-cards-4.png)

<details>
<summary>View HTML Code - index.html - 1 - Expanding Cards</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Expanding Cards</title>
  </head>
  <body>
    <div class="container">
      <div
        class="panel active"
        style="
          background-image: url('https://images.unsplash.com/photo-1468876132872-ad7696f484e0?q=80&w=1350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        "
      >
        <h3>Forest Peaks</h3>
        <!-- Photo Credit: Luca Bravo - @lucabravo -->
        <!-- https://unsplash.com/photos/aerial-view-photography-of-rock-mountain-under-blue-skyt-Z87YuMKEiWk -->
      </div>
      <div
        class="panel"
        style="
          background-image: url('https://images.unsplash.com/photo-1484352491158-830ef5692bb3?q=80&w=1350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        "
      >
        <h3>Desert Canyon</h3>
        <!-- Photo Credit: Christopher Burns - @christopher__burns -->
        <!-- https://unsplash.com/photos/antelope-canyon-C1J_eSGNPt0 -->
      </div>
      <div
        class="panel"
        style="
          background-image: url('https://images.unsplash.com/photo-1535620388081-ec83d54079d5?q=80&w=1350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        "
      >
        <h3>Coastal Walkway</h3>
        <!-- Photo Credit: Lorenzo Rezende - @lorenzorzd -->
        <!-- https://unsplash.com/photos/pathway-between-grasses-40oTC_Xbf3U -->
      </div>
      <div
        class="panel"
        style="
          background-image: url('https://images.unsplash.com/photo-1620026040575-cc85f1299c29?q=80&w=1350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        "
      >
        <h3>Snowy Tundra</h3>
        <!-- Photo Credit: Bibhash (Polygon.Cafe) Banerjee - @perventuator -->
        <!-- https://unsplash.com/photos/snow-covered-mountain-near-river-during-daytime-IOdD3s032QY -->
      </div>
      <div
        class="panel"
        style="
          background-image: url('https://images.unsplash.com/photo-1544453850-ea0e8a9f2b68?q=80&w=1350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        "
      >
        <h3>Flower Meadows</h3>
        <!-- Photo Credit: Courtney Kenady - @ckenady -->
        <!-- https://unsplash.com/photos/orange-and-blue-flower-field-during-daytime-h5ZPU1hU5CM -->
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View CSS Code - style.css - 1 - Expanding Cards</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url("https://fonts.googleapis.com/css2?family=Muli&display=swap");

* {
  box-sizing: border-box;
}

body {
  font-family: "Muli", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  background-color: #f8f8f2;
}

.container {
  display: flex;
  width: 90vw;
}

.panel {
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 50px;
  color: #f8f8f2;
  cursor: pointer;
  flex: 1;
  margin: 10px;
  position: relative;
  -webkit-transition: all 700ms ease-in;
  transition: all 700ms ease-in;
  filter: blur(1px);
}

.panel h3 {
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  margin: 0;
  opacity: 0;
}

.panel.active {
  flex: 6;
  filter: blur(0px);
}

.panel.active h3 {
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    height: 90svh;
  }

  .panel {
    background-size: 100% 100%;
    flex: 1.25;
  }
}
```
</details>

<details>
<summary>View JS Code - script.js - 1 - Expanding Cards</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
```
</details>

## Day 2

### [2. Progress Steps](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/002-Progress-Steps)

![Progress Steps - Image 1](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/002-Progress-Steps/002-progress-steps-1.png)

![Progress Steps - Image 2](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/002-Progress-Steps/002-progress-steps-2.png)

![Progress Steps - Image 3](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/002-Progress-Steps/002-progress-steps-3.png)

![Progress Steps - Image 4](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/002-Progress-Steps/002-progress-steps-4.png)

<details>
<summary>View HTML Code - index.html - 2 - Progress Steps</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Progress Steps</title>
  </head>
  <body>
    <div class="card">
      <div class="container">
        <div class="progress-container">
          <div class="progress" id="progress"></div>
          <div class="circle active">1</div>
          <div class="circle">2</div>
          <div class="circle">3</div>
          <div class="circle">4</div>
        </div>
        <button class="btn" id="prev" disabled>Prev</button>
        <button class="btn" id="next">Next</button>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View CSS Code - style.css - 2 - Progress Steps</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url("https://fonts.googleapis.com/css2?family=Muli&display=swap");

:root {
  --line-border-fill: #b33771;
  --line-border-empty: #e0e0e0;
}

* {
  box-sizing: border-box;
}

body {
  background-color: #282a36;
  font-family: "Muli", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.card {
  background-color: #f6f7fb;
  padding: 30px;
  border-radius: 15px;
}

.container {
  text-align: center;
}

.progress-container {
  z-index: 1;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width: 350px;
}

.progress-container::before {
  content: "";
  background-color: var(--line-border-empty);
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 100%;
  z-index: -1;
}

.progress {
  background-color: var(--line-border-fill);
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 0%;
  z-index: -1;
  transition: 0.4s ease;
}

.circle {
  background-color: #fff;
  color: #999;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid var(--line-border-empty);
  transition: 0.4s ease;
  font-size: 18px;
}

.circle.active {
  border-color: var(--line-border-fill);
  font-weight: bold;
}

.btn {
  background-color: var(--line-border-fill);
  color: #fff;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  padding: 10px 30px;
  margin: 5px;
  font-size: 16px;
  font-weight: bold;
}

.btn:hover {
  background-color: #6d214f;
}

.btn:active {
  transform: scale(0.95);
}

.btn:focus {
  outline: 0;
}

.btn:disabled {
  background-color: var(--line-border-empty);
  cursor: not-allowed;
}
```
</details>

<details>
<summary>View JS Code - script.js - 2 - Progress Steps</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
```
</details>

## Day 3

### [3. Rotating Navigation](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/003-Rotating-Navigation)

![Rotating Navigation - Image 1](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/003-Rotating-Navigation/003-rotating-navigation-1.png)

![Rotating Navigation - Image 2](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/003-Rotating-Navigation/003-rotating-navigation-2.png)

![Rotating Navigation - Image 3](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/003-Rotating-Navigation/003-rotating-navigation-3.png)

![Rotating Navigation - Image 4](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/003-Rotating-Navigation/003-rotating-navigation-4.png)

<details>
<summary>View HTML Code - index.html - 3 - Rotating Navigation</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Rotating Navigation</title>
  </head>
  <body>
    <div class="container">
      <div class="circle-container">
        <div class="circle">
          <button id="close">
            <i class="fas fa-times"></i>
          </button>
          <button id="open">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
      <div class="content">
        <h1>Spices: A Symphony of Flavors for the Culinary Orchestra</h1>
        <small>Jordan Muller</small>
        <p>
          Spices are the essence of culinary art, the alchemy that transforms
          the ordinary into the extraordinary. They are the silent symphony
          orchestrating a myriad of flavors in our favorite dishes. Each spice
          carries with it a history, a tradition, and a unique flavor profile
          that can elevate the taste of food from mundane to sublime.
        </p>
        <p>
          The fiery heat of red chili powder, for instance, can ignite a dish
          with warmth and depth. Used judiciously, it imbues curries, stews, and
          sauces with a kick that excites the palate. On the other hand, the
          bright, citrusy notes of coriander powder add a refreshing zing to
          marinades and spice rubs, making it a favorite in Mexican and Indian
          cuisines.
        </p>
        <h3>Spices</h3>
        <img
          src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="A variety of spices held in a row of neatly arranged small metal spoons"
        />
        <p>
          The black sesame seeds, tiny but mighty, contribute a nutty flavor and
          a crunch that is as delightful on the palate as it is visually on a
          plate. Their simplicity contrasts with the bay leaf, whose presence is
          not to be underestimated. This herb infuses dishes with a floral and
          slightly minty essence, a nod to its Mediterranean roots.
        </p>
        <p>
          Sprinkled across the marble canvas are flakes of sea salt—nature's
          seasoning—ready to heighten the flavors of their fellow spices. Next
          to it, the cumin seeds wait patiently, ready to impart an earthy
          warmth and a hint of citrus to any dish that calls for it.
        </p>
        <p>
          The coriander, with its lemony zest, sits proudly next to the cumin.
          Together, they are often the dynamic duo in many spice mixes, bringing
          freshness and warmth in equal measure.
        </p>
        <p>
          Last but not least, there's the red pepper flakes, offering a sharp
          spike of heat that can awaken any dish, accompanied by the fresh green
          of cilantro leaves that are as aromatic as they are decorative.
        </p>
        <p>
          These spices, in their own right, can transform the mundane to the
          extraordinary. They are the unsung heroes behind countless recipes,
          each bringing its own unique melody to the feast of flavors that we
          celebrate in our dishes every day.
        </p>
        <p>
          As we explore the world through our taste buds, let's remember the
          power of a pinch of spice. It's not just about the heat or the flavor;
          it's about the journey that every spice has taken to reach our
          kitchens—a testament to the global tapestry that is our shared
          culinary heritage.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li><i class="fas fa-home"></i> Home</li>
        <li><i class="fas fa-user-alt"></i> About</li>
        <li><i class="fas fa-envelope"></i> Contact</li>
      </ul>
    </nav>
    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View CSS Code - style.css - 3 - Rotating Navigation</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

* {
  box-sizing: border-box;
}

body {
  font-family: "Lato", sans-serif;
  background-color: #333;
  color: #222;
  overflow-x: hidden;
  margin: 0;
}

.container {
  background-color: #fafafa;
  transform-origin: top left;
  transition: transform 0.5s linear;
  width: 100vw;
  min-height: 100vh;
  padding: 50px;
}

.container.show-nav {
  transform: rotate(-20deg);
}

.circle-container {
  position: fixed;
  top: -100px;
  left: -100px;
}

.circle {
  background-color: #5c7c53;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  position: relative;
  transition: transform 0.5s linear;
  transition: background-color 0.5s linear;
}

.container.show-nav .circle {
  transform: rotate(-70deg);
  background-color: #efc669;
}

.circle button {
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100px;
  background: transparent;
  border: 0;
  font-size: 26px;
  color: #fff;
}

.circle button:focus {
  outline: none;
}

.circle button#open {
  left: 60%;
}

.circle button#close {
  top: 60%;
  transform: rotate(90deg);
  transform-origin: top left;
}

.container.show-nav + nav li {
  transform: translateX(0);
  transition-delay: 0.3s;
}

nav {
  position: fixed;
  bottom: 40px;
  left: 0;
  z-index: 100;
}

nav ul {
  list-style-type: none;
  padding-left: 30px;
}

nav ul li {
  text-transform: uppercase;
  color: #fff;
  margin: 40px 0px;
  transform: translateX(-100%);
  transition: transform 0.4s ease-in;
}

nav ul li i {
  font-size: 20px;
  margin-right: 10px;
}

nav ul li + li {
  margin-left: 15px;
  transform: translateX(-150%);
}

nav ul li + li + li {
  margin-left: 30px;
  transform: translateX(-200%);
}

.content img {
  max-width: 100%;
}

.content {
  max-width: 1000px;
  margin: 50px auto;
}

.content h1 {
  margin: 0;
}

.content small {
  color: #555;
  font-style: italic;
}

.content p {
  color: #333;
  line-height: 1.5;
}
```
</details>

<details>
<summary>View JS Code - script.js - 3 - Rotating Navigation</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

open.addEventListener("click", () => container.classList.add("show-nav"));
close.addEventListener("click", () => container.classList.remove("show-nav"));
```
</details>

## Day 4

### [4. Hidden Search Widget](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/004-Hidden-Search-Widget)

![Hidden Search-Widget - Image 1](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/004-Hidden-Search-Widget/004-hidden-search-widget-1.png)

![Hidden Search-Widget - Image 2](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/004-Hidden-Search-Widget/004-hidden-search-widget-2.png)

![Hidden Search-Widget - Image 3](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/004-Hidden-Search-Widget/004-hidden-search-widget-3.png)

![Hidden Search-Widget - Image 4](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/004-Hidden-Search-Widget/004-hidden-search-widget-4.png)

<details>
<summary>View HTML Code - index.html - 4 - Hidden Search Widget</summary>
<br>

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />
    <title>Hidden Search Widget</title>
  </head>
  <body>
    <div class="search">
      <input type="text" class="input" placeholder="Search..." />
      <button class="btn">
        <i class="fas fa-search"></i>
      </button>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```
</details>

<details>
<summary>View CSS Code - style.css - 4 - Hidden Search Widget</summary>
<br>

![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)

```css
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

body {
  background: linear-gradient(45deg, #d53369 0%, #daae51 100%);
  font-family: "Roboto", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.search {
  position: relative;
  height: 50px;
  transition: all 0.4s ease-in-out;
}

.search.search.active {
  width: 250px;
}

.search .input {
  background-color: #fff;
  border: 0;
  font-size: 18px;
  padding: 15px;
  height: 50px;
  width: 50px;
  transition: width 0.3s ease;
}

.btn {
  background-color: #fff;
  border: 0;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 50px;
  transition: transform 0.3s ease;
}

.btn:focus,
.input:focus {
  outline: none;
}

.search.active .input {
  width: 200px;
}

.search.active .btn {
  transform: translateX(198px);
}
```
</details>

<details>
<summary>View JS Code - script.js - 4 - Hidden Search Widget</summary>
<br>

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

```javascript
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
```
</details>

## Day 5

### [5. Blurry Loading](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/005%20-%20Blurry%20Loading)

## Day 6

### [6. Scroll Animation](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/006%20-%20Scroll%20Animation)

## Day 7

### [7. Split Landing Page](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/007%20-%20Split%20Landing%20Page)

## Day 8

### [8. Form Wave Animation](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/008%20-%20Form%20Wave%20Animation)

## Day 9

### [9. Sound Board](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/009%20-%20Sound%20Board)

## Day 10

### [10. Dad Jokes](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/010%20-%20Dad%20Jokes)

## Day 11

### [11. Event KeyCodes](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/011%20-%20Event%20KeyCodes)

## Day 12

### [12. FAQ Collapse](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/012%20-%20FAQ%20Collapse)

## Day 13

### [13. Random Choice Picker](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/013%20-%20Random%20Choice%20Picker)

## Day 14

### [14. Animated Navigation](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/014%20-%20Animated%20Navigation)

## Day 15

### [15. Incrementing Counter](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/015%20-%20Incrementing%20Counter)

## Day 16

### [16. Drink Water](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/016%20-%20Drink%20Water)

## Day 17

### [17. Movie App](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/017%20-%20Movie%20App)

## Day 18

### [18. Background Slider](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/018%20-%20Background%20Slider)

## Day 19

### [19. Theme Clock](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/019%20-%20Theme%20Clock)

## Day 20

### [20. Button Ripple Effect](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/020%20-%20Button%20Ripple%20Effect)

## Day 21

### [21. Drag N Drop](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/021%20-%20Drag%20N%20Drop)

## Day 22

### [22. Drawing App](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/022%20-%20Drawing%20App)

## Day 23

### [23. Kinetic CSS Loader](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/023%20-%20Kinetic%20CSS%20Loader)

## Day 24

### [24. Content Placeholder](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/024%20-%20Content%20Placeholder)

## Day 25

### [25. Sticky Navigation](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/025%20-%20Sticky%20Navigation)

## Day 26

### [26. Double Vertical Slider](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/026%20-%20Double%20Vertical%20Slider)

## Day 27

### [27. Toast Notifications](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/027%20-%20Toast%20Notifications)

## Day 28

### [28. GitHub Profiles](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/028%20-%20GitHub%20Profiles)

## Day 29

### [29. Double Click Heart](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/029%20-%20Double%20Click%20Heart)

## Day 30

### [30 - Auto Text Effect](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/030%20-%20Auto%20Text%20Effect)

## Day 31

### [31. Password Generator](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/031%20-%20Password%20Generator)

## Day 32

### [32. Good, Cheap, Fast Checkboxes](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/032%20-%20Good%2C%20Cheap%2C%20Fast%20Checkboxes)

## Day 33

### [33. Notes App](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/033%20-%20Notes%20App)

## Day 34

### [34. Animated Countdown](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/034%20-%20Animated%20Countdown)

## Day 35

### [35. Image Carousel](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/035%20-%20Image%20Carousel)

## Day 36

### [36. Hoverboard](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/036%20-%20Hoverboard)

## Day 37

### [37. Pokedex](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/037%20-%20Pokedex)

## Day 38

### [38. Mobile Tab Navigation](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/038%20-%20Mobile%20Tab%20Navigation)

## Day 39

### [39. Password Strength Background](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/039%20-%20Password%20Strength%20Background)

## Day 40

### [40. 3D Background Boxes](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/040%20-%203D%20Background%20Boxes)

## Day 41

### [41. Verify Account UI](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/041%20-%20Verify%20Account%20UI)

## Day 42

### [42. Live User Filter](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/042%20-%20Live%20User%20Filter)

## Day 43

### [43. Feedback UI Design](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/043%20-%20Feedback%20UI%20Design)

## Day 44

### [44. Custom Range Slider](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/044%20-%20Custom%20Range%20Slider)

## Day 45

### [45. Netflix Mobile Navigation](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/045%20-%20Netflix%20Mobile%20Navigation)

## Day 46

### [46. Quiz App](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/046%20-%20Quiz%20App)

## Day 47

### [47. Testimonial Box Switcher](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/047%20-%20Testimonial%20Box%20Switcher)

## Day 48

### [48. Random Image Feed](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/048%20-%20Random%20Image%20Feed)

## Day 49

### [49. Todo List](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/049%20-%20Todo%20List)

## Day 50

### [50. Insect Catch Game](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/050%20-%20Insect%20Catch%20Game)

## Sources & Credits

Guided Exercises by [Brad Traversy](https://github.com/bradtraversy)
