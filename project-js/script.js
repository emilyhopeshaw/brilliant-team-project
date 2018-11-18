$(".left").click(function() {
  $("#carousel-images").carousel("prev");
});

$(".right").click(function() {
  $("#carousel-images").carousel("next");
});

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
});
