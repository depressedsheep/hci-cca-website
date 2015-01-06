<?php
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
            $text .= substr($possible, floor(mt_rand(0, strlen($possible)-1)), 1);
        }
        echo strlen($text)."<br/>";
        return $text;
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
        echo $str."<br>".$n."<br>";
        $hash = 0;
        for ($i = 0; $i < $n; $i++) {
            $char = ord($k[$i]);
            $hash  = (($hash<<5)-$hash)+$char;
            $hash |= 0; // Convert to 32bit integer
        }
        $c = abs($hash)%7;
        echo $c."<br>";
        return $c;
    }

    echo generateSalt(50);
?>

<style>*{font-family: Consolas;}</style>