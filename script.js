let items = document.querySelectorAll(".slider .item1");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let active = 3;

function loadShow() {
  let stt = 0;

  // Reset the styles for the active item
  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.filter = "none";
  items[active].style.opacity = 1;

  // Style items after the active item
  for (let i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${120 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(-1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(5px)";
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }

  stt = 0;

  // Style items before the active item
  for (let i = active - 1; i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateX(${-120 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(5px)";
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}

// Initial load
loadShow();

// Handle next button click
next.onclick = function () {
  active = (active + 1) % items.length;
  loadShow();
};

// Handle previous button click
prev.onclick = function () {
  active = (active - 1 + items.length) % items.length;
  loadShow();
};

// Automatic slideshow
setInterval(function () {
  active = (active + 1) % items.length;
  loadShow();
}, 7000); // Change slide every 3 seconds
// vanta
const vantaEffect = VANTA.WAVES({
  el: "#vanta-canvas",
  mouseControls: false,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x000011, // Corrected hex color code
  shininess: 17.0,
  waveHeight: 9.5,
  zoom: 1.02,
});

// JavaScript to prevent body scrolling when navbar is open
document.getElementById("navi-toggle").addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
});
