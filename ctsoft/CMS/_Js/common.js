document.write("<script type='text/javascript' src='/_Js/formcheck.js'></script>");

var _userAgent_ = navigator.userAgent;var isIe6 = (/msie 6/i).test(_userAgent_);var isIe7 = (/msie 7/i).test(_userAgent_);var isIe9 = (/msie 9/i).test(_userAgent_);
var latestFocus = null;

//이미지 에디터 호출
function imageEditor(){ 	window.open('/_Editor/ImgEditor/editor.html','imgEditor','width=1000,height=650,scrollbars=no,toolbar=no,menubar=no'); }
//롤오버 이미지


var docChkTimer = null;
var DOC_COMPLET = null;
function docLoading(loadFunc){
	clearTimeout(docChkTimer);
	if(document.readyState=="loaded" || document.readyState=="complete"){
		DOC_COMPLET = true;
		if(loadFunc!=undefined) loadFunc();
	}
	else{
		docChkTimer = setTimeout(function(){docLoading(loadFunc);},500);
	}
}



function initRollOverImg(){
$(".isRollOver").bind("mouseover focus",function(){
	var obj = $("img",this);

	obj.attr("orgSrc",$(obj).attr("src"));
	if(!obj.attr("ovImg")){
		var fileExt = obj.attr("orgSrc").substr(obj.attr("orgSrc").lastIndexOf("."));
		obj.attr("ovImg", obj.attr("orgSrc").replace(fileExt,"_o"+fileExt));
	}
	//$(obj).animate({opacity:0.5},200);

	$(obj).attr("src",obj.attr("ovImg"));
	try{
	var fileExt = $(obj).attr("ovImg").substr($(obj).attr("ovImg").toString().lastIndexOf("."));

	if(fileExt.toLowerCase()!=".png" || isIe9){
		$(obj).stop().animate({opacity:0},20);
		$(obj).animate({opacity:1},500);
	}
	}catch(e){ alert(e);} 


	//$(obj).fadeIn(500);
});
$(".isRollOver").bind("mouseout blur",function(){	var obj = $("img",this);	$(obj).attr("src",obj.attr("orgSrc"));});
}
function getImgReSize(w,imgSize){
	var rSize = {"w":imgSize.w,"h":imgSize.h};

	if(imgSize.w>w){
		rSize.w = w;
		rSize.h = Math.ceil(imgSize.h * (rSize.w /imgSize.w));

	}

	return rSize;
}

//쿠키////////////////////////////////////////////////
function getCookie( name )
{
	var nameOfCookie = name + "=";
	var x = 0;
	while ( x <= document.cookie.length )
	{
		var y = (x+nameOfCookie.length);
		if ( document.cookie.substring( x, y ) == nameOfCookie ) {
			if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
				endOfCookie = document.cookie.length;
			return unescape( document.cookie.substring( y, endOfCookie ) );
		}
		x = document.cookie.indexOf( " ", x ) + 1;
		if ( x == 0 )
			break;
	}
	return "";
}

function setCookie( name, value, expiredays ){ 
	var todayDate = new Date(); 
	todayDate.setDate( todayDate.getDate() + expiredays ); 
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" +		todayDate.toGMTString() + ";" 
}

///////////////////////////////////////////////////////////

//레이어팝업
function popHide(pop_id){
	if (document.getElementById("chk"+pop_id).checked==true)
	{
		setCookie( pop_id, "done" , 24); 
	}
	document.getElementById(pop_id).style.display = "none";
}
function popClose(pop_id){
	if (document.getElementById("chk"+pop_id).checked==true)
	{
		setCookie( pop_id, "done" , 1); 
	}
	this.close();
}

function checkPop(pop_id) {
	if ( getCookie(pop_id) != "done" ) {
		document.getElementById(pop_id).style.display = "";
	}else{
		document.getElementById(pop_id).style.display = "none";
	}
}

