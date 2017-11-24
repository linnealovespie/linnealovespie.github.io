$(document).ready(function () {
    $('.parallax').parallax();
    $(".button-collapse").sideNav();
    $('.tooltipped').tooltip({
        html: true
    });
});

//sets the pages to the height of the scree
var height = $(window).height() - 64;
$("#landing-parallax").css('height', height);
$("#section-parallax").css('height', height / 2);
$("#section-parallax1").css('height', height / 2);
$("#section-parallax2").css('height', height / 2);


//$(".page-container").css('min-height', height);
//$(".about-container").css('min-height', height * .66);

//centers the "call to action" on the first page
var callContainer = (height - $(".call-container").height() - 64) / 2;
$(".call-container").css('margin-top', callContainer);
$(".section-container").css('margin-top', callContainer / 1.5);

var containerHeight = $(window).height()
$(".page2-container").css('height', height);

/*Filtering script*/
/*
document.addEventListener('click', function (e) {
    var button = e.target;

    if (button.getAttribute('data-reset') === 'true') {
        // Reset the filters
        var filter = button.getAttribute('data-filter');
        resetFilter(filter);
    } else {
        // Filter the tag
        var filter = button.getAttribute('data-filter');
        var tag = button.getAttribute('data-filter-tag');
        resetFilter(filter);
        filterTag(filter, tag);
    }
})*/

// Filter tag
/*function filterTag(filter, tag) {
    var items = document.querySelectorAll('.' + filter + ' > li');
    console.log(items)

    for (var i = 0; i < items.length; i++) {
        var itemTags = items[i].getAttribute('data-tags');

        // Catch case with no tags
        if (itemTags != null) {
            if (itemTags.indexOf(tag) < 0) {
                items[i].setAttribute('data-toggle', 'off');
            }
        }
    }
}

// Reset filters
function resetFilter(filter) {
    var items = document.querySelectorAll('.' + filter + ' > li');

    for (var i = 0; i < items.length; i++) {
        items[i].setAttribute('data-toggle', 'on');
    }
}*/

var mixer = mixitup('.portfolio-container');
