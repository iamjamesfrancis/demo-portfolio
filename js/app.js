new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  anchors: ["home", "whoiam", "skillset", "works", "keepintouch", "copyright"],
  navigation: true,
  controlArrows: false,
  slidesNavigation: true,
});

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

var typed = new Typed(".anime-text", {
  strings: ["Web developer", "Mobile App developer", "Student"],
  typeSpeed: 100,
  backSpeed: 100,
  startDelay: 1000,
  showCursor: false,
  loop: true,
  bindInputFocusEvents: true,
});
localStorage.getItem("dark-mode")
  ? null
  : localStorage.setItem("dark-mode", "true");

if (localStorage.getItem("dark-mode") === "true") {
  document.body.setAttribute("data-theme", "dark");
} else {
  document.body.removeAttribute("data-theme");
}
document.getElementById("jf_logo").addEventListener("click", function (event) {
  if (localStorage.getItem("dark-mode") !== "true") {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("dark-mode", "true");
  } else {
    console.log("light");
    document.body.removeAttribute("data-theme");
    localStorage.setItem("dark-mode", "false");
  }
});

const tl = gsap.timeline({ default: { ease: "power1.out" } });
tl.to(".text", { y: "0%", duration: 1, stagger: 0.5 });
tl.to(".text", { opacity: 0, duration: 0.5, delay: 1.5 }, { opacity: 1 });
// tl.to(".slider", { y: "0%", duration: 0.5 }, "-=.5");
// tl.to(".slider-text", { y: "0%", duration: 0.5 });
tl.to(".loader", { y: "-100%", duration: 0.5 });
// tl.to(".slider", { y: "-100%", duration: 0.5 });
// tl.to(".slider", { opacity: 1, duration: 0.5 }, { opacity: 0 }, "-=1");

function currentTime() {
  let time = new Date();
  document.getElementById("time").innerHTML = `${("00" + time.getHours()).slice(
    -2
  )}:${("00" + time.getMinutes()).slice(-2)}<span style="font-size:1.2rem">:${(
    "00" + time.getSeconds()
  ).slice(-2)}</span>`;
}
setInterval(currentTime(), 100);
setInterval(() => {
  currentTime();
}, 100);

// Service Worker Installation
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then((reg) => {
    // console.log(reg);
    reg.update();
    // reg.addEventListener("updatefound", () => {});
  });
}

//  Image Animations

const img = document.querySelector(".image");
const profile = document.querySelector(".profile");

img.addEventListener("mousemove", (e) => {
  // console.log(profile);
  profile.style.transition = `none`;
  let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
  profile.style.transform = `translateZ(150px)`;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 30;
  profile.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

img.addEventListener("mouseleave", () => {
  profile.style.transition = `all .5s ease-in-out`;
  profile.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
