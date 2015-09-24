$(document).ready(function () {
  $('.hamburger').click(function () {
    $('#sidebar-wrapper').css("margin-left", "-250px").css("margin-top", "-60px");
  });
  $('#exit').click(function () {
    $('#sidebar-wrapper').css("margin-left", "-1000px");
  });
});