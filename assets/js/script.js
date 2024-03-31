//smooth scrool de pdf
// $(document).ready(function () {
//     $("a").on('click', function (event) {
//         if (this.hash !== "") {
//             event.preventDefault(); var hash = this.hash;
//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 200, function () {
//                 window.location.hash = hash;
//             });
//         }
//     });
// });

// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))