function goUrlClose(u){
	try{
	if(window.opener){
		opener.document.location=u;
	}else{
		window.open(u);	
	}
		window.close();
	}catch(e){}

}
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
/*레이어팝업 */
var msgPopupWin;
if (msgPopupWin == undefined) {
	msgPopupWin = function (settings) {

		this.init(settings);
	};
}
msgPopupWin.prototype.init = function (settings) {


	var this_s = this;
	var msg_wrap = document.createElement("div");
	msg_wrap.className="pop_windoc";
	
	var msg_pan = document.createElement("div");
	msg_pan.className = "pop_windoc_bg";
	$(msg_pan).css({"opacity":"0"});
	$(msg_wrap).append(msg_pan);
	$("body").prepend(msg_wrap);
	$(msg_pan).animate({"opacity":0.5},300);
	
	this.backPannel = msg_pan;
	this.bodyScroll = (settings.bodyScroll!=false)? true:false;
	this.clickClose = (settings.clickClose==false)? false:true;
	if(this.clickClose){
		this.backPannel.onclick=function(){
			try{this_s.close();}catch(e){}
		}
	}
	

	var msg_body = document.createElement("div");
	msg_body.className="pop_windoc_box";
	
	//$(msg_body).draggable({ handle: 'div.pop_winTop',scroll: true,helper: 'original'});
	//$("div").disableSelection();

	if(settings.w!=undefined) msg_body.style.width =parseInt(settings.w) +"px"  ;
	if(settings.h!=undefined) msg_body.style.height =parseInt(settings.h) + "px" ;

	
	$(msg_wrap).append(msg_body);

	if(msg_wrap.offsetWidth < msg_body.offsetWidth){
		msg_body.style.width=parseInt(msg_wrap.offsetWidth) +"px";
	}
	if(msg_wrap.offsetHeight < msg_body.offsetHeight){
		msg_body.style.height=parseInt(msg_wrap.offsetHeight) +"px";
	}

	if(settings.setPos==undefined) setCenterPos(msg_wrap,msg_body);
	else{
		//중앙위치로 정렬
		msg_body.style.left = settings.setPos.x;
		msg_body.style.top = settings.setPos.y;

	}

	this.title = "";

	if(settings.title)  this.title = settings.title;
	if(settings.setStyle){

		var winDocWrap = document.createElement("div");
		var winDocTop = document.createElement("div");

		$(winDocWrap).addClass("pop_winWrap");
		$(winDocTop).addClass("pop_winTop");
//		$(winDocTop).css("cursor","arrow");
		$(winDocTop).append("<span class='pop_title'>"+this.title+"</span>");

		var winCloseBtn = document.createElement("span");
		$(winCloseBtn).addClass("pop_close");
		$(winCloseBtn).css("cursor","pointer");
		$(winCloseBtn).html("<img src='/_Img/Common/sbtn_close.gif'/>");
		$(winCloseBtn).click(function(){this_s.close();	});
		$(winDocTop).append(winCloseBtn);

		$(winDocWrap).append(winDocTop);
		$(winDocWrap).append("<div class='pop_winBody'><div class='pop_body'></div></div>");
		//$(winDocWrap).append("<div class='pop_body'></div>");

		$(winDocWrap).append("<div class='pop_winFoot'></div>");

		$(msg_body).append($(winDocWrap));
		this.bodyPannel = $(".pop_winBody ",$(winDocWrap));
		//this.bodyPannel = $(".pop_body ",$(winDocWrap));
		
		var tmpTopH =$(winDocWrap).height() -  ($(winDocTop).height() + $(".pop_winFoot",winDocWrap).height());
		var tmpTopW =$(winDocWrap).width() -  20;
		$(".pop_winBody ",$(winDocWrap)).height(tmpTopH-5);
		//$(".pop_body ",$(winDocWrap)).height(tmpTopH-10);
		//
		//$($(this.bodyPannel)).width($(".pop_winBody").width()-20);
		//this.bodyPannel.height(tmpTopH-10);
		
	}else{
		this.bodyPannel = $(msg_body);
	}

	//$("body").scroll(function(){
	if(this.bodyScroll==true){
		$("body").css("overflow-y","hidden");
	}
	//});

	$(this.bodyPannel).append(settings.msgWinDoc);

	if(settings.closeBtns){
		for(var i=0; i<settings.closeBtns.length;i++){
			$(settings.closeBtns[i]).click(function(){this_s.close();	});
		}
	}
	this.settings = settings;
	this.obj = msg_wrap;
	this.setShow();
}

msgPopupWin.prototype.setContents = function(html){	$(this.bodyPannel).html(html); this.setCloseBtns();}
msgPopupWin.prototype.setContSize =  function(){$(".contents",this.bodyPannel).width($(this.bodyPannel).width()-20)}
msgPopupWin.prototype.addContents = function(html){	$(this.bodyPannel).append(html); this.setCloseBtns();}
msgPopupWin.prototype.setTitle = function(str){	this.title = str; $(".pop_title",$(this.obj)).html(str);}
msgPopupWin.prototype.setShow = function(){	$(".contObjectTag").css("visibility","hidden");$(this.obj).show();}
msgPopupWin.prototype.setHide = function(){	$(".contObjectTag").css("visibility","visible");$(this.obj).hide();}
msgPopupWin.prototype.close = function(){	try{$(".contObjectTag").css("visibility","visible");if(this.bodyScroll==true){	$("body").css("overflow-y","");	} $(this.obj).remove();}catch(e){} }
msgPopupWin.prototype.setCloseBtns = function(){
	var this_s = this;
	if(this.settings.closeBtns){
		for(var i=0; i<this.settings.closeBtns.length;i++){
			$(this.settings.closeBtns[i]).click(function(){this_s.close();	});
		}
	}
	$(".closeBtn",this_s.bodyPannel).click(function(){this_s.close();	});
	//this.setContSize();
}
//아이프레임레이어 열기
function openIframeLayer(url,width,height,page_title){
	frmWin = new msgPopupWin({w:width+"px",h:height+"px",setStyle:true,title:page_title});
	frmWin.bodyPannel.addClass("ifrmBody");
	frmWin.setContents("<iframe width=100% height=99% frameborder='0' scrolling=yes src='"+url+"'></iframe>");
}
//레이어팝업 열기
function openLayerPage(url,width,height,page_title){
	frmWin = new msgPopupWin({w:width+"px",h:height+"px",setStyle:true,title:page_title});
	$(frmWin.bodyPannel).load(url,function (){frmWin.setCloseBtns();});
}
//새창 열기
function openWindow(url,width,height,page_title,winName){
	if(winName==undefined) var winName = "";
	var w = window.open(url,winName,"width="+width+",height="+height+",scrollbars=yes");
	w.focus();
	
}

function $alert(msg){
	$(document).ready(function(){
		frmWin = new msgPopupWin({w:"350px",h:"230px",setStyle:true,title:"SITE MESSAGE!",clickClose:false});
		var printMsg = msg.replace(/\b\n\b/i,'<br/>'); 
		frmWin.addContents("<div class='popErrorMsg'>"+printMsg+"</div><div class='popErrorBtns'></div>");
	});
}

