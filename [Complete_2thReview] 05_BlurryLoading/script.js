const loadingText = document.querySelector(".loadingText");
const bg = document.querySelector(".bg");

let num = 0;

let haha = setInterval(blurring, 50);

function blurring() {
  num++;
  if (num > 99) {
    clearInterval(haha);
  }
  loadingText.innerText = `${num}%`;
  loadingText.style.opacity = scale(num, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(num, 0, 100, 30, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
