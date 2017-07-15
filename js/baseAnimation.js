$(document).ready(function () {
    $('.parallax').parallax();
     $(".button-collapse").sideNav();
});

//sets the pages to the height of the scree
var height = $(window).height() - 64;
$(".parallax-container").css('height', height);
$(".page2-container").css('min-height', height);
//$(".about-container").css('min-height', height * .66);

//centers the "call to action" on the first page
var callContainer = (height - $(".call-container").height() - 64) / 2;
$(".call-container").css('margin-top', callContainer);

var containerHeight = screen.getHeight()
$(".page2-container").css('height', height / 2);