function getSize(obj){
	var w = $(obj).innerWidth() + parseInt($(obj).css("borderLeftWidth")) + parseInt($(obj).css("borderRightWidth")) ;
	var h =  $(obj).innerHeight() + parseInt($(obj).css("borderTopWidth")) + parseInt($(obj).css("borderBottomWidth")) ;
	return {width:w,height:h}
}
function getSizeBounce(obj){
	/*
	var border={
		left:$(obj).css("borderLeftWidth")!=NaN>0? parseInt($(obj).css("borderLeftWidth")):0,
		right:$(obj).css("borderLeftWidth")>0? parseInt($(obj).css("borderLeftWidth")):0,
		top:$(obj).css("borderLeftWidth")>0? parseInt($(obj).css("borderLeftWidth")):0,
		bottom:$(obj).css("borderLeftWidth")>0? parseInt($(obj).css("borderLeftWidth")):0
	}
	*/

	var w = $(obj).innerWidth() + parseInt($(obj).css("borderLeftWidth")) + parseInt($(obj).css("borderRightWidth")) + parseInt($(obj).css("marginLeft")) + parseInt($(obj).css("marginRight")) ;
	var h =  $(obj).innerHeight() + parseInt($(obj).css("borderTopWidth")) + parseInt($(obj).css("borderBottomWidth"))  + parseInt($(obj).css("marginTop")) + parseInt($(obj).css("marginBottom")) ;
	return {width:w,height:h}
}

function getAbsoluteOffset(wrapObj,obj){
	return {left: obj.left-wrapObj.left,
		top:	 obj.top-wrapObj.top};
}
//중앙위치로 정렬
function setCenterPos(doc,obj){
	obj.style.left = ((doc.offsetWidth-obj.offsetWidth)/2)  + "px";

	var toY = (doc.offsetHeight-obj.offsetHeight)/2;
	if(toY<0) toY = 0;
	obj.style.top = toY  + "px";
}


//중앙정렬(absolute로 전환후 center 위치조정)
function setAbsoluteCenter(wrapId,objId){

	var wrapObj = $("#"+wrapId);
	var docWidth = document.documentElement.clientWidth;
	wrapObj.width(docWidth);
	if(parseInt(wrapObj.css("min-width"))>0){
		if(wrapObj.width()< 1000) wrapObj.width(1000);
	}
	var Obj = $("#"+objId);
	var orgObjSize = {w:Obj.width(),h:Obj.height()}
	var wrapWidth = wrapObj.width();
	wrapObj.height(Obj.height());
	var posWidth = parseInt((wrapWidth - orgObjSize.w)/2);
	Obj.css({"position":"absolute","width":orgObjSize.w+"px","height": orgObjSize.h + "px","top":"0px","left":posWidth +"px"});

}

//중앙정렬(absolute로 전환후 center 위치조정)
function setAbsoluteCenter2(wrapId,objId){

	var wrapObj = $("#"+wrapId);
	var docWidth = document.documentElement.clientWidth;
	wrapObj.width(docWidth);
	if(parseInt(wrapObj.css("min-width"))>0){
		if(wrapObj.width()< 1000) wrapObj.width(1000);
	}
	var Obj = $("#"+objId);
	var orgObjSize = {w:Obj.width(),h:Obj.height()}
	var wrapWidth = wrapObj.width();
	var posWidth = parseInt((wrapWidth - orgObjSize.w)/2);
	Obj.css({"position":"absolute","width":orgObjSize.w+"px","height": orgObjSize.h + "px","top":"0px","left":posWidth +"px"});

}

//컨텐츠 중앙정렬
function setAbsoluteCenter3(wrapObj,Obj){

	var orgObjSize = {w:Obj.width(),h:Obj.height()}
	var posWidth = parseInt((wrapObj.width() - orgObjSize.w)/2);
	var posHeight = parseInt((wrapObj.height() - orgObjSize.h)/2);

	Obj.css({"position":"absolute","width":orgObjSize.w+"px","height": orgObjSize.h + "px","top":posHeight +"px","left":posWidth +"px"});

}


//창크기로 화면 중앙 좌표 구하기
function getWinCenter(w,h){

	var top = parseInt((screen.availHeight)/2-h/2); 
	var left = parseInt((screen.availWidth)/2-w/2); 
	var obj = {"top":top,"left":left};
	return obj;
}



//이메일 주소 선택
function email_domain(email_domain,value){
	var f_obj = document.getElementById(email_domain);
	f_obj.value=value;
	if(value=="") f_obj.style.display="";
	else f_obj.style.display="none";
}


