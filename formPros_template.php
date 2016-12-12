<?php  ('Access-Control-Allow-Origin: *');
$server = "";
	$username = "";
	$password = "";
	$database = "";
	 
	$con = mysql_connect($server, $username, $password) or die ("Could not connect: " . mysql_error());
	 
	mysql_select_db($database, $con);
	 
	$email = mysql_real_escape_string($_POST["email"]);
	 
	$sql = "INSERT INTO data (email) ";
	$sql .= "VALUES ('$email')";
	 
	if (!mysql_query($sql, $con)) {
	    die('Error: ' . mysql_error().' failed to connect to'. $databse);
	} else {
	    echo "<h2>Your email address has been added <br /> Thank you for taking the time to fill out this form.</h2>";
	}
	 
	mysql_close($con);
?>