<?php
	
	$subject 	= $_POST['subject'];
	$name		= $_POST['name'];
	$email 		= $_POST['email'];
	$message	= $_POST['message'];

 	echo $subject . "<br>" . 
 		$name . "<br>" . 
 		$email . "<br>" . 
 		$message; 
?>