function image_window(img)
{
	var _charset = "UTF-8";
	var imgsrc	= ($(img).attr("orgSrc"))? $(img).attr("orgSrc") : img.getAttribute("tmp_src");
	
	var w = img.getAttribute("tmp_width"); 
	var h = img.getAttribute("tmp_height"); 
	var winl = (screen.width-w)/2; 
	var wint = (screen.height-h)/3; 

	if (w >= screen.width) { 
		winl = 0; 
		h = (parseInt)(w * (h / w)); 
	} 

	if (h >= screen.height) { 
		wint = 0; 
		w = (parseInt)(h * (w / h)); 
	} 

	var js_url = "<script language='JavaScript1.2'> \n"; 
		js_url += "<!-- \n"; 
		js_url += "var ie=document.all; \n"; 
		js_url += "var nn6=document.getElementById&&!document.all; \n"; 
		js_url += "var isdrag=false; \n"; 
		js_url += "var x,y; \n"; 
		js_url += "var dobj; \n"; 
		js_url += "function movemouse(e) \n"; 
		js_url += "{ \n"; 
		js_url += "  if (isdrag) \n"; 
		js_url += "  { \n"; 
		js_url += "    dobj.style.left = nn6 ? tx + e.clientX - x : tx + event.clientX - x; \n"; 
		js_url += "    dobj.style.top  = nn6 ? ty + e.clientY - y : ty + event.clientY - y; \n"; 
		js_url += "    return false; \n"; 
		js_url += "  } \n"; 
		js_url += "} \n"; 
		js_url += "function selectmouse(e) \n"; 
		js_url += "{ \n"; 
		js_url += "  var fobj      = nn6 ? e.target : event.srcElement; \n"; 
		js_url += "  var topelement = nn6 ? 'HTML' : 'BODY'; \n"; 
		js_url += "  while (fobj.tagName != topelement && fobj.className != 'dragme') \n"; 
		js_url += "  { \n"; 
		js_url += "    fobj = nn6 ? fobj.parentNode : fobj.parentElement; \n"; 
		js_url += "  } \n"; 
		js_url += "  if (fobj.className=='dragme') \n"; 
		js_url += "  { \n"; 
		js_url += "    isdrag = true; \n"; 
		js_url += "    dobj = fobj; \n"; 
		js_url += "    tx = parseInt(dobj.style.left+0); \n"; 
		js_url += "    ty = parseInt(dobj.style.top+0); \n"; 
		js_url += "    x = nn6 ? e.clientX : event.clientX; \n"; 
		js_url += "    y = nn6 ? e.clientY : event.clientY; \n"; 
		js_url += "    document.onmousemove=movemouse; \n"; 
		js_url += "    return false; \n"; 
		js_url += "  } \n"; 
		js_url += "} \n"; 
		js_url += "document.onmousedown=selectmouse; \n"; 
		js_url += "document.onmouseup=new Function('isdrag=false'); \n"; 
		js_url += "//--> \n"; 
		js_url += "</"+"script> \n"; 

	var settings;

   // if (g4_is_gecko) {
   //     settings  ='width='+(w+10)+','; 
  //  } else {
		settings  ='width='+w+','; 
		settings +='height='+h+','; 
  //  }
	settings +='top='+wint+','; 
	settings +='left='+winl+','; 
	settings +='scrollbars=no,'; 
	settings +='resizable=yes,'; 
	settings +='status=no'; 


	win=window.open("","image_window",settings); 
	win.document.open(); 
	win.document.write ("<html><head> \n<meta http-equiv='imagetoolbar' CONTENT='no'> \n<meta http-equiv='content-type' content='text/html; charset="+_charset+"'>\n"); 
	var size = "이미지 사이즈 : "+w+" x "+h;
	win.document.write ("<title>"+size+"</title> \n"); 
	if(w >= screen.width || h >= screen.height) { 
		win.document.write (js_url); 
		var click = "ondblclick='window.close();' style='cursor:move' title=' "+size+" \n\n 이미지 사이즈가 화면보다 큽니다. \n 왼쪽 버튼을 클릭한 후 마우스를 움직여서 보세요. \n\n 더블 클릭하면 닫혀요. '"; 
	} 
	else 
		var click = "onclick='window.close();' style='cursor:pointer' title=' "+size+" \n\n 클릭하면 닫혀요. '"; 
	win.document.write ("<style>.dragme{position:relative;}</style> \n"); 
	win.document.write ("</head> \n\n"); 
	win.document.write ("<body leftmargin=0 topmargin=0 bgcolor=#dddddd style='cursor:arrow;'> \n"); 
	win.document.write ("<table width=100% height=100% cellpadding=0 cellspacing=0><tr><td align=center valign=middle><img src='"+imgsrc+"' width='"+w+"' height='"+h+"' border=0 class='dragme' "+click+"></td></tr></table>");
	win.document.write ("</body></html>"); 
	win.document.close(); 

	if(parseInt(navigator.appVersion) >= 4){win.window.focus();} 

}

function OpenZipSearch(zip_id,addr1_id,addr2_id){
	window.open("/Share/zipsearch.php?zip_id="+ zip_id +"&addr1_id=" + addr1_id + "&addr2_id=" + addr2_id,"winZip", "left=50,top=50,width=400,height=350,scrollbars=1");
}
//글자수 입력길이 미리보기
function viewStrlen(objId1,objId2){
	var obj1 = document.getElementById(objId1);
	var obj2 = document.getElementById(objId2);

	obj2.innerHTML = obj1.value.length;

}
function toclipboard(str)  {     window.clipboardData.setData('Text',str); }
function copyText(str){
	str.select();  
	var clip = str.createTextRange();  
	clip.execCommand('copy');  
	alert(str.value);  
}

function sendTwitter(title,url) {
	var sendTxt = "[" + title +"] " + url;
	var wp = window.open("http://twitter.com/home?status=" + encodeURIComponent(sendTxt) , 'twitter', '');
    if ( wp ) {
        wp.focus();
    }

}
function sendFaceBook(title,url) {
    var wp = window.open("http://www.facebook.com/sharer.php?u=" + url + "&t=" + encodeURIComponent(title), 'facebook', '');
    if ( wp ) {
        wp.focus();
    }
}

function sendMe2Day(title,url,tag) {
    var wp = window.open("http://me2day.net/posts/new?new_post[body]=" + encodeURIComponent(title) + " " + encodeURIComponent(url) + "&new_post[tags]=" + encodeURIComponent(tag), 'me2Day', '');
    if ( wp ) {
        wp.focus();
    }
}
function goCyWorld(code) {
    var href = "http://api.cyworld.com/openscrap/post/v1/?xu=http://tizone.co.kr/cyworldApi.php?code=" + code +"&sid=s0300011";
    var a = window.open(href, 'cyworld', 'width=450,height=410');
    if ( a ) {
        a.focus();
    }
}
function goYozmDaum(prefix,link,parameter) {
	var href = "http://yozm.daum.net/api/popup/prePost?link=" + encodeURIComponent(link) + "&prefix=" + encodeURIComponent(prefix) + "&parameter=" + encodeURIComponent(parameter);
	var a = window.open(href, 'yozmSend', 'width=466, height=356');
	if ( a ) {
		a.focus();
	}
}


function setIframeSize(obj,w,h){
		$("#" +obj).width(w).height(h);
}


function file_size(num){
	var n = parseInt(num);
	var n1 = n;
	var u = "KB";
	
	 if (n < 1048576)	n1 =  n / 1024;
	 else if(n<1073741824) { n1 = n/1048576;  u = "MB"; }
	 else {n1 = n/1073741824 ; u = "GB";} 
	
	n1 = parseInt(n1 * 100)/100;
	return n1 + u;
}


