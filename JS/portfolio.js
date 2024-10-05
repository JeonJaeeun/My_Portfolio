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

const golfModal = document.getElementById('golf-modal');
const golfIcon = document.getElementById('golf-icon');
const slides = document.getElementsByClassName('golf-slide');
let currentSlide = 0;
let startX = 0; // 드래그 시작 위치
let isDragging = false; // 드래그 상태 체크

golfIcon.addEventListener('click', function(){
  golfModal.style.opacity = '1';
  golfModal.style.pointerEvents = 'auto';
  showSlide(currentSlide);
});

window.addEventListener('click', function(event){
  if(event.target == golfModal){
    golfModal.style.opacity='0';
    golfModal.style.pointerEvents = 'none';
  }
});

// 슬라이드 전환 함수
function showSlide(index) {
  if (index >= slides.length) { currentSlide = 0; } // 마지막 이미지 다음 첫 번째 이미지
  if (index < 0) { currentSlide = slides.length - 1; } // 첫 번째 이미지 이전 마지막 이미지
  
  // 모든 슬라이드를 숨기고
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  // 현재 슬라이드만 표시
  slides[currentSlide].style.display = 'block';
}

// 드래그 시작
function startDrag(event) {
  isDragging = true;
  startX = event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
}

// 드래그 중
function duringDrag(event) {
  if (!isDragging) return;
  let currentX = event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
  let difference = startX - currentX;

  if (difference > 50) {
    // 왼쪽으로 드래그 -> 다음 슬라이드
    showSlide(++currentSlide);
    isDragging = false; // 한번 전환되면 드래그 멈춤
  } else if (difference < -50) {
    // 오른쪽으로 드래그 -> 이전 슬라이드
    showSlide(--currentSlide);
    isDragging = false;
  }
}

// 드래그 종료
function endDrag() {
  isDragging = false;
}

// 이벤트 리스너 추가
const slideContainer = document.querySelector('.golf-slide-container');

// 마우스 드래그 이벤트
slideContainer.addEventListener('mousedown', startDrag);
slideContainer.addEventListener('mousemove', duringDrag);
slideContainer.addEventListener('mouseup', endDrag);
slideContainer.addEventListener('mouseleave', endDrag);

// 터치 드래그 이벤트 (모바일 대응)
slideContainer.addEventListener('touchstart', startDrag);
slideContainer.addEventListener('touchmove', duringDrag);
slideContainer.addEventListener('touchend', endDrag);