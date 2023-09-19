const panels = document.querySelectorAll(".panel");

panels.forEach((bar) => {
  bar.addEventListener("click", () => {
    removeAllClasses();
    bar.classList.add("active");
  });
});

function removeAllClasses() {
  panels.forEach((bar) => {
    bar.classList.remove("active");
  });
}
