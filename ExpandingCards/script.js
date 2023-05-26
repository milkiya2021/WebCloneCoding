const panels = document.querySelectorAll(".panel");

panels.forEach((potato) => {
  potato.addEventListener("click", () => {
    removeActiveClasses();
    potato.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((potato) => {
    potato.classList.remove("active");
  });
}
