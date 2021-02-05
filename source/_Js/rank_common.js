
var _userAgent_ = navigator.userAgent;var isIe6 = (/msie 6/i).test(_userAgent_);var isIe7 = (/msie 7/i).test(_userAgent_);var isIe9 = (/msie 9/i).test(_userAgent_); var isComptMode = (/compatible/i).test(_userAgent_);

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



function replace_all(str,chk,re){
		var strTemp = str.replace(chk, re);
		while(str != strTemp)
		{
		str = strTemp;
		strTemp = str.replace(chk, re);
		}
		return strTemp;
}


 function number_format(data) 
{
	
	var tmp = '';
	var number = '';
	var cutlen = 3;
	var comma = ',';
	var i;
   if(parseInt(data)==0) return 0;
	data = String(data);
	len = data.length;
	mod = (len % cutlen);
	k = cutlen - mod;
	for (i=0; i<data.length; i++) 
	{
		number = number + data.charAt(i);
		
		if (i < data.length - 1) 
		{
			k++;
			if ((k % cutlen) == 0) 
			{
				number = number + comma;
				k = 0;
			}
		}
	}

	return number;
}

function sprintf2(zero,text){

len = zero.length;
r_txt = zero + text;
f_len = r_txt.length;
s_len = f_len - len;
r_txt = r_txt.slice(s_len,f_len);
return r_txt;
}


