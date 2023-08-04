// Start Service Page
if (document.title == "FoadRoad/Service") {
  // Accordions Service Page
  // Change Minus, Plus

  let buttons = document.querySelectorAll(
    ".service-frequently .accordion-item button"
  );

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("collapsed")) {
        button.firstElementChild.classList.remove("fa-minus");
        button.firstElementChild.classList.add("fa-plus");
      } else {
        button.firstElementChild.classList.add("fa-minus");
        button.firstElementChild.classList.remove("fa-plus");
      }
    });
  });
}
// End Service Page
