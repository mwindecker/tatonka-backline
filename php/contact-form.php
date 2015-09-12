<?php
	require 'phpmailer/PHPMailerAutoload.php';

	$mail = new PHPMailer;

	//$mail->SMTPDebug = 3; // Enable verbose debug output

	$mail->isSMTP(); // Set mailer to use SMTP
	$mail->Host = 'smtp.gmail.com'; // Specify main and backup SMTP servers
	$mail->SMTPAuth = true; // Enable SMTP authentication
	$mail->Username = 'marcus.windecker@gmail.com'; // SMTP username
	$mail->Password = 'sc1dbr3t4'; // SMTP password
	$mail->SMTPSecure = 'tls'; // Enable TLS encryption, `ssl` also accepted
	$mail->Port = 587; // TCP port to connect to

	$mail->From = 'marcus.windecker@gmail.com'; //set FROM address to be used in header
	$mail->FromName = 'Mailer'; //set FROM NAME
	$mail->addAddress('marcus.windecker@gmail.com', 'Joe User'); // Add a recipient
	$mail->addAddress('marcus.windecker@gmail.com'); // Name is optional
	$mail->addReplyTo('marcus.windecker@gmail.com', 'Information'); //set REPLY TO email address and name
	$mail->addCC('marcus.windecker@gmail.com'); //set CC address
	$mail->addBCC('marcus.windecker@gmail.com'); //set BCC address

	//$mail->addAttachment('/var/tmp/file.tar.gz'); // Add attachments
	//$mail->addAttachment('/tmp/image.jpg', 'new.jpg'); // Optional name
	//$mail->isHTML(true); // Set email format to HTML

	$mail->Subject = 'Here is the subject'; //set the message subject
	$mail->Body    = 'This is the HTML message body'; //set the message body
	$mail->AltBody = 'This is the body'; //set the message alt body(?)

	if(!$mail->send()) {
	    echo 'Message could not be sent.';
	    echo 'Mailer Error: ' . $mail->ErrorInfo;
	} else {
	    echo 'Message has been sent';

	   	header("Location: ../index.phtml");
	}
?>