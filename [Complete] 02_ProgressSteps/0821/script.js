const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const nums = document.querySelectorAll(".num");

let currentPosition = 1;

function paintNum() {
  currentPosition++;
  if (currentPosition > nums.length) {
    currentPosition = nums.length;
  }

  recently();
}

next.addEventListener("click", paintNum);

function removeNum() {
  currentPosition--;
  if (currentPosition < 1) {
    currentPosition = 1;
  }
  recently();
}

prev.addEventListener("click", removeNum);

function recently() {
  nums.forEach((num, idx) => {
    if (idx < currentPosition) {
      num.classList.add("active");
    } else {
      num.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width = ((actives.length - 1) / (nums.length - 1)) * 100 + "%";

  if (currentPosition === 1) {
    prev.disabled = true;
  } else if (currentPosition === nums.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
