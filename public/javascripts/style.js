$(document).ready(function() {
    setContentView();
    setInstaTime();
});

$(window).resize(function() {
    setContentView();
});

function setContentView() {
    var headerHeight = $('#header').height();
    var footerHeight = $('#footer').height();
    var windowHeight = $(window).height();
    var contentHeight = windowHeight - (headerHeight + footerHeight) - 27;

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

