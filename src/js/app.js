$(document).ready(function () {
  $('.slider__block').slick({
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
  });

  $('.left').click(function () {
    $('.slider__block').slick('slickPrev');
  });

  $('.right').click(function () {
    $('.slider__block').slick('slickNext');
  });
});

function clickFunction() {
  $(".navbar__menu").toggleClass('show');
  // document.getElementsByClassName(".navbar__menu").classList.toggle("show");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.icon')) {
    var dropdowns = document.getElementsByClassName(".navbar__menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// $(document).on("click", function (event) {
//   if (!$(event.target).closest('.icon').length) {
//     $(".navbar__menu").removeClass('show');
//   }
// });

// bat su kien click ra ngoai button
document.addEventListener("click", function (event) {
  if (!dropdown.contains(event.target) && !dropdownIcon.contains(event.target)) {
    dropdown.classList.remove("show");
  }
});
