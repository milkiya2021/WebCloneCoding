const boxes = document.querySelectorAll(".box");

appearBox();

window.addEventListener("scroll", appearBox);

function appearBox() {
  const triggerLine = window.innerHeight * 0.8;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerLine) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
