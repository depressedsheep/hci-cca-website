<?php
header('Content-Type: application/octet-stream');
$file = fopen($_GET["file"],"r");
while(!feof($file))
{
	echo fread($file,8192);
}
fclose($file);
?>
