$(document).ready(function () {
	$('.hamburger').click(function () {
		$('#sidebar-wrapper').css("margin-left", "-250px").css("margin-top", "-60px");
		$('.hamburger').css("margin-left", "-1000px");
	});
	$('#exit').click(function () {
		$('#sidebar-wrapper').css("margin-left", "-1000px");
		$('.hamburger').css("margin-left", "0px");
	});
	$(".element").typed({
		strings: ["Designer. ^1000Programmer. ^1000Adventurer. }"],
		typeSpeed: 0,
		showCursor: false,
	});
});