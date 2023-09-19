const container = document.querySelector(".container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener("mouseover", () => {
  container.classList.add("hoverLeft");
});
left.addEventListener("mouseleave", () => {
  container.classList.remove("hoverLeft");
});

right.addEventListener("mouseover", () => {
  container.classList.add("hoverRight");
});
right.addEventListener("mouseleave", () => {
  container.classList.remove("hoverRight");
});
