let links = document.querySelectorAll(".nav-link");

links.forEach((a) => {
  a.addEventListener("click", () => {
    links.forEach((ele) => {
      ele.classList.remove("active");
    });
    a.classList.add("active");
  });
});
