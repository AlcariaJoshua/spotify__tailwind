const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");
const blurr = document.querySelector('.arjay');
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
  headerNav.style=("transition: .5s ease")
  blurr.classList.toggle("show");
});

const kamote = document.querySelectorAll('.title');
kamote.forEach((kamoteq) => {
    kamoteq.addEventListener('click', () => {
        kamoteq.nextElementSibling.classList.toggle('open');
        kamoteq.querySelector("i").classList.toggle("open");
       
    })
})