function checkStrlen(v,maxlen){
	if(v.length>=maxlen){
		return false;
	}else{
		return true;
	}
	//alert(v);
//	var obj1 = document.getElementById(objId1);

}


function setPng24(obj) { 
	
//  obj.width=obj.height=1; 
  obj.style.visibility="hidden";
  obj.className=obj.className.replace(/\bpng24\b/i,''); 
  var imgSrc= obj.getAttribute("src");
  obj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ imgSrc +"',sizingMethod='image');" 
  obj.src=''; 
 
  return ''; 
}


function set_option(obj,idx,t_name,t_value){
	if (obj.length<1) obj.length=1;
	obj.options[idx].text = t_name;
	obj.options[idx].value= t_value;
}

function add_option(obj,t_name,t_value){
	var idx = obj.length;
	obj.length= idx + 1;

	obj.options[idx].text = t_name;
	obj.options[idx].value= t_value;
}
function set_select(obj_id,t_name){
	var obj = document.getElementById(obj_id);
	obj.length = 1;
	obj.options[0].text = t_name;
	obj.options[0].value="";
}

function editorSet(){
	if (editor_type=="SmartEditor")
	{
		for (i=0; i<oEditors.length;i++){
			//oEditors[i].exec("UPDATE_IR_FIELD", []);
			oEditors[i].exec("UPDATE_CONTENTS_FIELD", []);
		}
	}
}


function in_array(arr,str){
	for ( var i=0;i<arr.length;i++ )
	{
		if(arr[i]==str) return true;
	}
	return false;
}

//전체선택
function check_all(obj1,obj2){
	$(obj2).attr("checked",obj1.checked);
}
function SelectAll(form) {
  var fm = form;
  var fme = fm.elements;

  var chkVal = fm.selectall.checked;

  for(i = 0; i < fme.length; i++) {
    if(fme[i].type == "checkbox" && fme[i].name == "chk[]" && fme[i].disabled == false) {
		fme[i].checked = chkVal;
	}
  }
}


//체크된 체크박스 확인
function chk_select(f,chk_name,num){
	
		if (typeof f!="object") var obj = document.getElementById(f);
		else var obj = f;
		
		var cnt=0;
		
		for(var i=0;i < obj.elements.length;i++) { 
			var currEl = obj.elements[i]; 
			if (currEl.getAttribute("type")  =="checkbox" && currEl.name==chk_name && currEl.checked==true ){
				cnt++;
			}
		}
		if (cnt<num) return false;
		else return true;

}
//선택된 값을 문자열로 연결
function make_select_list(frm_obj,select_name,split){
	var vals = new Array();
	for(var i = 0;i < frm_obj.elements.length;i++) { 
			var currEl = frm_obj.elements[i]; 
			if (currEl.name==select_name && currEl.checked==true){
				vals.push(currEl.value);
			}
	}
	if(vals.length>0){
		return vals.join(",");
	}else{
		return "";
	}
	

}


function min_height(obj,h){
	if (obj.readyState!="complete") return "auto";
	if (obj.offsetHeight<h)
	{
		obj.style.height=h + "px";
	}
}

function min_width(obj,w){
	if (obj.readyState!="complete") return "auto";
	if (obj.offsetWidth<w)
	{
		obj.style.width=x + "px";
	}
}



///////////////////////////////////////////////////////////
/*메인배너모음 스크립트 */
var mbannerObj;
if (mbannerObj == undefined) {	mbannerObj = function (settings) {		this.init(settings);	}; }
mbannerObj.prototype.init = function (settings) {
	var this_s = this;
	this.objWrap = settings.obj; //$(".mbanner-type03 .mbanner-list ul");
	this.objItems = settings.items;//$("li",mbannerWrap);
	this.itemWidth = settings.width;
	this.itemLength = settings.itemlen;

	this.prevBtn = settings.prevBtn;
	this.nextBtn = settings.nextBtn;

	this.totalPg = Math.floor(	this.objItems.length/this.itemLength) ;
	$(this.objWrap).width(this.itemWidth*this.objItems.length);

	if(this.objItems.length % this.itemLength !=0) this.totalPg +=1;

	this.objWrap.attr("totPg",this.totalPg);
	this.objWrap.attr("nPg",1);
	

	if(this.objItems.length> this.itemLength ){
		$(this.prevBtn).click(function(){
			var n =  parseInt(this_s.objWrap.attr("nPg"))-1;
			if(n <=0){
				//alert("처음입니다");
				return false;
			}else{
				var toLeft =( (-1) * (this_s.itemWidth *this_s.itemLength) * (n-1) )-1;
				this_s.objWrap.attr("nPg",n);
				$(this_s.objWrap).animate({"left":toLeft});
			}
			return false;
		});
		$(this.nextBtn).click(function(){
				var n =  parseInt(this_s.objWrap.attr("nPg"))+1;
				if(n >parseInt(this_s.objWrap.attr("totPg"))){
					//alert("마지막입니다");
					return false;
				}else{
					var toLeft = ((-1) * (this_s.itemWidth *this_s.itemLength) * (n-1)) -1;
					this_s.objWrap.attr("nPg",n);
					$(this_s.objWrap).animate({"left":toLeft});
				}
				return false;
		});
	}else{
		$(this.prevBtn).hide();
		$(this.nextBtn).hide();
	}
	
}
var mbannerObj2;
if (mbannerObj2 == undefined) {	mbannerObj2 = function (settings) {		this.init(settings);	}; }
mbannerObj2.prototype.init = function (settings) {
	var this_s = this;
	this.objWrap = settings.obj; //$(".mbanner-type03 .mbanner-list ul");
	this.objItems = settings.items;//$("li",mbannerWrap);
	this.itemHeight = settings.height;
	this.itemLength = settings.itemlen;

	this.prevBtn = settings.prevBtn;
	this.nextBtn = settings.nextBtn;

	this.totalPg = Math.floor(	this.objItems.length/this.itemLength) ;
	$(this.objWrap).height(this.itemHeight*this.objItems.length);

	if(this.objItems.length % this.itemLength !=0) this.totalPg +=1;

	this.objWrap.attr("totPg",this.totalPg);
	this.objWrap.attr("nPg",1);
	


	if(this.objItems.length> this.itemLength ){
		$(this.prevBtn).click(function(){
			var n =  parseInt(this_s.objWrap.attr("nPg"))-1;
			if(n <=0){
				//alert("처음입니다");
				return false;
			}else{
				var toTop =( (-1) * (this_s.itemHeight *this_s.itemLength) * (n-1) )-1;
				this_s.objWrap.attr("nPg",n);
				$(this_s.objWrap).animate({"top":toTop});
			}
			return false;
		});
		$(this.nextBtn).click(function(){
				var n =  parseInt(this_s.objWrap.attr("nPg"))+1;
				if(n >parseInt(this_s.objWrap.attr("totPg"))){
					//alert("마지막입니다");
					return false;
				}else{
					var toTop = ((-1) * (this_s.itemHeight *this_s.itemLength) * (n-1)) -1;
					this_s.objWrap.attr("nPg",n);
					$(this_s.objWrap).animate({"top":toTop});
				}
				return false;
		});
	}else{
		$(this.prevBtn).hide();
		$(this.nextBtn).hide();
	}
	
}



