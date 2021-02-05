<?

//권한 체크
IF($MEMBER["user_level"] < $_VARS["LOGIN_CHK_LV"]){
	exit;
}





//상단부 출력
if($DESIGN_OPT!="none" && $DESIGN_OPT!="ajax")  include_once _INC_PATH_."/".$INC_GROUP."head.sub.php";
if($DESIGN_OPT!="proc" && $DESIGN_OPT!="none" && $DESIGN_OPT!="ajax") {
	if($DESIGN_OPT!="") $INC_TYPE = $DESIGN_OPT."_";
	include_once _INC_PATH_."/".$INC_GROUP.$INC_TYPE."head.php";
}


?>