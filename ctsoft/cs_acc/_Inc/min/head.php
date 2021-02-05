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
