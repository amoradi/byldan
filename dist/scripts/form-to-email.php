<?php
	if(!isset($_POST['submit'])) {
		//This page should not be accessed directly. Need to submit the form.
		echo "error; you need to submit the form!";
	}

	$visitor_name = strip_tags(trim($_POST['name']));
	$visitor_email = strip_tags(trim($_POST['email']));
	$visitor_phone = strip_tags(trim($_POST['phone']));
	$visitor_message = strip_tags(trim($_POST['message']));
	
	$email_from = "inquiries@byldan.co";
	$email_subject = htmlspecialchars($visitor_name);
	$email_body = "New inquiry for Byldan!\n\n" .
	"email: " . htmlspecialchars($visitor_email) . "\n" .
	"name: " . htmlspecialchars($visitor_name) . "\n" .
	"phone: " . htmlspecialchars($visitor_phone) . "\n" .
	"message: " . htmlspecialchars($visitor_message);

	$to = "hello@byldan.co";
	$headers = "From: " . $email_from . "\r\n";
	$headers .= "Reply-To: " . $visitor_email . "\r\n";

	function IsInjected($str) {
	    $injections = array('(\n+)',
	           '(\r+)',
	           '(\t+)',
	           '(%0A+)',
	           '(%0D+)',
	           '(%08+)',
	           '(%09+)'
	           );
	                
	    $inject = join('|', $injections);
	    $inject = "/$inject/i";
	     
	    if (preg_match($inject,$str)) {
	      return true;
	    } else {
	      return false;
	    }
	}
 
	if (IsInjected($visitor_email)) {
    	echo "Bad email value!";
    	exit;
	}

	// email to hello@byldan.co
	mail($to, $email_subject, $email_body, $headers);

	//done. redirect to thank-you page.
	header('Location: /thank-you.html');
 
 ?>
