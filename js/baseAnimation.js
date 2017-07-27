$(document).ready(function () {
    $('.parallax').parallax();
     $(".button-collapse").sideNav();
    $('.tooltipped').tooltip({html: true});
});

//sets the pages to the height of the scree
var height = $(window).height() - 64;
$("#landing-parallax").css('height', height);
$("#section-parallax").css('height', height/2);
$("#section-parallax1").css('height', height/2);

//$(".page-container").css('min-height', height);
//$(".about-container").css('min-height', height * .66);

//centers the "call to action" on the first page
var callContainer = (height - $(".call-container").height() - 64) / 2;
$(".call-container").css('margin-top', callContainer);
$(".section-container").css('margin-top', callContainer/1.5);

var containerHeight = screen.getHeight()
$(".page2-container").css('height', height / 2);
