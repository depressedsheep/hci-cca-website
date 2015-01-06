<?php
    ini_set('display_errors', 'On');
    //check POST string
    $errormsg = "No";
    $hasError = FALSE;
    if(isset($_POST["name"]) && $_POST["name"] != "") $name = $_POST["name"];
    else 
    {
        $errormsg .= " name";
        $hasError = TRUE;
    }
    if(isset($_POST["email"]) && $_POST["email"] != "") $email = $_POST["email"];
    else 
    {
        $errormsg .= " email";
        $hasError = TRUE;
    }
    if(isset($_POST["subject"]) && $_POST["subject"] != "") $subject = $_POST["subject"];
    else 
    {
        $errormsg .= " subject";
        $hasError = TRUE;
    }
    if(isset($_POST["msg"]) && $_POST["msg"] != "") $msg = $_POST["msg"];
    else 
    {
        $errormsg .= " msg";
        $hasError = TRUE;
    }
    if(isset($_POST["key"]) && $_POST["key"] != "") $key = $_POST["key"];
    else 
    {
        $errormsg = "POST string does not meet requirements";
        $hasError = TRUE;
    }
    if($hasError) exit($errormsg);
    else $errormsg = "";

    //validate
    function spamcheck($field)
    {
        //filter_var() sanitizes the e-mail
        //address using FILTER_SANITIZE_EMAIL
        $field=filter_var($field, FILTER_SANITIZE_EMAIL);

        //filter_var() validates the e-mail
        //address using FILTER_VALIDATE_EMAIL
        if(filter_var($field, FILTER_VALIDATE_EMAIL)) return TRUE;
        else return FALSE;
    }

    function keycheck($k)
    {
        $valid = TRUE;
        if(strlen($k) != 51) $valid = FALSE;
        $lastD = intval(substr($k, -1));
        if($lastD > 7 || $lastD < 1)  $valid = FALSE;

        $hash = 0;
        for ($i = 0; $i < 50; $i++) {
            $char = ord($k[$i]);
            $hash  = (($hash<<5)-$hash)+$char;
            $hash |= 0; // Convert to 32bit integer
        }
        $check = abs($hash)%7 + 1;
        if($check != $lastD) $valid = FALSE;

        if($valid) 
        {
            $keysused = file_get_contents('keys.log');
            $arr = explode('\n', $keysused);
            $test = array_search($k, $arr);
            if($test) $valid = FALSE;
        }

        return $valid;
    }

    if (!spamcheck($email))
    {
        $errormsg = "Email not valid";
        $hasError = TRUE;
    }
    else if (!keycheck($key)) 
    {
        $errormsg = "Key not valid. You may need to <a onclick='window.location.reload()'>refresh</a> the page.";
        $hasError = TRUE;
    }

    if($hasError) exit($errormsg);
    else
    {
        //write to log
        $logFile = 'qemails.log';
        date_default_timezone_set("Asia/Singapore");
        $Filetxt = "";
        $d = getDate();
        $timeStamp = "$d[mday]/$d[mon]/$d[year] $d[hours]:$d[minutes]:$d[seconds] SST ";
        $Filetxt .= $timeStamp;
        $Filetxt .= ": Name: $name, Email: $email, Subject: $subject\r\nMessage: $msg\r\n\r\n";

        //mailing
        /*
        ini_set('SMTP','localhost'); 
        ini_set('sendmail_from', 'example@gmail.com'); //for testing= purposes only
        $to = "example@gmail.com"; //for testing purposes only
        $headers  = 'From: webmaster@example.com' . PHP_EOL; //"\r\n";
        $headers .= "Reply-To: $email" . PHP_EOL; //"\r\n" .
        //$headers .= 'Cc: example2@example.com' . "\r\n";
        //$headers .= 'Bcc: example3@example.com' . "\r\n";
        $headers .= 'X-Mailer: PHP/' . phpversion();

        mail($to, $subject, $msg, $headers);
        */

        //mailing not working
        if(file_put_contents($logFile, $Filetxt, FILE_APPEND | LOCK_EX))
        {
            if(file_put_contents('keys.log', "$key\r\n", FILE_APPEND | LOCK_EX))
            {
                echo "OK";
            }
            else
            {
                exit("Error in write to keys log");
            }
        }
        else
        {
            exit("Error in write to emails log");
        }
    }
?>