function openLoginPopup(url){
	/*
	if(url=="" && site!=""){
		var win = window.open("/" + site + "/index.php?pCode=login","loginPopup","width=520,height=230,srollbars=no");
		win.focus();

		
	}else if(url!=""){
		var win = window.open(url,"loginPopup","width=520,height=230,srollbars=no");
		win.focus();
	}
	*/
	//loginWin.remove();
	//alert($(event.target));
	latestFocus = $(event.target);

	$(".pop_windoc").remove();
	loginWin =  new msgPopupWin({w:452,h:222,msgWinDoc:"",setStyle:false,title:"로그인",closeBtns:$(".closeBtn")});

	$(loginWin.bodyPannel).load("/Share/login.php?prcCode=ajax&url=" + encodeURIComponent(document.location.href),function(){
		$("#login_user_id").focus();
		loginWin.setCloseBtns();
	});



}

function imgPreview(etarget,src){
	if($(".imgPreviewArea").length>0){
		$(".imgPreviewArea").remove();
	}else{
		$("body").append("<div class='imgPreviewArea'><img src='"+src+"' width=200/></div>");
		$(".imgPreviewArea").css({"position":"absolute","border":"1px solid #DDD","z-index":"6000","left":($(etarget).offset().left+50) +"px","top":$(etarget).offset().top+"px"});
	}
}
function imgPreviewClose(){

}


//탭메뉴 설정
function setTabMenu(tab_id,n){
		$("li[id^='" + tab_id + "_tab'] a").click(function(){
			var tabStr = $(this).attr("href");
			var n  = tabStr.replace("#"+tab_id + "_sub","");
			setTabContents(tab_id,n);
			return false;
		});	

		if(n>0) setTabContents(tab_id,n);
}

//탭메뉴 컨텐츠 활성
function setTabContents(tab_id,n){
	if(n==undefined || n<1) n = 1;
	
	//메뉴 활성
	$("[id^='" + tab_id + "_tab']:not(#"+tab_id+"_tab"+n+")").removeClass("over");
	$("#"+tab_id+"_tab"+n).addClass("over");

	//컨텐츠 활성
	$("[id^='" + tab_id + "_sub']:not(#"+tab_id+"_sub"+n+")").hide();
	$("#"+tab_id+"_sub"+n).show();

}


function setBoardTab(obj_id,num,evt){

	var obj = document.getElementById(obj_id);
	var seq = 0;

	var tabs = Array();
	for (i=0; i<obj.childNodes.length; i++){
		if (obj.childNodes[i].tagName=="DL"){
			seq++;
			tabs[seq] = obj.childNodes[i];
		}
	}

	for (i=1; i<tabs.length; i++){
		var titImg = $("dt img",$(tabs[i]));
		if(titImg.length>0){
			var ovImg = $(titImg).attr("ovImg");
			var orgSrc = $(titImg).attr("orgSrc");
		}

		if (i==num){ 
			if($(tabs[i]).hasClass("isOn")){
				if(evt=="c") {
					if($(".btnmore a",$(tabs[i])).attr("onclick")=="" || $(".btnmore a",$(tabs[i])).attr("onclick")==undefined){
					document.location.href=$(".btnmore a",$(tabs[i])).attr("href");
					}else{
					$(".btnmore a",$(tabs[i])).click();					
					}
				}
			}else{
				$(tabs[i]).addClass("isOn");
			}
			//이미지
			if(ovImg!=undefined && orgSrc!=undefined){
				$(titImg).attr("src",ovImg);
			}

		}
		else{
			$(tabs[i]).removeClass("isOn");
			//이미지
			if(ovImg!=undefined && orgSrc!=undefined){
				$(titImg).attr("src",orgSrc);
			}
		}
	}
}

function setSubTab(obj_id,maxNum,num){
	
	for(var i=1; i<=maxNum;i++){
		var tab = document.getElementById(obj_id+"_tab"+i);
		var cont =document.getElementById(obj_id+"_cont"+i);
		if(num==i){
			$(tab).addClass("isOver");
			$(cont).show();
		}else{
			$(tab).removeClass("isOver");
			$(cont).hide();
		}
	}
}

