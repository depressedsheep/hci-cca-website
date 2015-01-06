<?php
	include "init.php";  //Basic init - session_start(), connect
	
	//this file contains the functions that most likely will be used by many files.
	function passhash($plaintext)
	{
		//Passwords will be added to a salt, then hashed
		/*old code: $hashed = hash("sha512", $plaintext);*/
        $salt = generateSalt(50);
        $crypted = crypt($plaintext, $salt);
        $whirled = hash("whirlpool", $salt.$crypted);
        $hashed = hash("sha512", $whirled.$salt);
        $hashedArray = array(
            "password" => $hashed,
            "salt" => $salt,
        );
		return $hashedArray;
	}

    function generateSalt($len)
    {
        var $i;
        //generate salt of length $len
        if(!$len)
        {
            $len = 50;
        }
        $text = '';
        $possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for($i=0; $i < $len; $i++)
        {
            $text .= substr($possible, floor(mt_rand(0, strlen($possible)-1)), 1);
        }
        return $text;
    }
	
	function loggedIn(){
		return isset($_SESSION['loggedin']);	
	}
	
	function registeredUsers(){
		$users = mysql_query("SELECT * FROM userdata");
		
		return mysql_num_rows($users);			
	}
	
	function onlineUsers(){
		//this is where PHP gets the time
		$timestamp = time();
		$timeout = $timestamp-$timeoutseconds;
		
		//insert the values
		$insert = mysql_query("INSERT INTO useronline VALUES('$timestamp','$REMOTE_ADDR','$PHP_SELF')") or die(mysql_error());
		if(!($insert)) {
			//print "Useronline Insert Failed";
		}
		
		//delete values when they leave
		$delete = mysql_query("DELETE FROM useronline WHERE timestamp<$timeout") or die(mysql_error());;
		if(!($delete)) {
		//	print "Useronline Delete Failed > ";
		}
		
		//grab the results
		$result = mysql_query("SELECT DISTINCT ip FROM useronline WHERE file='$PHP_SELF'") or die(mysql_error());;
		if(!($result)) {
			//print "Useronline Select Error > ";
		}
		
		//get the number of people online
		return mysql_num_rows($result);
	}

    function genKey($n)
    {
        if(!$n) $n = 50; //if not set, it will generate 50 char key

        //generate random key
        $k = generateSalt($n);
        //checksum (= hashCode($k) + 1)
        $check = hashCode($k) + 1;
        //append checksum to key
        $final = $k.strval($check);

        return $final;
    }

    function hashCode($str)
    {
        $n = strlen($str);
        $hash = 0;
        for ($i = 0; $i < $n; $i++) {
            $char = ord($k[$i]);
            $hash  = (($hash<<5)-$hash)+$char;
            $hash |= 0; // Convert to 32bit integer
        }
        $c = abs($hash)%7;

        return $c;
    }
	
	function jsAlert($msg){
		echo "<script>alert(".$msg.");</script>";
	}
?>