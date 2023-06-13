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
const tapestryImg = document.getElementById("tapestry");
const flamingoImg = document.getElementById("flamingo");

// commercialToggle.onclick = function () {
//   if (tapestryImg.style.display !== "none") {
//     tapestryImg.style.display = "none";
//   } else {
//     tapestryImg.style.display = "block";
//   }
// };

residentialToggle.onclick = function () {
  tapestryImg.style.display = "block";
  flamingoImg.style.display = "none";
};

commercialToggle.onclick = function () {
  tapestryImg.style.display = "none";
  flamingoImg.style.display = "block";

  // if (flamingoImg.style.display == "none") {
  //   flamingoImg.style.display = "block";
  // }
};