var selBox = {
	
	//objs : 	$(".isSelBox1"),
	init:function(){
		this.objs = $("[widget='fquick']");
		var objArr = Array();
		for (i=0;i<this.objs.length ;i++ )
		{
			objArr[i] = this.objs[i];
			$(".isSelSub",this.objs[i]).append("<div class='isCloseBtnArea'><button class='isCloseBtn'><img src='/_Img/Common/icon_btn_close.gif' alt='닫기'/></button></div>")
			if( $(".isSelSub",this.objs[i]).height()>180)  $(".isSelSub ul",this.objs[i]).height(170);
			$("dt a",this.objs[i]).attr("n",i);
			$("dt a",this.objs[i]).click(function(){
				
				
			
				var n = $(this).attr("n");
				var subObj = $(".isSelSub",$(objArr[n]));
				
				$(".isCloseBtn",subObj).click(function(){subObj.hide("fast");});
				$("a",subObj).click(function(){subObj.hide("fast");});
				subObj.show("fast");
				return false;
			});
		}
		}
	
	}

	
	
var addItemObj = function(func,id){
	
	this.funcName = func;
	this.rootObj =  $("#" + id);
	this.cloneObj = $("li:first-child",this.rootObj);
	this.subObj= $("li",this.rootObj);
	this.total = this.subObj.length;
	this.last_n = this.total +1;

	//this.rootObj.bind("deactivate",function (){alert(1);});
	
	var this_s = this;
	this.rootObj.sortable({deactivate:function(event,ui){this_s.setOrder();}});
	this.setOrder = function(){
		this.subObj= $("li",this.rootObj);
		//키보드 및 버튼 액션 초기화
		$(this.subObj).unbind("keydown");
		$(this.subObj).unbind("keyup");

		$(".isDelBtn",this.subObj).unbind("click");
		$(".isAddBtn",this.subObj).unbind("click");

		

		for (i=0;i<this.subObj.length ;i++ )
		{
			
			var n = i+1;
			$(this.subObj[i]).attr("n",n);

			//번호 출력
			$(".isNumText",this.subObj[i]).text(n);

			//모든 Input 요소 Name, Value 셋팅
			var inputObjs = $("input",$(this.subObj[i]));
			for (j=0;j<inputObjs.length ;j++ )
			{
				if($(inputObjs[j]).attr("fname")!=""){
					$(inputObjs[j]).attr("name",$(inputObjs[j]).attr("fname")+"["+n+"]");
				}
			}
			
			$(".isDelBtn",this.subObj[i]).attr("href","javascript:"+this.funcName+".Del("+(i+1)+")");
			$(".isAddBtn",this.subObj[i]).attr("href","javascript:"+this.funcName+".Add("+(i+1)+")");

		}
	


		var this_s = this;
		//$(this.subObj).bind("keydown",function(e){return this_s.setKeyDown(this,e)});
		//$(this.subObj).bind("keyup",function(e){return this_s.setKeyUp(this,e)});


		return null;


	}
	
	this.Add = function(n){
		var this_s = this;
		var obj = this.cloneObj.clone();
	

		$("input[type='text']",$(obj)).val("");
		$("input[type='checkbox']",obj).attr("checked",false);
		var targetObj = (n!="")? $("li:nth("+(parseInt(n)-1)+")",this.rootObj): $("li:last",this.rootObj);
		$(targetObj).after(obj);

		$(obj).attr("islock","0");
		$("input[type='text']:nth(0)",$(obj)).focus();
		this.setOrder();
		
	},

	this.Del = function(n){
		

		if($("li",this.rootObj).length<2) {alert("더이상 삭제하실 수 없습니다.");return;}
		var obj = $("li:last",this.rootObj);
		
		if(n=="")	var obj = $("li:last",this.rootObj);
		else			var obj =$("li:nth("+(parseInt(n)-1)+")",this.rootObj);

		if($(obj).attr("islock")=="1") {alert("삭제하실 수 없는 항목입니다");return;}
		else $(obj).remove();
		
		
		this.setOrder();
		$("input:nth("+n+")",this.rootObj).focus();
	}

	this.setOrder();
	return this;

}

////////////////////////////////////////////////////////
//리스팅객체
////////////////////////////////////////////////////////
function listObj(settings) {	this.init(settings);	}
listObj.prototype.init = function (settings) {
	var this_s = this;
	
	this.actionType = "self";

	if(settings!=undefined){
		for(var i in settings) { 	this[i] = settings[i];} 
	}

	this.list = {pg:1	};
	this.listIsInit = false;
	this.setLoading();
}
listObj.prototype.initList= function(data){		this.list = {pg:1}	}
listObj.prototype.setListValue= function(att,val){eval("this.list." + att + "='" + val + "'");}
listObj.prototype.setListValues= function(data){for(var i in data) { 	this.list[i] = data[i];} 	this.listIsInit = true;}

listObj.prototype.setListStyle= function(type){	this.list.liststyle = type;		this.setList();}
listObj.prototype.setListSort= function(key,sort){this.list.sortkey = key;		this.list.sort = sort;		this.list.pg = 1;		this.setList();}
listObj.prototype.setListSearch= function(data){for(var i in data) { 	this.list[i] = data[i];} 		this.setList();}
listObj.prototype.setPageSize= function(num){this.list.psize=num;		this.setList();}
listObj.prototype.goPage= function(num){
	this.setLoading();
	this.list.pg = num;	this.setList();
}
listObj.prototype.setLoading=function(){
	var this_s = this;
	if(this.listType=="M"){
	}else{

		this.loadingObj =$("<div style=''><div class='c pad30t'><img src='/_Img/Common/loading_img01.gif'/> Loading</div></div>");
		this.loadingObj.css ({"position":"absolute","width":"100%","height":"100%","left":0,"top":0,"background":"#f8f8f8","opacity":"0.3"});
//		this.loadingObj.offset({left:this_s.targetObj.width().left,top:this_s.targetObj.offset().left});
		this.targetObj.append(this.loadingObj );
	}
}
listObj.prototype.setQuerystr = function(){
	var str = Array();
	for(var i in this.list) { 	str.push(i+"="+this.list[i]);	}
	return str.join("&");
}
listObj.prototype.setList= function(){
	var this_s = this;

	if (!this.listIsInit)
	{
		alert("데이터목록 정보 구성에 실패했습니다.\n잠시후 다시 시도해주세요");
		return;
	}


	try{
		if(parseInt(this.list.pg)<1) this.list.pg = 1;
		var pars = this.setQuerystr(this.url,"","get");


		if (this.actionType=="self")	{
			location.href=this.url + "?" + pars;
		}else{

			$.ajax({
				type:"GET",
				url : this_s.url,
				data : pars,
				success:function(html){

					if(this_s.listType=="M"){
						if(this_s.targetObj.html()=="" || this_s.list.pg==1){
							this_s.targetObj.html(html);
						}else{

							var tmpObj = $("<div>"+html+"</div>");
							var pageStr = $("#pageListStr",tmpObj).html();
							var listStr = $("ul:first-child li",tmpObj);

							$("ul:first-child",this_s.targetObj).append(listStr);
							$("#pageListStr ",this_s.targetObj).html(pageStr);

						}

					}else{
						this_s.targetObj.html(html);
					}
				}
			}
			);
			
		}

		}catch(e){alert(e);}
}



