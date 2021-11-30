const definition = document.getElementById("definition");
const threadTypes = document.getElementById("thread-types");
const programs = document.getElementById("programs");
const howWork = document.getElementById("how-work");
const advantages = document.getElementById("advantages");
const disadvantages = document.getElementById("disadvantages");
const types = document.getElementById("types");

const navDefinition = document.getElementById("nav-definition");
const navThreadTypes = document.getElementById("nav-thread-types");
const navPrograms = document.getElementById("nav-programs");
const navHowWork = document.getElementById("nav-how-work");
const navAdvantages = document.getElementById("nav-advantages");
const navDisadvantages = document.getElementById("nav-disadvantages");
const navTypes = document.getElementById("nav-types");

const nodes = [
  { article: definition, nav: navDefinition },
  { article: threadTypes, nav: navThreadTypes },
  { article: programs, nav: navPrograms },
  { article: howWork, nav: navHowWork },
  { article: advantages, nav: navAdvantages },
  { article: disadvantages, nav: navDisadvantages },
  { article: types, nav: navTypes },
];

window.addEventListener("scroll", () => {
  for ({ article, nav } of nodes) {
    applyEvent(article, nav);
  }
});

function applyEvent(article, nav) {
  let top = article.getBoundingClientRect().top;
  let height = article.getBoundingClientRect().height;

  if (top <= 10 && top >= -height) {
    nav.classList.add("active-nav");
  } else {
    nav.classList.remove("active-nav");
  }
}
