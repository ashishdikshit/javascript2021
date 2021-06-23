//Choose a random color
//Choose a random color
// const button = document.querySelector('button')
// const body = document.querySelector('body')
// const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

// body.style.backgroundColor = 'violet'
// button.addEventListener('click', changeBackground)

// function changeBackground(){
// const colorIndex= parseInt(Math.random()*colors.length)
// body.style.backgroundColor = colors[colorIndex]
// }

const button = document.querySelector("button");
const body = document.querySelector("body");

const colors = ["red", "green", "blue", "yellow", "pink", "purple"];
body.style.backgroundColor = "violet";
button.addEventListener("click", changeBackground);

function changeBackground() {
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.background = colors[colorIndex];
}


// For second click button 

(function () {
  const button = document.querySelector("#btn");
  const body = document.querySelector("body");
  const hexValues = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const value = document.querySelector("#hex-value");
  button.addEventListener('click', changeHex)
  function changeHex() {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * hexValues.length);
      hex += hexValues[index];
    }
    value.textContent = hex;
    body.style.backgroundColor = hex;
  }
})();
