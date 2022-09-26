// ---START--- ODOMETER
function custom_count() {
  let flag = true;
  $(".number-counter-section").each(function () {
    if ($(this).isInViewport()) {
      if (flag) {
        let arr = [],
          i = 0;
        $(".progress-count .odometer").each(function () {
          arr[i++] = $(this).attr("data-count");
          odometer.innerText = arr[0];
          odometer1.innerText = arr[1];
          odometer2.innerText = arr[2];
        });
        flag = false;
      }
    } else {
    }
  });
}

$.fn.isInViewport = function () {
  let elementTop = $(this).offset().top;
  let elementBottom = elementTop + $(this).outerHeight();
  let viewportTop = $(window).scrollTop();
  let viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(document).ready(function () {
  custom_count();
  $(window).resize(function () {
    custom_count();
  });

  $(window).on("scroll", function () {
    custom_count();
  });
});
// ---END--- ODOMETER

// ---START--- CHANGE ACTIVE ON SCROLLING
let navBarElements = document.querySelectorAll(
  ".all-elements > div , .all-elements > nav"
);
if (window.innerWidth > 500) {
  range = 200;
} else {
  range = 100;
}
let navBarLinks = document.querySelectorAll(" ul.navbar-nav li.nav-item a");
window.addEventListener("scroll", function () {
  navBarElements.forEach(function (e) {
    if (window.scrollY > e.offsetTop - range) {
      if (window.scrollY < e.offsetTop + e.offsetHeight) {
        navBarLinks.forEach(function (f) {
          if (f.dataset.section === `.${e.classList[0]}`) {
            document
              .querySelector("ul.navbar-nav li.nav-item a.active")
              .classList.remove("active");
            f.classList.add("active");
          }
        });
      }
    }
  });
});
// ---END--- CHANGE ACTIVE ON SCROLLING

// ---START---  SCROLL UP BUTTON
let scrollButton = document.querySelector(".scroll-top");
scrollButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// ---END---  SCROLL UP BUTTON

// ---START--- SHOW THE SCROLL TOP BUTTON
let screenHeight = window.innerHeight;
let navBar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
  if (window.scrollY > navBar.offsetHeight) {
    scrollButton.style = "display:block";
  } else {
    scrollButton.style = "display:none";
  }
});
// ---END--- SHOW THE SCROLL TOP BUTTON

// ---START--- BURGER MENU TOGGLING
const burgerMenu = document.querySelector(".burger-menu");
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
});
// ---END--- BURGER MENU TOGGLING

// ---START-- CLOSE  NAVBAR WHEN CLICK  LINK OR OUTSIDE
$(document).ready(function () {
  $(".nav-item a").click(function () {
    $(".navbar div").removeClass("show");
    $(".burger-menu").removeClass("active");
  });
});

$(document).click(function (e) {
  if (
    $(".collapse").hasClass("show") &&
    !$("nav").is(e.target) &&
    $("nav").has(e.target).length === 0
  ) {
    $(".navbar-toggler").click();

    $(".burger-menu").removeClass("active");
  }
});
// ---END-- CLOSE  NAVBAR WHEN CLICK  LINK OR OUTSIDE

// ---START--- SEARCH BAR ANIMATION
$("#input_search").on("focus", function () {
  $(this).parent("label").addClass("active");
});

$("#input_search").on("blur", function () {
  if ($(this).val().length == 0) $(this).parent("label").removeClass("active");
});
// ---END--- SEARCH BAR ANIMATION

// ---START--- ACTIVE AOS LIB
AOS.init({
  disable: false,
});
// ---END--- ACTIVE AOS LIB

// ---START--- TOGGLE FOOTER AT 768PX
$(".toggle-foot").on("click", function () {
  if ($(window).width() < 768) {
    $(this).next(".sections").slideToggle("slow");
    $(this).children(".foot-arr").toggleClass("active-rot");
  }
});
// ---END--- TOGGLE FOOTER AT 768PX
