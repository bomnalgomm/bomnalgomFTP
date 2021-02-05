<?



//하단내용 적용

if($DESIGN_OPT!="proc" && $DESIGN_OPT!="none" && $DESIGN_OPT!="ajax") {
	if($DESIGN_OPT!="") $INC_TYPE = $DESIGN_OPT."_";
	include_once _INC_PATH_."/".$INC_GROUP.$INC_TYPE."tail.php";
}
if($DESIGN_OPT!="none" && $DESIGN_OPT!="ajax") include_once _INC_PATH_."/".$INC_GROUP."tail.sub.php";

//로거 적용
/*
require_once ( $_PATH["MODULE"]."/Logger/logger.php" );
include_once $_PATH["LIB"] ."/lib.visit.php";
if ($NO_VISIT_LOG!="OK") set_visit();
*/

$DB->dbClose();

?>
 