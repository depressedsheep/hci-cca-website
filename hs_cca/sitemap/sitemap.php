<title>Sitemap</title>
<?php
/*
File Name: sitemap.php
Author: Gary White
Obtained from: http://www.apptools.com/phptools/dynamicsitemap.phps
Last modified: April 25, 2006 (by Gary White), Jan 12 2014 (by CCA Website Dev Team)

Copyright (C) 2004-2005  Gary White

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License in the included gpl.txt file for
details.

See the readme.txt file for installation and usage.

May 12, 2005 - Modified getTitle function to a slighly cleaner
regular expression for extracting the title from files.

April 25, 2006 - Fixed small bug to correct display when starting
in a directory other than the site's root.
*/

/*---NOTE: Program has been edited to suit website functions---*/

$startin="/hs_cca";

//Images not used

// The $types array contains the file extensions of files you want to
// show in the site map.
$types=array(
	".php",
	".html",
	".htm"
);

// The $htmltypes is an array containing the file types of HTML files,
// that is files that will contain the HTML <title> tag. The script will
// try to extract the <title> from these files. Any file types indexed
// that are NOT in this array will simply use the file name and not 
// attempt to get the title.
$htmltypes=array(
	".php",
	".html",
	".htm"
);

$allow=array( //instead of ignore
    /*
    "index.php",
    "index.html",
    //*/
    "about",
    "cca",
    "faq",
    "guides",
    "tips",
    "life",
    "report",
    "sitemap",
    "stories",
    "articles",
    "testimonials",
    "feature",
    "aesthetics",
    "clubs",
    "sports",
    "ug",
    "badminton", "basketball", "canoeing", "crosscountry", "fencing", "gymnastics", "judo", "shooting", "softball", "squash", "table tennis", "tennis", "trackandfield", "volleyball", "waterpolo", "wushu", "ncc", "npcc", "scouts", "sjab", "artclub", "band", "chinesedrama", "chineseorchestra", "choir", "englishdrama", "pianoensemble", "stringorchestra", "chinesecalligraphy", "chinesechess", "ec3", "englishdebate", "internationalchess", "library", "mediatech", "robotics", "socrates", "weiqi", "youthflyingclub"
);

/*
==============================================
Actual Code (edited)
==============================================
*/
$id=0;
//echo "<ul id=\"list$id\">\n";
$id++;
$divs="";
if(substr($startin,strlen($startin)-1,1)=="/")
	$startin=trim($startin,"/");
foreach($types as $type){
	if (file_exists($_SERVER['DOCUMENT_ROOT']."$startin/index$type")){
		$index=$_SERVER['DOCUMENT_ROOT']."$startin"."/index$type";
		break;
	}
}
$types=join($types,"|");
$types="($types)";
if(!is_array($htmltypes))
	$htmltypes=array();
if(count($htmltypes)==0)
	$htmltypes=$types;

//echo "";
echo "<strong><a href=\"$startin/\">Hwa Chong CCA Website</a></strong>\n";
showlist($_SERVER['DOCUMENT_ROOT']."$startin");
//echo "\n";
/*
if (is_array($divs)){
	$divs="'".join($divs,"','")."'";
	echo "<script type=\"text/javascript\">\n";
	echo "//<![CDATA[\n";
	echo "d=Array($divs);\n";
	echo "for (i=0;i<d.length;i++){\n";
	echo "\ttoggle('list'+d[i],'img'+d[i]);\n";
	echo "}\n";
	echo "//]]>\n";
	echo "</script>\n";
}
//*/

function showlist($path){
	global $allow, $id, $divs, $imgpath, $types, $startin;
	$dirs=array();
	$files=array();
	if(is_dir($path)){
		if ($dir = @opendir($path)) {
			while (($file = readdir($dir)) !== false) {
				if ($file!="." && $file!=".." && in_array($file,$allow)){
					if (is_dir("$path/$file")){
						if (file_exists("$path/$file/index.php"))
							$dirs[$file]=getTitle("$path/$file/index.php");
						elseif (file_exists("$path/$file/index.html"))
							$dirs[$file]=getTitle("$path/$file/index.html");
						elseif (file_exists("$path/$file/index.htm"))
							$dirs[$file]=getTitle("$path/$file/index.htm");
						else
							$dirs[$file]=$file;
					} else {
						if (ereg("$types$", $file)){
							$files[$file]=getTitle("$path/$file");
							if (strlen($files[$file])==0)
								$files[$file]=$file;
						}
					}
				}
		  }  
		  closedir($dir);
		}
		natcasesort($dirs);
		$url=str_replace($_SERVER['DOCUMENT_ROOT'],"",$path);
        $n=substr_count("$url/$","/");
		$base=substr_count($startin,"/")+1;
		$indent=str_pad("",$n-1,"\t");
		//echo "$indent<ul id=\"list$id\">\n";
		if ($n>$base)
			$divs[]="$id";

		foreach($dirs as $d=>$t){
			$id++;
			echo "$indent ";
			echo " <strong><a href=\"$url/$d/\">$t</a></strong>\n";
			showlist("$path/$d");
			//echo "$indent \n";
		}
		natcasesort($files);
		$id++;
		foreach($files as $f=>$t){
			echo "$indent <a href=\"$url/$f\">$t</a> ";
		}
		//echo "$indent\n";
	}
}

function getTitle($file){
	global $htmltypes;
	$title="";
	$p=pathinfo($file);
	if(!in_array(strtolower($p['extension']),$htmltypes)){
		$f=file_get_contents($file);
		if(preg_match("'<title>(.+)</title>'i", $f, $matches)){
			$title=$matches[1];
		}
	}
    
	$title=$title?$title:basename($file);
    $jiaks = explode("(",$title);
    $titl = explode(")",$jiaks[1]);
    $title = $titl[0];
	return trim(strip_tags($title));
}
?>
