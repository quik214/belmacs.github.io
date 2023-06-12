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

// // Smooth scrolling

// const allLinks = document.querySelectorAll("a:link");

// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");
//     console.log(href);

//     // Close mobile navigation on scroll
//     if (link.classList.contains("nav-link")) {
//       topEl.classList.toggle("nav-open");
//     }
//   });
// });
