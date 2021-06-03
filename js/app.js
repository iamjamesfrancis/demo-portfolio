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

let time = new Date();
document.getElementById("time").innerText = `${("00" + time.getHours()).slice(
  -2
)}:${("00" + time.getMinutes()).slice(-2)}`;
// Service Worker Installation
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then((reg) => {
    // console.log(reg);
    reg.update();
    // reg.addEventListener("updatefound", () => {});
  });
}
