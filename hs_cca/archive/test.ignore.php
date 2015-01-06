<?php
    function passhash($plaintext)
	{
		//Passwords will be added to a salt, then hashed
		/*old code: $hashed = hash("sha512", $plaintext);*/
        $salt = generateSalt(50);
        echo "<br>Salt: ".$salt."<br/>";
        $crypted = crypt($plaintext, $salt);
        echo "crypt: ".$crypted."<br/>";
        $whirled = hash("whirlpool", $salt.$crypted);
        echo "whirlpool: ".$whirled."<br/>";
        $hashed = hash("sha512", $salt.$whirled);
		$hashedArray = array(
            "password" => $hashed,
            "salt" => $salt,
        );
		return $hashedArray;
	}

    function generateSalt($len)
    {
        //generate salt of length $len
        if(!$len)
        {
            $len = 50;
        }
        $text = '';
        $possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for($i=0; $i < $len; $i++)
        {
            $text .= substr($possible, floor(mt_rand(0, strlen($possible))), 1);
        }
        return $text;
    }
    
    echo "q1w2e3r4t5";
    $pw = passhash("q1w2e3r4t5");
    echo "<br>hashed = ".$pw[password]."<br>".$pw[salt];
?>
<style>
    *{font-family: Consolas;}
</style>