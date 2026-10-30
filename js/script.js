// init Isotope
var $products = $('.all-products').isotope({
  // options
  originLeft: false
  //   masonry: {
  //     columnWidth: '.products-sizer'
  //   }

});

// filter items on button click
$('.filter-button-group').on('click', 'button', function () {
  var filterValue = $(this).attr('data-filter');
  $products.isotope({ filter: filterValue });
});



const swiper = new Swiper('.swiper', {

  //Optional parameters
  direction: 'horizontal',
  loop: true,
  
  //If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  //Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    640: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 15,
    },
  },
});

// { <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"></script>
// <script>
//     const input = document.querySelector("#phone");
//     window.intlTelInput(input, {
//         initialCountry: "auto",
//         geoIpLookup: function (callback) {
//             fetch('https://ipinfo.io/json?token=<YOUR_TOKEN>', { headers: { 'Accept': 'application/json' } })
//                 .then((resp) => resp.json())
//                 .then((resp) => { callback(resp.country); })
//                 .catch(() => { callback('us'); });
//         },
//         utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
//         allowDropdown: true,
//         autoHideDialCode: true,
//         autoPlaceholder: "polite",
//         dropdownContainer: document.body,
//         excludeCountries: ["us"],
//         formatOnDisplay: true,
//         hiddenInput: "full_number",
//         nationalMode: true,
//         separateDialCode: true,
//         preferredCountries: ['us', 'gb', 'ca'],
//         customContainer: "intl-tel-input separate-dial-code",
//         separateDialCode: true,
//         initialCountry: "auto",
//         excludeCountries: ["af", "al"],
//         geoIpLookup: function (callback) {
//             fetch("https://ipinfo.io", {
//                 headers: { "Accept": "application/json" }
//             }).then((resp) => resp.json()).then((resp) => {
//                 const countryCode = (resp && resp.country) ? resp.country : "us";
//                 callback(countryCode);
//             });
//         },
//         utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
//         placeholderNumberType: "MOBILE",
//         separateDialCode: true
//     });
// </script> }