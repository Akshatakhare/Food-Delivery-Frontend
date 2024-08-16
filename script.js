function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// side nav
function openNav() {
  document.getElementById("mySidenav").style.width = "450px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// button
document.addEventListener("DOMContentLoaded", function () {
  const scrollContainers = document.querySelector(".scroll-containers");
  const scrollLength = scrollContainers.scrollWidth - scrollContainers.clientWidth;
  const leftButton = document.querySelector(".left");
  const rightButton = document.querySelector(".right");

  function checkScroll() {
    const currentScroll = scrollContainers.scrollLeft;
    if (currentScroll === 0) {
      leftButton.setAttribute("disabled", "true");
      rightButton.removeAttribute("disabled");
    } else if (currentScroll === scrollLength) {
      rightButton.setAttribute("disabled", "true");
      leftButton.removeAttribute("disabled");
    } else {
      leftButton.removeAttribute("disabled");
      rightButton.removeAttribute("disabled");
    }
  }

  scrollContainers.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", checkScroll);
  checkScroll();

  function leftScroll() {
    scrollContainers.scrollBy({
      left: -200,
      behavior: "smooth"
    });
  }

  function rightScroll() {
    scrollContainers.scrollBy({
      left: 200,
      behavior: "smooth"
    });
  }

  leftButton.addEventListener("click", leftScroll);
  rightButton.addEventListener("click", rightScroll);
});