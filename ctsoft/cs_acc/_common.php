<?
/////////////////////////////////
//각 그룹별 메인 프로세스처리
// 최상위 _common.php 파일 실행 후에 실행됨 
/////////////////////////////////
include $_SERVER["DOCUMENT_ROOT"]."/_common.php";	//메인 프로세스Load


define("_INC_PATH_",DIRNAME(__FILE__)."/_Inc");

$_SGROUP_ = $_PATH_ARR[1];
$_URL["CSS"] = $_URL["ROOT"]."/".$_SGROUP_."/_Css";


//print_r($_PATH_ARR);
//
?>