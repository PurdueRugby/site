/**
 * Created by hbeckeri on 1/19/16.
 */

var doEmail = true;

function emailRecruit() {
    var first_name = $('#first_name');
    var last_name = $('#last_name');
    var email = $('#email');
    var age = $('#age');
    var country = $("#country option:selected");
    var hometown = $("#hometown");
    var status = $("#status option:selected");
    var weight = $('#weight');
    var height = $('#height');
    var experience = $('#experience');

    var didPass = true;
    var message = "";

    //First Name
    if (first_name.val() == '') {
        message += ' |First Name|';
    }
    //Last Name
    if (last_name.val() == '') {
        message += ' |Last Name|';
    }
    //Email
    if (email.val() == '' || email.val().indexOf('@') == -1 || email.val().indexOf('.') == -1) {
        message += ' |Email|';
    }
    //Age
    if (age.val() == '') {
        message += ' |Age|';
    } else if (isNaN(age.val())) {
      message += ' |Age mus be a number|';
    }
    //Country
    if (country.text() == "Please select country"){
        message += ' |Country|';
    }
    //Hometown
    if(hometown.val() == '') {
        message += ' |Hometown|';
    }
    //Weight
    if (weight.val() == '') {
        message += ' |Weight|';
    }
    //Height
    if (height.val() == '') {
        message += ' |Height|';
    }

    if (message != '') {
        showMessage("Required: " + message, true);
    } else if (doEmail) {
        $.ajax({
            method: "POST",
            url: "http://web.ics.purdue.edu/~rugby/test.php",
            data: {first_name: first_name.val(), last_name: last_name.val(), email: email.val(), age: age.val(),
                country: country.text(), hometown: hometown.val(), status: status.val(), weight: weight.val(), height: height.val(), experience: experience.val()
            }
        }).done(function() {
            first_name.val('');
            last_name.val('');
            email.val('');
            age.val('');
            weight.val('');
            height.val('');
            experience.val('');
            hometown.val('');
            clearMessage();
            showMessage("Thank you! The recruitment head has been notified.", false);
        });
    }
}

$('#submit_recruit').click(function() {
    clearMessage();
    emailRecruit();
});

$(document).ready(function() {
    $("#country").flagStrap();
});

function showMessage(msg, warning) {
    if (warning) {
        $("#div-message").append('<div class="alert alert-danger" role="alert">' +
            '<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>' +
            '<span class="sr-only">Error:</span> ' + msg + '</div>');
    } else {
        $("#div-message").append('<div class="alert alert-success" role="alert">' +
            '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>' +
            '<span class="sr-only">Error:</span> ' + msg + '</div>');
    }



}
function clearMessage() {
    $("#div-message").empty();
}


