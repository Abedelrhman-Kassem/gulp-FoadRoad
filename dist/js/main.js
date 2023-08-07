// Set active link
let title = document.title.split("/")[1];
let links = document.querySelectorAll("header .nav-link");
links.forEach(
  (link) => link.innerHTML === title && link.classList.add("active")
);

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

// Start Resturant

if (document.title == "FoadRoad/Resturant") {
  let input = document.querySelector(".resturant-find input");
  let button = document.querySelector(".resturant-find button");
  let cards = document.querySelectorAll(".resturant-resturants .card");
  button.addEventListener("click", (e) => {
    e.preventDefault();

    cards.forEach((card) => {
      card.lastElementChild.firstElementChild.innerHTML
        .toLowerCase()
        .includes(input.value.toLowerCase().trim())
        ? card.classList.remove("d-none")
        : card.classList.add("d-none");
    });
  });
  let filters = document.querySelectorAll(
    ".resturant-resturants .filter .filter-result"
  );

  filters.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
      filters.forEach((ele) => ele === item || ele.classList.remove("active"));

      cards.forEach((card) => {
        card.firstElementChild.lastElementChild.innerHTML
          .toLowerCase()
          .includes(item.innerHTML.toLowerCase().trim())
          ? card.classList.remove("d-none")
          : card.classList.add("d-none");
      });
      document.querySelector(".filter-result.active") == null &&
        cards.forEach((card) => card.classList.remove("d-none"));
    });
  });
}

// End Resturant

// Start Footer

let copyRight = document.querySelector("footer .finals .copyright");
copyRight.innerHTML = `Copyright © ${new Date().getFullYear()} FoodRoad Food delivery`;
