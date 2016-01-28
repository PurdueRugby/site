$(document).ready(function() {
    setContentView();
    setInstaView();
    setInstaTime();
});

$(window).resize(function() {
    setContentView();
});

function setContentView() {
    var headerHeight = $('#header').height();
    var footerHeight = $('#footer').height();
    var windowHeight = $(window).height();
    var contentHeight = windowHeight - (headerHeight + footerHeight) - 10;

    $('#content').css({
        height: contentHeight
    });


}

function setInstaTime() {
    var rand = Math.floor(Math.random()*59) + 1;
    var instaTime = $('#insta-time');
    console.log(rand + 'm');
    instaTime.html(rand + 'm');
}

function setInstaView() {
    var widj = $('#insta-widget');
    var insta = $('#insta');
    var wrapper = $('#insta-wrapper');

    var size = widj.width() + 2;
    var margin = (wrapper.width() - size) / 2;


    insta.css({
        width: size,
        marginLeft: margin,
        marginRight: margin
    });


}