function initRollOverImg(){
$(".isRollOver").mouseover(function(){
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
$(".isRollOver").mouseout(function(){	var obj = $("img",this);	$(obj).attr("src",obj.attr("orgSrc"));});
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
		setCookie( pop_id, "close" , 1); 
	}
	document.getElementById(pop_id).style.display = "none";
}
function popClose(pop_id){
	if (document.getElementById("chk"+pop_id).checked==true)
	{
		setCookie( pop_id, "close" , 1); 
	}
	this.close();
}

function checkPop(pop_id) {

	if ( getCookie(pop_id) != "close" ) {
		$("#"+ pop_id).show();
		//document.getElementById(pop_id).style.display = "";
	}else{
		$("#"+ pop_id).hide();
	//	document.getElementById(pop_id).style.display = "none";
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
///////////////////////////////////////////////////////////
/*레이어팝업 */

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

	setCenterPos(msg_wrap,msg_body);

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
		$(winCloseBtn).html("<img src='/_Img/Common/btn_close_g.gif'/>");
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
		if(isIe7){
			$(".pop_winBody ",$(winDocWrap)).css({"overflow-x":"hidden"});
			//$($(this.bodyPannel)).width($(".pop_winBody").width()-20);
		}
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

msgPopupWin.prototype.setContents = function(html){	$(this.bodyPannel).html(html); this.setCloseBtns(); this.setContSize();}
msgPopupWin.prototype.setContSize =  function(){
	//사이즈 보정
	if(isIe7) 	{
		var orgContSize = $(".contents",this.bodyPannel).css("paddingLeft") +$(".contents",this.bodyPannel).css("paddingRight");
		$(".contents",this.bodyPannel).width($(this.bodyPannel).width()-18 - orgContSize);
	}
}
msgPopupWin.prototype.addContents = function(html){	$(this.bodyPannel).append(html); this.setCloseBtns(); this.setContSize();}
msgPopupWin.prototype.setTitle = function(str){	this.title = str; $(".pop_title",$(this.obj)).html(str);}
msgPopupWin.prototype.setShow = function(){	$(this.obj).show();}
msgPopupWin.prototype.setHide = function(){	$(this.obj).hide();}
msgPopupWin.prototype.close = function(){	try{$(".contObjectTag").css("visibility","visible");if(this.bodyScroll==true){	$("body").css("overflow-y","");	} $(this.obj).remove();}catch(e){} }
msgPopupWin.prototype.setCloseBtns = function(){
	var this_s = this;
	this.setContSize();
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

function $alert(msg){
	$(document).ready(function(){
		frmWin = new msgPopupWin({w:"350px",h:"230px",setStyle:true,title:"SITE MESSAGE!",clickClose:false});
		var printMsg = msg.replace(/\b\n\b/i,'<br/>'); 
		frmWin.addContents("<div class='popErrorMsg'>"+printMsg+"</div><div class='popErrorBtns'></div>");
	});
}

function $alertLoading(msg){
	if( msg==undefined || msg=="") var msg = "데이터 처리 중입니다.";
	$(document).ready(function(){
		frmWin = new msgPopupWin({w:"300px",h:"120px",setStyle:false,title:"SITE MESSAGE!",clickClose:false});
		var printMsg = msg.replace(/\b\n\b/i,'<br/>'); 
		frmWin.addContents("<div class='popErrorMsg'><div class='c pad50t'><img src='/_Img/Common/loading_img01.gif' alt=''/> "+printMsg+"</div></div><div class='popErrorBtns'></div>");
	});
}
function closeLoadingMsg(){
	frmWin.close();
}

function get_time(){ return new Date().getTime(); }

//중앙위치로 정렬
function setCenterPos(doc,obj){
	obj.style.left = ((doc.offsetWidth-obj.offsetWidth)/2)  + "px";

	obj.style.top = ((doc.offsetHeight-obj.offsetHeight)/2)  + "px";
}


//중앙정렬(absolute로 전환후 center 위치조정)
function setAbsoluteCenter(wrapId,objId){

	var wrapObj = $("#"+wrapId);
	var docWidth = document.documentElement.clientWidth;
	if(docWidth<1 || isComptMode) docWidth = document.body.clientWidth;
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
	if(docWidth<1 || isComptMode) docWidth = document.body.clientWidth;
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
	var chkDomain = 0;
	try{
		if(isSetDomain==true) chkDomain = 1;
	}catch(e){

	}
var zw=	window.open("/Share/zipsearch.php?d="+chkDomain+"&zip_id="+ zip_id +"&addr1_id=" + addr1_id + "&addr2_id=" + addr2_id,"winZip", "left=50,top=50,width=400,height=350,scrollbars=1");
if (zw == null)
		{
			alert("팝업이 차단되어 있어 우편번호 검색창이 열리지 않았습니다.\n팝업차단을 해제해 주시기 바랍니다.");
			return false;
		}
}
function OpenZipSearchNew(zip_id,addr1_id,addr2_id){
		var chkDomain = 0;
	try{
		if(isSetDomain==true) chkDomain = 1;
	}catch(e){

	}
	window.open("/Share/zipsearch.php?d="+chkDomain+"&zip_id="+ zip_id +"&addr1_id=" + addr1_id + "&addr2_id=" + addr2_id,"winZip", "left=50,top=50,width=600,height=710,scrollbars=1");
}

//글자수 입력길이 미리보기
function viewStrlen(objId1,objId2){
	var obj1 = document.getElementById(objId1);
	var obj2 = document.getElementById(objId2);

	obj2.innerHTML = obj1.value.length;

}
function setDisableLayer(objid,val){
	var obj1 = $("#"+objid+"_box");
	var obj2 = $("#"+objid+"_layer");

	if(val){
		obj2.hide();
		
	}else{
		obj2.show();
		
		$(obj2).width(obj1.width());
		$(obj2).height(obj1.height());
	}
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

function sendKakao(title,url,parameter) {

	try{

    kakao.link("talk").send({
        msg : ""+title,
        "url" : url,
        appid : "myaadmin.cafe24.com",
        appver : "2.0",
        appname : "밀양한천",
        type : "link"
    });

	
	}catch(e){alert(e);}



	var sendTxt = "[" + title +"] " + url;
	var wp = window.open("http://twitter.com/home?status=" + encodeURIComponent(sendTxt) , 'twitter', '');
    if ( wp ) {
        wp.focus();
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


//선택된 값을 문자열로 연결
function make_select_list(frm_obj,select_name,split){
	var full_chk_list  ="";
	var split_str="";
	if (split=="") split=",";
	for(var i = 0;i < frm_obj.elements.length;i++) { 
			var currEl = frm_obj.elements[i]; 
			if (currEl.name==select_name && currEl.checked==true){
				full_chk_list = full_chk_list + split_str +currEl.value;
				split_str = split;
			}
	}
	return full_chk_list;
}
//셀렉트박스 전체 리스트 문자열로 연결
function make_select_str(frm_obj,split){
	var full_chk_list  ="";
	var split_str="";
	if (split=="") split=",";
	for(var i = 0;i < frm_obj.options.length;i++) { 
			var currEl = frm_obj.options[i]; 

			//if (currEl.name==select_name && currEl.checked==true){
				full_chk_list = full_chk_list + split_str +currEl.value;
				split_str = split;
			//}
	}
	return full_chk_list;
}
//체크된 체크박스 확인
function chk_select(f,chk_name,num){
	
		if (typeof f!="object") var obj = document.getElementById(f);
		else var obj = f;
		
		var cnt=0;
		for(var i = 0;i < obj.elements.length;i++) { 
			var currEl = obj.elements[i]; 
			if (currEl.getAttribute("type")  =="checkbox" && currEl.name==chk_name && currEl.checked==true ){
				cnt++;
			}
		}
		if (cnt<num) return false;
		else return true;

}
//멀티 셀렉트 전체 선택
function multi_select_all(obj_id){
	var obj =  document.getElementById(obj_id);
	for (i=0;i<obj.length;i++ )
	{
		obj.options[i].selected=true;
	}


}
//셀렉트박스 옵션 삭제
function select_list_del(list_obj)
{
	if (typeof list_obj!="object") var list_obj = document.getElementById(list_obj);

	if (list_obj.length==0)
	{
		alert("삭제할 항목이 없습니다.");
		return;
	}
	if (list_obj.value=="")
	{
		alert("삭제할 항목을 선택해주세요");
		list_obj.focus();
		return;
	}
	var chk_del_str = "";
	chk_del_str += "선택한 항목을 목록에서 제외하시겠습니까?";
	var chk_del = confirm(chk_del_str);

	if (chk_del==true)
	{
		tot_len = list_obj.length;
		for (j=tot_len-1;j>=0;j--)
		{
			if (list_obj.options[j].selected==true)
				list_obj.remove(j);
		}
	}

}

function selectOptionDel(list_obj)
{
	if (typeof list_obj!="object") var list_obj = document.getElementById(list_obj);

	if (list_obj.length==0)
	{
		alert("삭제할 항목이 없습니다.");
		return;
	}
	if (list_obj.value=="")
	{
		alert("삭제할 항목을 선택해주세요");
		list_obj.focus();
		return;
	}
	var chk_del_str = "";
	tot_len = list_obj.length;
	for (j=tot_len-1;j>=0;j--)
	{
		if (list_obj.options[j].selected==true)
			list_obj.remove(j);
	}
	

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



function checkLogin(){
	var chk =	$.ajax({  url: "/Share/CheckLogin.php",  async: false }).responseText;
	return chk;
}

function openLoginWin(){
		window.open("/shop/Member/Login.php?pop=1","popLogin","width=450,height=500");
}
function goLoginPage(){
	var url = document.location.href;
	document.location.href="/shop/Member/Login.php?url=" + encodeURIComponent(url);
}

function openLoginDialog(){
	var loginWin =  new msgPopupWin({w:462,h:350,msgWinDoc:"",setStyle:true,title:"로그인",closeBtns:$(".closeBtn")});
	$(loginWin.bodyPannel).load("/shop/Member/Login.php?pop=2&url=" + encodeURIComponent(document.location.href));

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
	$(".pop_windoc").remove();
	loginWin =  new msgPopupWin({w:652,h:222,msgWinDoc:"",setStyle:false,title:"로그인",closeBtns:$(".closeBtn")});

	$(loginWin.bodyPannel).load("/Share/login.php?prcCode=ajax&url=" + encodeURIComponent(document.location.href),function(){
		$("#login_user_id").focus();
		loginWin.setCloseBtns();
	});



}


function win_open(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}


////////////////////////////////////////////////////////
//리스팅객체
////////////////////////////////////////////////////////
function listObj(settings) {	this.init(settings);	}
listObj.prototype.init = function (settings) {
	var this_s = this;
	
	this.actionType = "self";
	this.pageUrlMode = false;

	if(settings!=undefined){
		for(var i in settings) { 	this[i] = settings[i];} 
	}

	this.list = {pg:1	};
	this.listIsInit = false;
}
listObj.prototype.initList= function(data){		this.list = {pg:1}	}
listObj.prototype.setListValue= function(att,val){eval("this.list." + att + "='" + val + "'");}
listObj.prototype.setListValues= function(data){for(var i in data) { 	this.list[i] = data[i];} 	this.listIsInit = true;}

listObj.prototype.setListStyle= function(type){	this.list.liststyle = type;		this.setList();}
listObj.prototype.setListSort= function(key,sort){this.list.sortkey = key;		this.list.sort = sort;		this.list.pg = 1;		this.setList();}
listObj.prototype.setListSearch= function(data){for(var i in data) { 	this.list[i] = data[i];} 		this.setList();}
listObj.prototype.setPageSize= function(num){this.list.psize=num;		this.setList();}
listObj.prototype.goPage= function(num){this.list.pg = num;	this.setList(true);}
listObj.prototype.parsePageLink= function(num){
	var info = document.location.href;
	var arr = info.split("#");

	if(arr.length>1 && arr[1]!=""){
	var liststr = arr[1].split("/");
	for(var i=0; i<liststr.length;i++){
		var tmp = liststr[i].split(":");
		this.setListValue(tmp[0],tmp[1]);
	}
	}
}
listObj.prototype.setPageLink= function(num){
	var str = Array();
	for(var i in this.list) {
		if(i=="prcCode" || i=="mode"){}
		else{
			str.push(i+":"+this.list[i]);
		}
	}
	var urlstr = str.join("/");
	return urlstr;
}
listObj.prototype.setQuerystr = function(){
	var str = Array();
	for(var i in this.list) { 	str.push(i+"="+this.list[i]);	}
	return str.join("&");
}
listObj.prototype.setList= function(opt){
	var this_s = this;

	if (!this.listIsInit)
	{
		alert("데이터목록 정보 구성에 실패했습니다.\n잠시후 다시 시도해주세요");
		return;
	}


	try{
		if(parseInt(this.list.pg)<1) this.list.pg = 1;
		var pars = this.setQuerystr(this.url,"","get");
		

		if(opt!=undefined && opt==true && this.pageUrlMode!=false) location.href="#" +this.setPageLink();
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


function addFavorite(url,title){

	if(window.sidebar && window.sidebar.addPanel){	//firefox
		window.sidebar.addPanel(title,url,"");
	}else if(window.opera && window.print){	//opera
		var elem = document.createElement('a');
		elem.setAttribute("href",url);
		elem.setAttribute("title",title);
		elem.setAttribute("rel","sidebar");
		elem.click();

	}else if(document.all){
		window.external.AddFavorite(url,title);

	}else{
		alert('해당 브라우저는 즐겨찾기 추가 기능이 지원되지 않습니다.');
		return false;
	}
	
}


//사용자 나이 구하기
/*
function personAge(birth){
	if($date==""){
		$date = Date("Ymd");
	}
	$date_y = substr($date,0,4);
	$date_md = substr($date,4,4);

	$birth = str_replace("-","",$birth);

	$birth_y = substr($birth,0,4);
	$birth_md = substr($birth,4,4);

	$age = $date_y - $birth_y;
	if($date_md <= $birth_md){
		$age++;
	}
	return $age;

	
}
*/