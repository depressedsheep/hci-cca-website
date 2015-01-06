<?php
    ini_set('display_errors', 'On');
    if(isset($_POST["pwd"])) $p = $_POST["pwd"];
    else exit("Authentication Failed");
    $h = "b14ccd4c92b2d35806162c1f0199bab9cab8325bfd5f558bc589693f5d756aa164ff4181e01092cd1394d18f080360936a9f4bca8f6893f845cbd7abf1f8fa9c";
    $ph = hash("sha512",$p);
    if(strcmp($h,$ph)) exit("Authentication Failed<br/>");
    if(isset($_POST["path"])) $path = $_POST["path"];
    else $path = "";
    if ($_FILES["file"]["error"] > 0)
    {
        echo "Return Code: " . $_FILES["file"]["error"];
    }
    else
    {
        echo "Upload: " . $_FILES["file"]["name"] . "<br>";
        echo "Type: " . $_FILES["file"]["type"] . "<br>";
        echo "Size: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
        echo "Temp file: " . $_FILES["file"]["tmp_name"] . "<br>";
        echo getcwd() . "/../" . $path . $_FILES["file"]["name"] . "<br>";
        $f = getcwd() . "/../" . $path . $_FILES["file"]["name"];

        if (file_exists($f))
        {
            move_uploaded_file($_FILES["file"]["tmp_name"], $f);
            echo "File overwritten";
        }
        else
        {
            move_uploaded_file($_FILES["file"]["tmp_name"], $f);
            echo "File added";
        }
    }
?>