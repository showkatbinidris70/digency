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

// after scrolling indicate active nav-link start
$(document).on("scroll", function () {
  const sections = $("section");
  const navLinks = $(".nav-link");

  let currentSection = "";

  sections.each(function () {
    const sectionTop = $(this).offset().top;
    const sectionHeight = $(this).outerHeight();
    if ($(window).scrollTop() >= sectionTop - sectionHeight / 3) {
      currentSection = $(this).attr("id");
    }
  });

  navLinks.each(function () {
    $(this).removeClass("active");
    if ($(this).attr("href").includes(currentSection)) {
      $(this).addClass("active");
    }
  });
});
// after scrolling indicate active nav-link end

// counter up start
$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 2000,
  });
});
// counter up end

// copy right year start
const date = new Date();
const year = date.getFullYear();
document.getElementById("year").innerHTML = year;
// copy right year end
