const panels = document.querySelectorAll(".panel");

panels.forEach((item) => {
  item.addEventListener("click", () => {
    removeAllClasses();
    item.classList.add("active");
  });
});

function removeAllClasses() {
  panels.forEach((item) => {
    item.classList.remove("active");
  });
}
