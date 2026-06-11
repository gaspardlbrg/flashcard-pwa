// SERVICE WORKER PWA

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/js/sw.js")
      .then((reg) => console.log("SW registered", reg))
      .catch((err) => console.error("SW registation failed : ", err));
  });
}

// FLASHCARD CARROUSSEL

const bck = document.querySelector("#back");
const nxt = document.querySelector("#next");
const cnter = document.querySelector("#counter");
const cards = document.querySelectorAll(".cardd");
let i = 0;

function updateCarroussel() {
  cnter.textContent = `${i + 1}/${cards.length}`;

  for (let j = 0; j < cards.length; j++) {
    if (j === i) {
      cards[j].classList.remove("hide");
    } else {
      cards[j].classList.add("hide");
    }
  }
}

updateCarroussel();

nxt.addEventListener("click", function () {
  if (i === cards.length - 1) {
    i = 0;
  } else {
    i++;
  }
  updateCarroussel();
});

bck.addEventListener("click", function () {
  if (i === 0) {
    i = cards.length - 1;
  } else {
    i--;
  }
  updateCarroussel();
});
