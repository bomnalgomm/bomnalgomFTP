

<link href="_Css/style.css" type="text/css" rel="stylesheet" />
<link type="text/css" rel="stylesheet" href="_Css/shCoreDefault.css">
<script type="text/javascript" src="_Js/shCore.js"></script>
<script type="text/javascript" src="_Js/shAutoloader.js"></script>
<script type="text/javascript" src="_Js/shBrushXml.js"></script>
<script type="text/javascript" src="_Js/shBrushPlain.js"></script>
<script type="text/javascript" src="_Js/shBrushJScript.js"></script>
<script type="text/javascript" src="_Js/shBrushCss.js"></script>
<script type="text/javascript">SyntaxHighlighter.all();</script>
</head>





<?	if (count($_VARS["CSS"])>0){		foreach($_VARS["CSS"] as $_css){?>
<link rel="stylesheet"  href="<?=$_css?>"   />
<?}}?>

<? if($_VARS["cssStr"]){ ?>
<style>
<?=$_VARS["cssStr"]?>
</style>
<?}?>


<? if ($_VARS["head_script"]){ echo $_VARS["head_script"]; }?>

<? if($_VARS["jsHead"]){ ?>
<script>
	<?=$_VARS["jsHead"]?>
</script>
<?}?>

</head>


<body class="<?=$GLOBALS["DESIGN_OPT"]." " .$_VARS["bodyCss"]?>">
