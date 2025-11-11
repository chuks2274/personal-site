/**
 * @jest-environment jsdom
 */

require("../js/script.js"); // load your script

describe("script.js functionality", () => {
  let yearElement;
  let link;
  let target;
  let navbarToggler;
  let navbarCollapse;

  beforeEach(() => {
    // Mock HTML
    document.body.innerHTML = `
      <footer>
        <span id="year"></span>
      </footer>
      <a href="#section1">Go to Section 1</a>
      <div id="section1"></div>
      <button class="navbar-toggler"></button>
      <div class="navbar-collapse show"></div>
    `;

    // Cache elements
    yearElement = document.getElementById("year");
    link = document.querySelector('a[href="#section1"]');
    target = document.getElementById("section1");
    navbarToggler = document.querySelector(".navbar-toggler");
    navbarCollapse = document.querySelector(".navbar-collapse");

    // Mock scrollIntoView and navbar click
    target.scrollIntoView = jest.fn();
    navbarToggler.click = jest.fn();

    // Trigger DOMContentLoaded to attach event listeners
    document.dispatchEvent(new Event("DOMContentLoaded"));
  });

  test("sets the current year in #year element", () => {
    const currentYear = new Date().getFullYear().toString();
    expect(yearElement.textContent).toBe(currentYear);
  });

  test("smooth scroll triggers scrollIntoView", () => {
    link.click();
    expect(target.scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth", block: "start" });
  });

  test("collapses navbar when link is clicked and collapse is open", () => {
    link.click();
    expect(navbarCollapse.classList.contains("show")).toBe(true);
    expect(navbarToggler.click).toHaveBeenCalled();
  });
});