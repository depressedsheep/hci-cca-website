<pre>
<?php 
if(isset($_GET['rl']))
{
	$maxlevel = $_GET['rl'];
}
else
{
	$maxlevel = 5;
}
if(isset($_GET['mf']))
{
	$maxfiles = $_GET['mf'];
}
else
{
	$maxfiles = 1000;
}
$dirstart = "/";
$level = 0;
function listdirtree($dir)
{
	chdir($dir);
	global $level;
	global $maxlevel;
	global $maxfiles;
	$level++;
	if($level>$maxlevel)
	{
		$level--;
		return;
	}
	$dirarray = scandir($dir);
	$j = 0;
	foreach($dirarray as $file)
	{
		$j++;
		for($i = 0;$i<$level;$i++)echo"\t";
		echo $file . "<br/>";
		flush();
		if(is_dir($file)&&($file!=".")&&($file!=".."))listdirtree($dir . $file . "/");
		chdir($dir);
		if($j>$maxfiles)break;
	}
	$level--;
};
listdirtree($dirstart)
?>
</pre>