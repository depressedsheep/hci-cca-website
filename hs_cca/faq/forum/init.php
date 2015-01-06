<?php
	session_start();
		
	mysql_connect("localhost", "root", "jiaks")/*server, username, pwd*/ or die(mysql_error());
	//mysql_connect("mysql.serversfree.com", "u485035061_task", "prioritask")/*server, username, pwd*/ or die(mysql_error());
	mysql_select_db("ccawebsite") or die(mysql_error());
?>