const progress = document.querySelector("#progress");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1; //1. 파란색선이 처음에 선택되어 있어야 하므로 1을 초기값으로 설정함.

next.addEventListener("click", () => {
  //next버튼을 누르는 이벤트를 만든다.
  currentActive++; //누르면 +1씩 증가한다.

  if (currentActive > circles.length) {
    //현재 값이 서클의 4번째보다 커지면,
    currentActive = circles.length; //4번째로 고정시킨다.
  }

  update(); //업데이트 함수를 불러라
});

prev.addEventListener("click", () => {
  //prev버튼을 누르는 이벤트를 만든다.
  currentActive--; //누르면 -1씩 감소한다.

  if (currentActive < 1) {
    //1보다 작아지면
    currentActive = 1; //1로 고정시켜라
  }
  update(); //업데이트 함수를 불러라.
});

function update() {
  //이 녀석은 상태를 업데이트해주는 함수
  circles.forEach((circle, idx) => {
    //서클 배열에
    if (idx < currentActive) {
      //인덱스번호가 현재 currentActive보다 작으면
      circle.classList.add("active"); //active속성을 추가해라. 그러니까 서클의 색상을 블루색으로 바꿔라
    } else {
      circle.classList.remove("active"); //인덱스번호가 currentActive보다 크면 active속성을 삭제해라.
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 0.95)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
