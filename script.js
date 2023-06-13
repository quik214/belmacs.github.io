console.log("Hello");

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// Make mobile navigation work

const btnOpenNavEl = document.querySelector(".nav-menu");
const topEl = document.querySelector(".top");

btnOpenNavEl.addEventListener("click", function () {
  topEl.classList.toggle("nav-open");
});

// Toggle between project types
const residentialToggle = document.getElementById("residential");
const commercialToggle = document.getElementById("commercial");
const retrofitToggle = document.getElementById("retrofit");
const institutionalToggle = document.getElementById("institutional");
const infrastructureToggle = document.getElementById("infrastructure");
const industrialToggle = document.getElementById("industrial");
const fittingToggle = document.getElementById("fitting");

// Place all toggles inside toggles as an array
let toggles = Array.from(document.querySelectorAll(".project-btn"));

// handleClick function, executes onclick
// for each of the element in toggles, remove the 'active' class
// for the currentTarget, which is the element which started the event,
// add 'active' class to it
const handleClick = (e) => {
  e.preventDefault();
  toggles.forEach((node) => {
    node.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

// starts the function execution above onclick of a toggle element
toggles.forEach((node) => {
  node.addEventListener("click", handleClick);
});

// commercialToggle.onclick = function () {
//   if (tapestryImg.style.display !== "none") {
//     tapestryImg.style.display = "none";
//   } else {
//     tapestryImg.style.display = "block";
//   }
// };

// const tapestryImg = document.getElementById("tapestry");
// const flamingoImg = document.getElementById("flamingo");

// residentialToggle.onclick = function () {
//   tapestryImg.style.display = "block";
//   flamingoImg.style.display = "none";
// };

// commercialToggle.onclick = function () {
//   tapestryImg.style.display = "none";
//   flamingoImg.style.display = "block";
// };

// if (flamingoImg.style.display == "none") {
//   flamingoImg.style.display = "block";
// }
