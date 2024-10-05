// 1. Home 섹션 타이핑 효과

const content = "Hi, I'm Jaeeun, \n front-end developer.";
const textElement = document.querySelector(".home-text");
let currentIndex = 0;

function typing(){
    let txt = content.substring(0, currentIndex++);
    textElement.innerHTML = txt + '<span class="blink">|</span>';
    if (currentIndex > content.length) {
        currentIndex = 0;
    }
}
setInterval(typing, 200)

// 2. Progress-Bar

let scrollTop = 0;
let bar;

window.onload = function () {
  bar = document.getElementsByClassName("bar-ing")[0];
};

window.addEventListener(
    "scroll",
    () => {
      scrollTop = document.documentElement.scrollTop; // y축 방향으로 얼만큼 스크롤했는지!
      let per = Math.ceil(
        (scrollTop / (document.body.scrollHeight - window.outerHeight)) * 100
      );
      bar.style.width = per + "%";
    },
    false
  );