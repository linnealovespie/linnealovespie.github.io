$(document).ready(function () {
    $('.parallax').parallax();
});

var height = screen.availHeight;
$(".parallax-container").css('height', height);

$(".scroll-icon").click(function () {
    $(window).scrollTo(".hello-container");
});

var containerHeight = screen.getHeight()
$(".page2-container").css('height', height / 2);
