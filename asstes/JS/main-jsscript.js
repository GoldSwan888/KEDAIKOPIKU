// Toogle Class Active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika humberger menu di Click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click diluar sideBar untuk menutup
const hamburger = document.querySelector("#hamburger-menu");

//ketika diklik dimanapun halaman
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target))
    //e.target = yang di klik mouse kita saat itu
    navbarNav.classList.remove("active");
});
