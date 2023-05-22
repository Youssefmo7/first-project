/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

// Define Global Variables

const fragment = document.createDocumentFragment();
const sections = document.querySelectorAll("section");
const list = document.querySelector("#navbar__list");

// Building the navigation bar

sections.forEach((section) => {
  const sectionId = section.getAttribute("id");
  const listItem = document.createElement("li");
  listItem.innerHTML = `<a class = "menu__link" href = ${sectionId}>`;
  listItem.firstElementChild.textContent = section.getAttribute("data-nav");
  listItem.firstElementChild.addEventListener("click", (eve) => {
    eve.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
  });
  fragment.appendChild(listItem);
});
list.appendChild(fragment);

// Add class 'active' to section when near top of viewport

const callback = (entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("your-active-class", entry.isIntersecting);
  });
};

// add properties

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.35,
};

// observing the target section

const observer = new IntersectionObserver(callback, options);
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    observer.observe(section);
  });
});
