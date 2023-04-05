(function () {
  //targeting screen

  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");
  console.log(screen);
  console.log(buttons);

  buttons.forEach(function (btn1) {
    btn1.addEventListener("click", function (e) {
      let userInput = e.target.dataset.num;
      screen.value += userInput;
    });
  });
  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      ("enter a number");
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });
  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
})();
