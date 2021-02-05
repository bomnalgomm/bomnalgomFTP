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

	<script language="javascript" type="text/javascript" src="<?=$_URL["GJS"]?>/jquery-1.10.1.min.js"></script>
	<script language="javascript" type="text/javascript" src="<?=$_URL["GJS"]?>/common.js"></script>


	<link rel="stylesheet" media="" href="<?=$_URL["HTML"]?>/_Css/webfont.css" />
	<link rel="stylesheet" media="" href="<?=$_URL["CSS"]?>/common.css" />
	<?	if (count($_VARS["CSS"])>0){		foreach($_VARS["CSS"] as $_css){?>
	<link rel="stylesheet"  href="<?=$_css?>"   />
	<?}}?>
	<? if($_VARS["cssStr"]){ ?>
	<style>
	<?=$_VARS["cssStr"]?>
	</style>
	<?}?>

<script language="javascript" type="text/javascript">
//<![CDATA[
	var _site_path = "<?=$_URL['ROOT']?>";
	var _site_url = "";
	var _page_url = "<?=$_SERVER['PHP_SELF']?>";
	var _page_vars = "<?=WebApp::make_querystring('ta,mode,ERR,idx,cidx')?>";
	var _pvars = "<?=WebApp::make_querystring('')?>";
	var editor_type = "<?=$_VARS["EDITOR_ID"]?>";

	var oEditors = [];
	var _isLowBr_ = false;

//]]>

</script> 
	

<? if($_VARS["browser"]["brType"]=="IE" && $_VARS["browser"]["brVer"][0]<=8){?>
<script> _isLowBr_ = true;</script>
<?}?>


<? if ($_VARS["head_script"]){ echo $_VARS["head_script"]; }?>

<? if($_VARS["jsHead"]){ ?>
<script>
	<?=$_VARS["jsHead"]?>
</script>
<?}?>

</head>


<body class="<?=$GLOBALS["DESIGN_OPT"]." " .$_VARS["bodyCss"]?>">
<?}?>


