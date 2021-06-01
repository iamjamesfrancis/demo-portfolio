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

light = true;
document.body.setAttribute("data-theme", "dark");
document.getElementById("jf_logo").addEventListener("click", function (event) {
  if (!light) {
    document.body.setAttribute("data-theme", "dark");
    light = true;
  } else {
    document.body.removeAttribute("data-theme");
    light = false;
  }
});
