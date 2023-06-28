// Toogle Class Active Untuk Hamburger Menu
const navbarNav = document.querySelector(".navbar-nav");

// Ketika humberger menu di Click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click diluar sideBar untuk menutup
//ketika diklik dimanapun halaman
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');


document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target))
    //e.target = yang di klik mouse kita saat itu
    navbarNav.classList.remove("active");

    if (!sb.contains(e.target) && !searchForm.contains(e.target))
    //e.target = yang di klik mouse kita saat itu
    searchForm.classList.remove("active");

      // Ini untuk bugs shopping cart
      if (!sc.contains(e.target) && !shoppingCart.contains(e.target))
      //e.target = yang di klik mouse kita saat itu
      shoppingCart.classList.remove("active");
    });

  


// Toggle Class Active untuk Search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault(); //ini agar aksi default nya tidak dilakukan 
}

// INI UNTK SHOPPING CART

// Shopping cart Active

const shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault(); //ini agar aksi default nya tidak dilakukan 
}



//  MODAL BOX

const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display ='flex';
    e.preventDefault();

}
});


// Tombol Close
const closeButton = document.querySelector('.modal .close-icon');

document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display ='none';
  e.preventDefault();

  // Klik di luar modal

const modal = document.querySelector('#item-detail-modal');

windows.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display ='none';
  }

};



};







