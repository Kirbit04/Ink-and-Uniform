const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
/*-------------------------button------------------------*/
const openPopupButton = document.getElementById("form-open");
const popup = document.getElementById("form_container");
const closePopupButton = document.querySelector(".form_close");
const tabButtons = document.querySelectorAll("#navbar a");

openPopupButton.addEventListener("click", () => {
  popup.style.display = "block";
});

closePopupButton.addEventListener("click", () => {
  popup.style.display = "none";
});

tabButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const targetTab = document.querySelector(event.target.getAttribute("href"));
    tabButtons.forEach((button) => button.classList.remove("active"));
    event.target.classList.add("active");
    const tabContents = document.querySelectorAll(".tab");
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));
    targetTab.classList.add("active");
  });
});

