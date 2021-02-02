
var mobileNav = document.querySelector(".nav-mobile");
mobileNav.addEventListener('click', toggleMenu)

function toggleMenu() {
  console.log('toggleMenu')// Mobile nav function
  var mobileNav = document.querySelector(".nav-mobile");
  // document.querySelector(".nav").appendChild(mobileNav);
   toggle();
}

// toggleClass
function toggle() {
  console.log('toggle')
   var mobileNavList = document.querySelector(".nav-list");
   console.log(mobileNavList.style.display)
  //  if mobile navlist/menu list is displayed then hide the nav list
   if (mobileNavList.style.display === "block") {
     mobileNavList.style.display = "none";
     mobileNav.classList.remove("nav-mobile-close");
     mobileNav.classList.add("nav-mobile");
     console.log(mobileNavList.style.display)

   } else {
      //  if mobile navlist/menu list is hidden then hide the nav list
     mobileNavList.style.display = "block";
     mobileNav.classList.add("nav-mobile-close");
     console.log(mobileNavList.style.display)
   }
}

