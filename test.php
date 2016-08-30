# Original Author: Bryce Elegy (Big Bang?)
# Modified by: Harrison Beckerich (Jaunary 2016)

<?php
	$first_name = $_POST['first_name'];
	$last_name = $_POST['last_name'];
	$email= $_POST['email'];
	$age = $_POST['age'];
	$country = $_POST['country'];
	$hometown = $_POST['hometown'];
	$status = $_POST['status'];
	$weight = $_POST['weight'];
	$height = $_POST['height'];
	$experience = $_POST['experience'];
	
	$email_message = "High Fucking Tech Purdue Rugby Recruitment Form\n\n";
	//$email_to = "hbeckeri@purdue.edu";
	$email_to = "rhoner@purdue.edu";
	$email_subject = "Oh my! It's a new rugby recruit.";
	
	$email_message .= "First Name: ".$first_name."\n";
	$email_message .= "Last Name: ".$last_name."\n";
	$email_message .= "Email: ".$email."\n";
	$email_message .= "\n";
	$email_message .= "Age: ".$age."\n";
	$email_message .= "Weight: ".$weight."\n";
	$email_message .= "Height: ".$height."\n";
	$email_message .= "\n";
	$email_message .= "Country: ".$country."\n";
	$email_message .= "Hometown: ".$hometown."\n";
	$email_message .= "\n";
	$email_message .= "Status: ".$status."\n";
	$email_message .= "Experience: ".$experience."\n";
	$email_message .= "\n###################################\n\n \"Everyone is doing a great job! Except Cody\" - Jeremy";
	
	mail($email_to, $email_subject, $email_message);  
	echo "Email sent";
?>
