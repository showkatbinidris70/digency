// nav scroll start
$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".nav").addClass("nav-scrolled");
    console.log("OK");
  } else {
    $(".nav").removeClass("nav-scrolled");
  }
});
// nav scroll end
