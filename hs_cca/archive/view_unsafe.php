<pre>
<?php
$homepage = file_get_contents($_GET["file"]);
echo htmlentities($homepage,ENT_QUOTES);
?>
</pre>
