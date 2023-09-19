const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const circles = document.querySelectorAll(".circle");

let currentPos = 1;

function paintCircle() {
  currentPos++;
  if (currentPos > circles.length) {
    currentPos = circles.length;
  }
  update();
}

next.addEventListener("click", paintCircle);

function eraseCircle() {
  currentPos--;
  if (currentPos < 1) {
    currentPos = 1;
  }
  update();
}

prev.addEventListener("click", eraseCircle);

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentPos) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentPos === 1) {
    prev.disabled = true;
  } else if (currentPos === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
