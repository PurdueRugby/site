$(document).ready(function() {
    setContentView();
    setInstaView();
    setInstaTime();

    $.get('drive.php', function(doc){
        var html = $.parseHTML(doc);

        console.log(html);

        var text = html[8].content;
        //var text = $(html[7])[0].innerText;

        //console.log(text.length);
        //console.log(otherText);
        //
        //if (text == '') {
        //    console.log('here');
        //    text = otherText;
        //}
        text = text.split('#');

        $('#driveHeader').text(text[0]);
        $('#driveContent').text(text[1]);
    });
});

$(window).resize(function() {
    setContentView();
    setInstaView();
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
    var intsaWrapper = $('#insta-wrapper');
    var twitter = $('#twitter');

    var size = widj.width() + 2;
    var margin = (intsaWrapper.width() - size - 20) / 2;


    insta.css({
        width: size,
        marginLeft: margin
    });
    twitter.css({
        width: size,
        marginLeft: margin
    });
}


