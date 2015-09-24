$(document).ready(function () {

  $("a.section2").click(function () {
    $("html, body").animate({
      scrollTop: $('#work').offset().top
    }, 1000);
    return false;
  });
  $("a.section3").click(function () {
    $("html, body").animate({
      scrollTop: $('#bio').offset().top
    }, 1000);
    return false;
  });
  $("a.section4").click(function () {
    $("html, body").animate({
      scrollTop: $('#contact').offset().top
    }, 1000);
    return false;
  });

});