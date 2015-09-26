<?php
	//establish sanitized variables from contact form
	$subject 	= trim(strip_tags($_POST['subject']));
	$name 		= trim(strip_tags($_POST['name']));
	$email 		= trim(strip_tags($_POST['email']));
	$message 	= trim(strip_tags($_POST['message']));

	//set timezone
	date_default_timezone_set('America/Denver');
	$rightNow = date('m/d/Y h:i:s a');

	require 'phpmailer/PHPMailerAutoload.php';
	$mail = new PHPMailer;

	//$mail->SMTPDebug = 1; // Enable debug output

	//don't change these. TODO: dynamic based on environment
	$mail->isSMTP(); // Set mailer to use SMTP
	$mail->Host = 'localhost';
	$mail->SMTPAuth = true; // Enable SMTP authentication
	$mail->Username = 'mailer@tatonkabackline.com';
	$mail->Password = 'mailerCH$NG#M#';
	$mail->SMTPSecure = 'tls'; // Enable TLS encryption, `ssl` also accepted
	$mail->Port = 25; // TCP port to connect to

	$mail->From = 'mailer@tatonkabackline.com'; //set FROM address to be used in header
	$mail->FromName = 'Web Form - ' . $name; //set FROM NAME
	$mail->addAddress('tonnes@tatonkabackline.com'); // Add a recipient, Name is optional
	$mail->addReplyTo($email, $name); //set REPLY TO email address and name
	//$mail->addCC('marcus.windecker@gmail.com'); //set CC address
	//$mail->addBCC('marcus.windecker@gmail.com'); //set BCC address

	//$mail->addAttachment('/var/tmp/file.tar.gz'); // Add attachments
	//$mail->addAttachment('/tmp/image.jpg', 'new.jpg'); // Optional name
	//$mail->isHTML(true); // Set email format to HTML

	$mail->Subject = 'Web Form Contact - ' . $subject; //set the message subject
	$mail->Body    = "There's been a new contact on the Tatonka Backline contact form with the following information:" .
						"\r\n" .
						"\r\nTime: " . $rightNow .
						"\r\nName: " . $name .
						"\r\nEmail: " . $email .
						"\r\nSubject: " . $subject . 
						"\r\nMessage: " . $message;
	//$mail->AltBody = 'This is the body'; //set the message alt body(?)

	//check that all values are set
	if (!$message == "" && !$name == "" && !$subject == "" && !$email == "") {
		if(!$mail->send()) {
		    /*echo 'Message could not be sent.<br>';
		    echo 'Mailer Error: ' . $mail->ErrorInfo;*/

		    header('Location: ../index.phtml?form=failure');
		} else {
		    //echo 'Message has been sent';

		    header('Location: ../index.phtml?form=success');
		}
	} else {
		header('Location: ../index.phtml?form=null');
	}