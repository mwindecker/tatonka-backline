<?php 
	if(mail("marcus.windecker@gmail.com", "test subject", "test message", "From: marcus.windecker@gmail.com")) {

		echo "yes";
	} else {
		echo "no";
	}
?>