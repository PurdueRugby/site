function checkPass() {
    var pass1 = document.getElementById('pass1').value;
    var pass2 = document.getElementById('pass2').value;
    var message = document.getElementById('confirmPass');
    if(pass1 == pass2 && pass1.length > 7) {
        message.style.color = "#006400";
        message.innerHTML = "Passwords Match!";
        return true;
    } else if(pass1 == pass2 && pass1.length < 8) {
        message.style.color = "#ff0000";
        message.innerHTML = "Password must be at least 8 characters.";
        return false;
    } else if(pass1 == "") {
        message.style.color = "#ff0000";
        message.innerHTML = "Please enter a valid password first.";
        return false;
    } else {
        message.style.color = "#ff0000";
        message.innerHTML = "Passwords Do Not Match!";
        return false;
    }
}
function alerting(textAlert) {
    bootstrap_alert.warning(textAlert);
}
function subm() {
    var name = document.getElementById('fname').value;
    var address = document.getElementById('address').value;
    var fullname = name.split(" ");
    var atPos = address.indexOf("@");
    var dotPos = address.lastIndexOf(".");
    bootstrap_alert = function() {};
    bootstrap_alert.warning = function(textAlert) {
        $('#alert_placeholder').html('<div class="alert alert-danger" role="alert"><a class="close" data-dismiss="alert">×</a><span>'+textAlert+'</span></div>');
    }
    if (!checkPass()) alerting("First check if your passwords match.");
    else if (fullname.length < 2) alerting("You must enter both your first and last name.");
    else if (fullname[0] == "" || fullname[1] == "") alerting("You did not enter your first or last name.");
    else if (fullname[0].substring(0,1) != fullname[0].substring(0,1).toUpperCase() || fullname[0].length < 2) {
        alerting("The First Name you entered is not valid.");
    }
    else if (fullname[1].substring(0,1) != fullname[1].substring(0,1).toUpperCase() || fullname[1].length < 2) {
        alerting("The Last Name you entered is not valid.");
    }
    else if (atPos<1 || dotPos< atPos+2 || dotPos+2 >=address.length) alerting("Not a valid e-mail address.");
    // else if (grecaptcha.getResponse() == "") alerting("You must checkmark the recaptcha.");
    else {
        document.getElementById("sendId").value = name + ", " + address + ", " + document.getElementById('pass1').value;
        document.forms["user"].submit();
    }
}
