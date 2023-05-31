const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"]; //사운드의 배열을 저장한다.

sounds.forEach((sound) => {
  //각각의 사운드에 아래를 수행한다.
  const buttons = document.getElementById("buttons"); //buttons 선택자를 가져온다.
  const btn = document.createElement("button"); //button엘리먼트를 만들어 btn에 저장한다.
  btn.classList.add("btn"); //버튼하위에 btn선택자를 추가한다.
  btn.innerText = sound; //버튼에 배열의 각요소의 text를 가져온다.

  btn.addEventListener("click", () => {
    //버튼을 누르면
    stopSongs(); //스탑송 함수를 호출한다.

    document.getElementById(sound).play(); //가져온 id의 sound를 플레이해라.
  });

  buttons.appendChild(btn); //btn선택자는 bottons 하위에 저장해라.
});

function stopSongs() {
  sounds.forEach((sound) => {
    //각 사운드에 대해서
    const song = document.getElementById(sound); //사운드의 id를 가져온다. 그것을 song에 저장한다.

    song.pause(); //저장한 song을 멈춘다.
    song.currentTime = 0; //그리고 시간을 0으로 초기화한다.
  });
}
