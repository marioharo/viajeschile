// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Cambio de color de fondo al navbar cuando se haga scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 20) {
        $(".navbar").addClass("is-scrolling");
    } else {
        $(".navbar").removeClass("is-scrolling");
    }
});

// Al hacer click en el título de las cards se esconde el texto
$(".card-title").click(function () {
    $(".card-text").toggle({
      duration: 500,
    }
    )
  });