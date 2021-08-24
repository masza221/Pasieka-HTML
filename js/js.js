const body = document.querySelector("body"),
  overlay = document.querySelector(".overlay"),
  faders = document.querySelectorAll(".info"),
  kontakt = document.querySelector("#footer"),
  footer = document.querySelector("footer");

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

window.onload = function () {
  setTimeout(function () {
    document.getElementById("loading").remove();
    document.getElementById("container").style.opacity = "1";
  }, 500);

  if (window.innerHeight + window.scrollY >= document.body.clientHeight - 10) {
    document.getElementById("footer").className = "show";
  }

  //------------pojawienie sie tekstu w info --------------//
  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -170px 0px",
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("show");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });
  //------------pojawienie sie tekstu w info --------------//
};

var bsDiv = document.getElementById("box-shadow");
var grid = document.getElementById("grid");
var x, y;

if (!isMobile()) {
  bsDiv.style.background = "linear-gradient(90deg,orange, yellow 50% )";
  grid.style.background = "url(./obrazy/hex2.png)";
  window.addEventListener(
    "mousemove",
    function (event) {
      x = event.clientX;
      y = event.clientY;

      if (typeof x !== "undefined") {
        bsDiv.style.left = x - bsDiv.clientWidth / 2 + "px";
        bsDiv.style.top = y - bsDiv.clientWidth / 2 + "px";
      }
    },
    false
  );
}

//menu otwarcie
function menu() {
  const menu = document.querySelector(".menu-wrap");
  menu.classList.toggle("active");
}
//menu otwarcie

//przekierowanie z opoznieniem
function Href(url) {
  setTimeout(function () {
    window.location = url;
  }, 400);
}
//przekierowanie z opoznieniem

//otworzenie popupa
function popupe(ele) {
  popup = document.querySelector("." + ele.id);
  popup.classList.add("active");
  overlay.classList.add("active");
  body.style.overflow = "hidden";
}
//otworzenie popupa

//usuniecie popopa
function popupRemove() {
  popupAct = document.querySelector(".popup.active");
  popupAct.classList.remove("active");
  overlay.classList.remove("active");
  body.style.overflow = "overlay";
}
//usuniecie popopa

//pojawienie sie ikonek przy stopce
document.onscroll = function () {
  if (window.innerHeight + window.scrollY >= document.body.clientHeight - 60) {
    kontakt.className = "show";
  } else {
    kontakt.className = "hide";
  }
};
//pojawienie sie ikonek przy stopce
