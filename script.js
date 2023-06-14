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

////////// Toggle between project types ////////////////

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

///////// To hide and show respective divs //////////

// Get the parent container element
const projectNav = document.querySelector(".project-nav");

// Class that all categories have
let category = Array.from(document.querySelectorAll(".category"));

// Add a click event listener to the parent container
projectNav.addEventListener("click", function (e) {
  // e being the clicked element
  const target = e.target;

  // Check if the clicked element is a button
  if (target.matches(".project-btn")) {
    // Prevent default behaviour
    e.preventDefault();

    // Assign the clicked element's ID to toggleID
    const toggleId = target.id;
    // Replace the -btn with blank, resulting in the ID of respective container
    const contentId = toggleId.replace("-btn", "");
    // Assign the element with the ID to contentElement
    const contentElement = document.getElementById(contentId);

    // Remove "display" class from all elements with the class 'category'
    category.forEach((node) => {
      node.classList.remove("display");
    });

    // Add "display" class to the corresponding content element
    contentElement.classList.add("display");
  }
});
