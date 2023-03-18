let second = 0;
let minute = 0;
let hour = 0;
let d = new Date();
// console.log(second, minute, hour, d);

setInterval(function () {
  d = new Date();
  second = d.getSeconds() * 6;
  minute = d.getMinutes() * 6;
  hour = d.getHours() * 30 + Math.round(minute / 12);
  document.getElementById("second-hand").style.transform =
    "rotate(" + second + "deg)";
  document.getElementById("minute-hand").style.transform =
    "rotate(" + minute + "deg)";
  document.getElementById("hour-hand").style.transform =
    "rotate(" + hour + "deg)";
}, 1100);
function displayTime() {
  let dataTime = new Date();
  let hrs = dataTime.getHours();
  let min = dataTime.getMinutes();
  let sec = dataTime.getSeconds();
  let session = document.getElementById("session");

  if (hrs >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }

  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
}
setInterval(displayTime, 10);
// sliders
const slides = document.querySelectorAll(".slide");
const leftArr = document.querySelector(".left");
const rightArr = document.querySelector(".right");

let activeSlideIndex = 0;

function renderSlides() {
  slides.forEach((slide, index) => {
    if (activeSlideIndex === index) {
      slide.classList.add("active-slide");
    } else {
      slide.classList.remove("active-slide");
    }
  });
}

function nextSlide() {
  if (activeSlideIndex === slides.length - 1) {
    activeSlideIndex = 0;
  } else {
    activeSlideIndex++;
  }

  renderSlides();

  changeBtnClasses();
}

function prevSlide() {
  if (activeSlideIndex === 0) {
    activeSlideIndex = slides.length - 1;
  } else {
    activeSlideIndex--;
  }
  renderSlides();

  changeBtnClasses();
}

let slideIntervalId = null;
const slidesWrapper = document.querySelector(".slides-wrapper");
const sliderBtns = document.querySelector(".slider-btns");

function startAutoSliderFn() {
  slideIntervalId = setInterval(nextSlide, 5000);
}
function stopAutoSliderFn() {
  if (slideIntervalId) {
    clearInterval(slideIntervalId);
    slideIntervalId = null;
  }
}

function renderBullets() {
  slides.forEach((slide, index) => {
    const btn = document.createElement("button");
    btn.classList.add("slide-btn", "btn");
    sliderBtns.append(btn);
    btn.addEventListener("click", (e) => {
      activeSlideIndex = index;
      renderSlides();
      changeBtnClasses();
    });
  });
}

function changeBtnClasses() {
  const btns = document.querySelectorAll(".slide-btn");
  // console.log(btns);

  btns.forEach((btn, index) => {
    if (activeSlideIndex === index) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function createSlider() {
  renderSlides();

  renderBullets();
  changeBtnClasses();

  rightArr.addEventListener("click", nextSlide);
  leftArr.addEventListener("click", prevSlide);

  document.addEventListener("keyup", (e) => {
    // console.log(e.code);
    if (e.code === "ArrowRight") {
      nextSlide();
    }
    if (e.code === "ArrowLeft") {
      prevSlide();
    }
  });
}
createSlider();
