# 50 Projects in 50 Days - HTML, CSS & JavaScript Sandbox

Self-Paced Learning Sandbox for HTML, CSS & JavaScript

![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

## Project Setup

### [Project Starter Template/Boilerplate](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/000%20-%20Project%20Starter%20Template)

---

#### [HTML5 Boilerplate - HTML5 (HyperText Markup Language 5)](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/000%20-%20Project%20Starter%20Template/index.html)

![HTML5 Boilerplate](https://img.shields.io/badge/HTML5_-_Project%20Boilerplate%20Code-595959.svg?style=for-the-badge&logo=HTML5&logoColor=white&labelColor=E34F26)

|[index.html](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/000%20-%20Project%20Starter%20Template/index.html)|
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

#### [CSS Boilerplate - CSS3 (Cascading Style Sheets Level 3)](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/000%20-%20Project%20Starter%20Template/style.css)

![CSS3 Boilerplate](https://img.shields.io/badge/CSS3-Project%20Boilerplate%20Code-595959.svg?style=for-the-badge&logo=CSS3&logoColor=white&labelColor=1572B6)

|[style.css](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/000%20-%20Project%20Starter%20Template/style.css)|
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

#### [JavaScript Boilerplate - JS ES6+ (ECMAScript 2015 Onwards)](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/000%20-%20Project%20Starter%20Template/script.js)

![JavaScript Boilerplate](https://img.shields.io/badge/JavaScript-Project%20Boilerplate%20Code-595959.svg?style=for-the-badge&logo=JavaScript&logoColor=black&labelColor=F7DF1E)

|[script.js](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/blob/main/000%20-%20Project%20Starter%20Template/script.js)|
|---|
```js
// Empty
```

---

## Day 1

### [1. Expanding Cards](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/001%20-%20Expanding%20Cards)

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
    <!-- <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    /> -->
    <link rel="stylesheet" href="style.css" />
    <title>Expanding Cards</title>
  </head>
  <body>
    <div class="container">
      <div
        class="panel active"
        style="
          background-image: url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
        "
      >
        <h3>Explore the World</h3>
      </div>
      <div
        class="panel"
        style="
          background-image: url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
        "
      >
        <h3>Wild Forest</h3>
      </div>
      <div
        class="panel"
        style="
          background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80');
        "
      >
        <h3>Sunny Beach</h3>
      </div>
      <div
        class="panel"
        style="
          background-image: url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80');
        "
      >
        <h3>City on Winter</h3>
      </div>
      <div
        class="panel"
        style="
          background-image: url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
        "
      >
        <h3>Mountains - Clouds</h3>
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
  color: #fff;
  cursor: pointer;
  flex: 0.5;
  margin: 10px;
  position: relative;
  -webkit-transition: all 700ms ease-in;
}

.panel h3 {
  font-size: 24px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  margin: 0;
  opacity: 0;
}

.panel.active {
  flex: 5;
}

.panel.active h3 {
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
}

@media (max-width: 480px) {
  .container {
    width: 100vw;
  }

  .panel:nth-of-type(4),
  .panel:nth-of-type(5) {
    display: none;
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

### [2. Progress Steps](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/002%20-%20Progress%20Steps)

## Day 3

### [3. Rotating Navigation](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/003%20-%20Rotating%20Navigation)

## Day 4

### [4. Hidden Search Widget](https://github.com/itsjordanmuller/50-in-50-html-css-javascript/tree/main/004%20-%20Hidden%20Search%20Widget)

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
