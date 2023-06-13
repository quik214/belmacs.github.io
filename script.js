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

// Below code to toggle bottom border on/off
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

const residentialToggle = document.getElementById("residential-btn");
const commercialToggle = document.getElementById("commercial-btn");
const retrofitToggle = document.getElementById("retrofit-btn");
const institutionalToggle = document.getElementById("institutional-btn");
const infrastructureToggle = document.getElementById("infrastructure-btn");
const industrialToggle = document.getElementById("industrial-btn");
const fittingToggle = document.getElementById("fitting-btn");

// Class that all categories have
let category = Array.from(document.querySelectorAll(".category"));

let commercial = document.getElementById("commercial");
let residential = document.getElementById("residential");
let retrofit = document.getElementById("retrofit");
let institutional = document.getElementById("institutional");
let infrastructure = document.getElementById("infrastructure");
let industrial = document.getElementById("industrial");
let fitting = document.getElementById("fitting");

// Onclick residential
residentialToggle.onclick = function () {
  category.forEach((node) => {
    node.classList.remove("display");
  });
  residential.classList.add("display");
  return false;
};

// Onclick commercial
commercialToggle.onclick = function () {
  category.forEach((node) => {
    node.classList.remove("display");
  });
  commercial.classList.add("display");
  return false;
};

// Onclick retrofit
retrofitToggle.onclick = function () {
  category.forEach((node) => {
    node.classList.remove("display");
  });
  retrofit.classList.add("display");
};

// Onclick institutional
institutionalToggle.onclick = function () {
  category.forEach((node) => {
    node.classList.remove("display");
  });
  institutional.classList.add("display");
};

// Onclick infrastructure
infrastructureToggle.onclick = function () {
  category.forEach((node) => {
    node.classList.remove("display");
  });
  infrastructure.classList.add("display");
};

// Onclick industrial
industrialToggle.onclick = function () {
  category.forEach((node) => {
    node.classList.remove("display");
  });
  industrial.classList.add("display");
};

// Onclick fitting
fittingToggle.onclick = function () {
  category.forEach((node) => {
    node.classList.remove("display");
  });
  fitting.classList.add("display");
};

// const handleToggle = (e) => {
//   e.preventDefault();
//   categoryCards.forEach((node) => {
//     node.classList.remove("display");
//   });
//   e.current;
// };

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
