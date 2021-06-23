// (function () {
//   const buttons = document.querySelectorAll(".counterBtn");
//   let count = 0;

//   //Add event listeners and functionailty to each button
//   buttons.forEach(function (button) {
//     button.addEventListener("click", function () {
//       if (button.classList.contains("prevBtn")) {
//         count--;
//       } else if (button.classList.contains("nextBtn")) {
//         count++;
//       }

//       //Select the counter text
//       const counter = document.querySelector("#counter");
//       counter.textContent = count;

//       if (count < 0) {
//         counter.style.color = "red";
//       } else if (count > 0) {
//         counter.style.color = "green";
//       } else {
//         counter.style.color = "#333333";
//       }
//     });
//   });
// })();

(() => {
  const button = document.querySelectorAll(".counterBtn");
  let count = 0;
  //Add event listeners and functionailty to each button
  button.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("prevBtn")) {
        count--;
      } else if (button.classList.contains("nextBtn")) {
        count++;
      }

      //Select the counter text
      const counter = document.querySelector("#counter");
      counter.textContent = count;

      if (count < 0) {
        counter.style.color = "red";
      } else if (count > 0) {
        counter.style.color = "green";
      } else {
        counter.style.color = "#333333";
      }
    });
  });

  const _button = document.querySelector(".langugeBtn");

  _button.addEventListener("click", () => {
    const myFavProg = ["javascript", "Node", "Angular", "React"];

    myFavProg.forEach(function (currntValue, index) {
      console.log(` ${index} - ${currntValue} `);

      const _language = document.querySelector("#num");
      _language.textContent += ` ${index} - ${currntValue} `;
    });
  });
})();
