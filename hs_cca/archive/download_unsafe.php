<?php
header('Content-Type: application/octet-stream');
$homepage = file_get_contents($_GET["file"]);
echo $homepage;
?>
