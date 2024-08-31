let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

// console.log(valueDisplays);

valueDisplays.forEach((valueDisplay) => {
  let starValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  //   console.log(endValue);
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    starValue += 1;
    valueDisplay.textContent = starValue;
    if (starValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});