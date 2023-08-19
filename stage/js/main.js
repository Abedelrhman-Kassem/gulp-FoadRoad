// Set active link
let title = document.title.split("/")[1];
let links = document.querySelectorAll("header .nav-link");
links.forEach(
  (link) => link.innerHTML === title && link.classList.add("active")
);

// Start Service Page Page And FAQ Page
if (document.title == "FoadRoad/Service" || document.title == "FoadRoad/FAQ") {
  // Accordions Service Page And FAQ Page
  // Change Minus, Plus

  let buttons = document.querySelectorAll(".accordion-item button");

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

// Start Single Resturant

if (document.title == "FoadRoad/Single-Resturant") {
  let countDownDate = new Date().getTime() + 86400000;
  let counter = setInterval(() => {
    let dateNow = new Date().getTime();

    let diff = countDownDate - dateNow;

    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.querySelector(".single-discount .heading .hours").innerHTML =
      hours < 10 ? `0${hours}` : hours;

    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.querySelector(".single-discount .heading .minutes").innerHTML =
      minutes < 10 ? `0${minutes}` : minutes;

    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    document.querySelector(".single-discount .heading .seconds").innerHTML =
      seconds < 10 ? `0${seconds}` : seconds;

    diff < 0 && clearInterval(counter);
  }, 1000);

  // Create The Search
  let input = document.querySelector(".single-foodlist input");
  let cards = document.querySelectorAll(".single-foodlist .box");
  let types = document.querySelectorAll(".single-foodlist .type");
  let allActive = document.querySelector('.single-foodlist [data-type="all"]');

  input.addEventListener("input", function () {
    types.forEach((type) => type.classList.remove("active"));
    allActive.classList.add("active");
    cards.forEach((card) => {
      card.dataset.search
        .toLowerCase()
        .includes(input.value.toLowerCase().trim())
        ? card.classList.remove("d-none")
        : card.classList.add("d-none");
    });
  });

  types.forEach((item) => {
    item.addEventListener("click", function () {
      if (item.dataset.type.toLowerCase() === "all") {
        types.forEach((ele) => ele.classList.remove("active"));
        item.classList.add("active");
        cards.forEach((card) => card.classList.remove("d-none"));
      } else {
        item.classList.toggle("active");

        allActive.classList.remove("active");

        let activeTypes = document.querySelectorAll(
          ".single-foodlist .type.active"
        );

        cards.forEach((card) => card.classList.remove("show"));
        activeTypes.forEach((ele) => {
          cards.forEach((card) => {
            card.classList.contains(ele.dataset.type.toLowerCase()) &&
              card.classList.add("show");
          });
        });

        cards.forEach((card) =>
          card.classList.contains("show")
            ? card.classList.remove("d-none")
            : card.classList.add("d-none")
        );
      }
    });
  });

  setTimeout(() => {
    let iconsHold = document.querySelectorAll(".single-foodlist .hold");
    iconsHold.forEach((hold) => {
      hold.addEventListener("click", () => {
        let icon = hold.firstChild;
        icon.classList.toggle("clicked");
        icon.classList.contains("clicked")
          ? icon.classList.add("fa-minus")
          : icon.classList.add("fa-plus");
      });
    });
  }, 1000);
}

// End Single Resturant

// Start FAQ

if (document.title == "FoadRoad/FAQ") {
  let faqLanding = document.querySelector(".faq-landing");
  let btn = document.querySelector(".faq-landing button");
  let searchInput = document.querySelector(".faq-landing input");
  let accordions = document.querySelectorAll(".accordion-item");
  let accordionNode = document.querySelector(".accordion").cloneNode();

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    accordionNode.innerHTML = "";
    if (searchInput.value.trim() !== "") {
      accordions.forEach((item) => {
        if (
          item.innerText
            .toLowerCase()
            .includes(searchInput.value.toLowerCase().trim())
        ) {
          accordionNode.appendChild(item.cloneNode(true));
        }
      });
      if (!accordionNode.hasChildNodes())
        accordionNode.innerText = "No Results";
      faqLanding.firstElementChild.appendChild(accordionNode);
    } else accordionNode.remove();
  });
}

// End FAQ

// Start Login

if (document.title === "FoodRoad/Sign in") {
}

// End Login

// Start Footer
if (
  document.title === "FoodRoad/Sign in" ||
  document.title === "FoodRoad/Register"
) {
  let copyRight = document.querySelector("footer .finals .copyright");
  copyRight.innerHTML = `Copyright © ${new Date().getFullYear()} FoodRoad Food delivery`;
}
