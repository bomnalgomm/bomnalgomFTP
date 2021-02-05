<?
if (!defined("__HEAD_SUB__")) {

define("__HEAD_SUB__",TRUE);
header("Content-Type: text/html; charset=utf-8");
$gmnow = gmdate("D, d M Y H:i:s") . " GMT";
header("Expires: 0"); // rfc2616 - Section 14.21
header("Last-Modified: " . $gmnow);
header("Cache-Control: no-store, no-cache, must-revalidate"); // HTTP/1.1
header("Cache-Control: pre-check=0, post-check=0, max-age=0"); // HTTP/1.1
header("Pragma: no-cache"); // HTTP/1.0

//_Page Class 사용여부 체크후 Page Class 정보 가져옴
if(isset($_Page)){
	$_VARS["page_title"] = ($_Page->printPageTitle)? $_Page->printPageTitle : $_Site->cfg["site_name"];
	$_VARS["CSS"] = &$_Page->css_file;
	$_VARS["cssStr"] = &$_Page->cssStr;
	$_VARS["jsHead"] = &$_Page->jsHead;
	$_VARS["bodyCss"] = &$_Page->Design->bodyCss;
}
?>
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
	<meta http-equiv="Content-Style-Type" content="text/css" />
	<meta http-equiv="imagetoolbar" content="no" />
	<meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="expries" content="0" />

	<title><?=$_VARS["page_title"]?></title>

	<script language="javascript" type="text/javascript">
	//<![CDATA[
		var _isLowBr_ = false;
	<? if($_VARS["browser"]["brType"]=="IE" && $_VARS["browser"]["brVer"][0]<=8){?>
	 _isLowBr_ = true;
	<?}?>
	//]]>

	</script> 
		
<?}?>