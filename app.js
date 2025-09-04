
/* hamburger */

function openMenu() {
  document.body.classList.add("menu--open");
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

/* background pics */

const ICON_SOURCES = [
  "bowl-food-solid-full.svg",
  "lemon-solid-full.svg",
  "carrot-solid-full.svg",
  "egg-solid-full.svg",
  "burger-solid-full.svg",
  "utensils-solid-full.svg"
];

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function scatterIcons() {
  const layer = document.getElementById("bg-icons");
  if (!layer) return;


  const base = Math.max(12, Math.floor(window.innerWidth / 80));
  layer.innerHTML = "";

  for (let i = 0; i < base; i++) {
    const img = document.createElement("img");
    img.src = ICON_SOURCES[Math.floor(Math.random() * ICON_SOURCES.length)];
    img.alt = ""; 

   
    const size = rand(28, 90); 
    img.style.position = "absolute";
    img.style.width = `${size}px`;
    img.style.height = "auto";
    img.style.left = `${rand(0, 100)}%`;
    img.style.top = `${rand(0, 100)}%`;
    img.style.transform = `translate(-50%, -50%) rotate(${rand(0, 360)}deg)`;
    img.style.opacity = `${rand(0.08, 0.18)}`;

    layer.appendChild(img);
  }
}


function debounce(fn, wait = 200) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}

window.addEventListener("load", scatterIcons);
window.addEventListener("resize", debounce(scatterIcons, 200));