//탭메뉴 초기화
function initTabMenu(){
	var tabObj = $("[isTab]");
	if(tabObj.length>0){
		for(i=0; i<tabObj.length;i++){
			if($(tabObj[i]).attr("initTab")>0) var initTab = $(tabObj[i]).attr("initTab");
			else var initTab = 1;
			setTabMenu(	$(tabObj[i]).attr("isTab"),initTab);
		}
	}
}

//탭메뉴 클릭 액션 설정
function setTabMenu(tab_id,n){

		$("li[id^='" + tab_id + "_btn'] a").click(function(){
			var tabStr = $(this).attr("href");
			var n  = tabStr.replace("#"+tab_id + "_cont","");
			setTabContents(tab_id,n);
			return false;
		});	

		if(n>0) setTabContents(tab_id,n);
}

//탭메뉴 컨텐츠 활성
function setTabContents(tab_id,n){
	if(n==undefined || n<1) n = 1;
	
	//메뉴 버튼 활성
	var btns = $("#"+tab_id+" li a");
	
	for (var i=0;i<btns.length ;i++ )
	{
		var thisNum = $($(btns[i]).parent("li").get(0)).attr("id").replace(tab_id + "_btn","");
		var imgObj = $("img",$(btns[i]));
		
		if(imgObj.length>0){
			var ovImg = $(imgObj).attr("ovImg");		

			if(thisNum==n){
				$(imgObj).attr("src",$(imgObj).attr("ovImg"));
				var outImg = ovImg;
			}else{
				$(imgObj).attr("src",$(imgObj).attr("orgSrc"));
				var outImg = $(imgObj).attr("orgSrc");
				}

			$(imgObj).attr("ovImg",ovImg);
			$(imgObj).attr("outImg",outImg);
			
			$(imgObj).unbind("mouseover");
			$(imgObj).unbind("mouseout");
			
			if(thisNum!=n){
			$(imgObj).bind("mouseover",function (){
					$(this).attr("src",$(this).attr("ovImg"));
					$(this).stop();
					$(this).animate({opacity:0},20);
					$(this).animate({opacity:1},500);
			});
			$(imgObj).bind("mouseout",function (){
					$(this).attr("src",$(this).attr("outImg"));

			});
			}
		}else{
			//이미지 버튼 없을경우 li에 over 속성
			if(thisNum!=n){
				$(btns[i]).removeClass("over");
			}
			else{
				$(btns[i]).addClass("over");

			}
			
		}
	}


	//컨텐츠 활성

	var wrapObj = $("[isTabSub='"+tab_id+"']");
	$("[id^='" + tab_id + "_cont']:not(#"+tab_id+"_cont"+n+")",$(wrapObj)).hide();
	$("#"+tab_id+"_cont"+n,$(wrapObj)).show();

}




// 애니메이션 실행
function goAnimation(arrName,n){


	try{
		
	var arr = (typeof arrName=="string")? eval(arrName) :arrName;
	//alert(arr);
	var totalLen = arr.length;

	if (n<totalLen)
	{

		if( arr[n].type!="function"){

			$(arr[n].target).animate(arr[n].aniObj,arr[n].time,function(){
				goAnimation(arrName,n+1);
			});
		}else{
			if(arr[n].func) eval(arr[n].func);
			setTimeout(function(){goAnimation(arrName,(n+1));},arr[n].time);
			//setTimeout( "goAnimation('"+arrName+"',"+(n+1)+")",arr[n].time);
		}
		
	}else{
		//메인 애니메이션 종료 후 
		

	}
	}catch(e){ alert(e);}
}

function alertLoading(msg){
//	if(msg==undefined) var msg = "데이터 처리중입니다.";
//	$(document).ready(function(){
//		frmWin = new msgPopupWin({w:"300px",h:"120px",setStyle:false,title:"SITE MESSAGE!",clickClose:false});
//		var printMsg = msg.replace(/\b\n\b/i,'<br/>'); 
//		frmWin.addContents("<div class='popErrorMsg'><div class='c pad50t'><img src='/_Img/Common/ajax-loader.gif' alt='로딩 이미지'/> "+printMsg+"</div></div><div class='popErrorBtns'></div>");
//	});
	$("#loading_pop").show();
}
function alertLoadingClose(){
//	try{frmWin.close();}catch(e){}
	setTimeout(function(){$("#loading_pop").hide();},100);
}

// 모달창 닫기
function modal_close(){
	$("#modal_pop").hide();
	$("#modal_content").html("");
}


$(document).ready(function(){
		// scroll body to 0px on click
		$('.btn-top').click(function () {
			$('html,body').animate({scrollTop: 0}, 500);
			return false;
		});
});