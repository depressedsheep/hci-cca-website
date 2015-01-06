<pre>
<?php
$file = fopen($_GET["file"],"r");
while(!feof($file))
{
	echo htmlentities(fread($file,8192),ENT_QUOTES);
}
fclose($file);
?>
</pre>
