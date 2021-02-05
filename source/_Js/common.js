var _userAgent_ = navigator.userAgent;var isIe6 = (/msie 6/i).test(_userAgent_);var isIe7 = (/msie 7/i).test(_userAgent_);var isIe9 = (/msie 9/i).test(_userAgent_); var isComptMode = (/compatible/i).test(_userAgent_);

document.write ("<script type='text/javascript' SRC='http://web.cs21.com/_Js/formcheck.js' charset='utf-8'></script>");

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



//document.write ("<script type='text/javascript' SRC='http://web.cs21.com/_Js/mobile.js' charset='utf-8'></script>");

function sprintf2(zero,text){

	len = zero.length;
	r_txt = zero + text;
	f_len = r_txt.length;
	s_len = f_len - len;
	r_txt = r_txt.slice(s_len,f_len);
	return r_txt;
}

function sprintf(format1, v) {
       var fmt0, s0;
       fmt0 = format1;

       if (typeof(v) == "number")
           return formatNumber(fmt0, v);

       s0 = "" + v;
       return format(fmt0, "" + s0);

       function spaces(cnt) {
           var count = Math.floor(cnt);
           var t = "";
           for (var i = 0; i < count; i++) {
               t += ' ';
           }
           return t;
       }

       function sharps(cnt) {
           var count = Math.floor(cnt);
           var t = "";
           for (var i = 0; i < count; i++) {
               t += '#';
           }
           return t;
       }

       function zeros(cnt) {
           var count = Math.floor(cnt);
           var t = "";
           for (var i = 0; i < count; i++) {
               t += '0';
           }
           return t;
       }

       function byteLength(s) {
           var n = 0;
           var c;
           for (var i = 0; i < s.length; i++) {
               c = s.charAt(i);
               if (c.charCodeAt(0) > 0xFF)
                   n += 2;
               else
                   n++;
           }
           return n;
       }


       function format(fmt, s) {
           var t = "";
           var NORMAL_STATE = 0;
           var PERCENT_STATE = 1;
           var L_STATE = 2;
           var WIDTH_DIGIT_STATE = 3;
           var POINT_DIGIT_STATE = 4;
           var state = NORMAL_STATE;
           var width = 0;
           var pwidth = 0;
           var blen = 0;
           var align = 'left';
           var pos = 0;
           var str = "";
           var a;
           for (var i = 0; i < fmt.length; i++) {
               a = fmt.charAt(i);
               switch (state) {
                   case NORMAL_STATE:
                       if (a != '%')
                           t += a;
                       else {
                           width = 0;
                           pwidth = 0;
                           align = 'left';
                           state = PERCENT_STATE;
                       }
                       break;
                   case PERCENT_STATE:
                       if (a == '%') {
                           t += a;
                           state = NORMAL_STATE;
                       }
                       else if (a == '+') {
                           align = 'right';
                           state = WIDTH_DIGIT_STATE;
                       }
                       else if (a == '-') {
                           align = 'left';
                           width = 0;
                           state = WIDTH_DIGIT_STATE;
                       }
                       else if (a == '@') {
                           align = 'center';
                           width = 0;
                           state = WIDTH_DIGIT_STATE;
                       }
                       else if (a >= '0' && a <= '9') {
                           alignRight = true;
                           width = a.charCodeAt(0) - '0'.charCodeAt(0);
                           state = WIDTH_DIGIT_STATE;
                      }
                      else if (a == '.') {
                          align = 'left';
                          width = 0;
                          pwidth = 0;
                          state = POINT_DIGIT_STATE;
                      }
                      else if (a == 's' || a == 'S') {
                          str = "" + s;
                          blen = byteLength(str);    //
                          if (width >= blen) {       //
                              if (align == 'right')
                                  t += spaces(width - blen) + str;
                              else if (align == 'left')
                                  t += str + spaces(width - blen);
                              else
                                  t += spaces(Math.floor((width - blen)/2)) + str + spaces((width - blen) - Math.floor((width - blen)/2));
                          }
                          else
                              t += str;
                          state = NORMAL_STATE;
                      }
                      else {
                          t += a;
                          state = NORMAL_STATE;
                      }
                      break;
                  case WIDTH_DIGIT_STATE:
                      if (a == '.') {
                          pwidth = 0;
                          state = POINT_DIGIT_STATE;
                      }
                      else if (a >= '0' && a <= '9') {
                          width = 10*width + (a.charCodeAt(0) - '0'.charCodeAt(0));
                      }
                      else if (a == 's' || a == 'S') {
                          str = "" + s;
                          blen = byteLength(str);
                          if (width >= blen) {    //
                              if (align == 'right') {
                                  t += spaces(width - blen) + str;
                              }
                              else if (align == 'left')
                                  t += str + spaces(width - blen);
                              else
                                  t += spaces(Math.floor((width - blen)/2)) + str + spaces((width - blen) - Math.floor((width - blen)/2));
                          }
                          else
                              t += str;
                          state = NORMAL_STATE;
                      }
                      else {
                          t += a;
                          state = NORMAL_STATE;
                      }
                      break;
               }
           }
           return t;
       }


   function formatNumber(fmt, d) {
       var t = "";
       var NORMAL_STATE = 0;
       var PERCENT_STATE = 1;
       var L_STATE = 2;
       var WIDTH_DIGIT_STATE = 3;
       var POINT_DIGIT_STATE = 4;
       var state = NORMAL_STATE;
       var width = 0;
       var pwidth = 0;
       var blen = 0;
       var align = 'left';
       var pos = 0;
       var str = "";
       var a;
       for (var i = 0; i < fmt.length; i++) {
           a = fmt.charAt(i);
           switch (state) {
               case NORMAL_STATE:
                  if (a != '%')
                      t += a;
                  else {
                      width = 0;
                      pwidth = 0;
                      align = 'left';
                      state = PERCENT_STATE;
                  }
                  break;
               case PERCENT_STATE:
                  if (a == '%') {
                      t += a;
                      state = NORMAL_STATE;
                  }
                  else if (a == '+') {
                      align = 'right';
                      state = WIDTH_DIGIT_STATE;
                  }
                  else if (a == '-') {
                      align = 'left';
                      width = 0;
                      state = WIDTH_DIGIT_STATE;
                  }
                  else if (a == '@') {
                      align = 'center';
                      width = 0;
                      state = WIDTH_DIGIT_STATE;
                  }
                  else if (a >= '0' && a <= '9') {
                      align = 'left';
                      width = a.charCodeAt(0) - '0'.charCodeAt(0);
                      state = WIDTH_DIGIT_STATE;
                  }
                  else if (a == '.') {
                      align = 'left';
                      width = 0;
                      pwidth = 0;
                      state = POINT_DIGIT_STATE;
                  }
                  else if (a == 'x' || a == 'X') {
                      str = "" + d.toString(16);
                      if (a == 'X')
                          str = str.toUpperCase();
                      t += str;
                      state = NORMAL_STATE;
                  }
                  else if (a == 'l' || a == 'L') {
                      state = L_STATE;
                  }
                  else if (a == 'o' || a == 'O') {
                      str = "" + d.toString(8);
                      t += str;
                      state = NORMAL_STATE;
                  }
                  else if (a == 'd' || a == 'u' || a == 'D' || a == 'U') {
                      str = "" + Math.round(d);
                      t += str;
                      state = NORMAL_STATE;
                  }
                  else if (a == 'e' || a == 'E') {
                      state = NORMAL_STATE;
                  }
                  else if (a == 'f' || a == 'g' || a == 'F' || a == 'G') {
                      str = "" + d;
                      blen = byteLength(str);   //
                      if (width >= blen) {    //
                          if (align == 'right')
                              t += spaces(width - blen) + str;
                          else if (align == 'left')
                              t += str + spaces(width - blen);
                          else
                              t += spaces(Math.floor((width - blen)/2)) + str + spaces((width - blen) - Math.floor((width - blen)/2));
                      }
                      else
                          t += str;
                      state = NORMAL_STATE;
                  }
                  else {
                      t += a;
                      state = NORMAL_STATE;
                  }
                  break;
               case L_STATE:
                  if (a == 'x' || a == 'X') {
                      str = "" + d.toString(16);
                      blen = byteLength(str);   //
                      if (width >= blen) {    //
                          if (align == 'right')
                              t += spaces(width - blen) + str;
                          else if (align == 'left')
                              t += str + spaces(width - blen);
                          else
                              t += spaces(Math.floor((width - blen)/2)) + str + spaces((width - blen) - Math.floor((width - blen)/2));
                      }
                      else
                          t += str;
                      state = NORMAL_STATE;
                  }
                  else if (a == 'd' || a == 'u' || a == 'D' || a == 'U') {
                      str = "" + Math.round(d);
                      blen = byteLength(str);
                      if (width >= blen) {    //
                          if (align == 'right')
                              t += spaces(width - blen) + str;
                          else if (align == 'left')
                              t += str + spaces(width - blen);
                          else
                              t += spaces(Math.floor((width - blen)/2)) + str + spaces((width - blen) - Math.floor((width - blen)/2));
                      }
                      else
                          t += str;
                      state = NORMAL_STATE;
                  }
                  else {
                      t += a;
                      state = NORMAL_STATE;
                  }
                  break;
               case WIDTH_DIGIT_STATE:
                  if (a == '.') {
                      pwidth = 0;
                      state = POINT_DIGIT_STATE;
                  }
                  else if (a >= '0' && a <= '9') {
                      width = 10*width + (a.charCodeAt(0) - '0'.charCodeAt(0));
                  }
                  else if (a == 'd' || a == 'u' || a == 'D' || a == 'U') {
                      str = "" + Math.round(d);
                      if (a == 'D')
                          str = str.toUpperCase();
                      blen = byteLength(str);
                      if (width >= blen) {    //
                          if (align == 'right')
                              t += spaces(width - blen) + str;
                          else if (align == 'left')
                              t += str + spaces(width - blen);
                          else
                              t += spaces(Math.floor((width - blen)/2)) + str + spaces((width - blen) - Math.floor((width - blen)/2));
                      }
                      else
                          t += str;
                      state = NORMAL_STATE;
                  }
                  else if (a == 'x' || a == 'X') {
                      str = "" + d.toString(16);
                      if (a == 'X')
                          str = str.toUpperCase();
                      blen = byteLength(str);
                      if (width >= blen) {    //
                          if (align == 'right')
                              t += spaces(width - blen) + str;
                          else if (align == 'left')
                              t += str + spaces(width - blen);
                          else
                              t += spaces(Math.floor((width - blen)/2)) + str + spaces((width - blen) - Math.floor((width - blen)/2));
                      }
                      else
                          t += str;
                      state = NORMAL_STATE;
                  }
                  else if (a == 'o' || a == 'O') {
                      str = "" + d.toString(8);
                      blen = byteLength(str);
                      if (width >= blen) {    //
                          if (align == 'right')
                              t += spaces(width - blen) + str;
                          else if (align == 'left')
                              t += str + spaces(width - blen);
                          else
                              t += spaces(Math.floor((width - blen)/2)) + str + spaces((width - blen) - Math.floor((width - blen)/2));
                      }
                      else
                          t += str;
                      state = NORMAL_STATE;
                  }
                  else if (a == 'l' || a == 'L') {
                      state = L_STATE;
                  }
                  else if (a == 'f' || a == 'g' || a == 'F' || a == 'G') {
                      str = "" + d.toFixed();
                      blen = byteLength(str);
                      if (width >= blen) {    //
                          if (align == 'right')
                              t += spaces(width - blen) + str;
                          else if (align == 'left')
                              t += str + spaces(width - blen);
                          else
                              t += spaces(Math.floor((width - blen)/2)) + str + spaces((width - blen) - Math.floor((width - blen)/2));
                      }
                      else
                          t += str;
                      state = NORMAL_STATE;
                  }
                  else {
                      t += a;
                      state = NORMAL_STATE;
                  }
                  break;
               case POINT_DIGIT_STATE:
                  if (a >= '0' && a <= '9') {
                      pwidth = 10*pwidth + (a.charCodeAt(0) - '0'.charCodeAt(0));
                  }
                  else if (a == 'l' || a == 'L') {
                      state = L_STATE;
                  }
                  else if (a == 'e' || a == 'E') {
                      var str = d.toExponential(pwidth);
                      blen = byteLength(str);
                      if (width >= blen) {   // Fix a bug of 1.1
                          if (align == 'right')
                              t += spaces(width - blen) + str;
                          else if (align == 'left')
                              t += str + spaces(width - blen);
                          else
                              t += spaces(Math.floor((width - blen)/2)) + str + spaces((width - blen) - Math.floor((width - blen)/2));
                      }
                      else
                          t += str;
                      state = NORMAL_STATE;
                  }
                  else if (a == 'd' || a == 'u' || a == 'D' || a == 'U') {
                      str = "" + Math.round(d);
                      if (a == 'D')
                          str = str.toUpperCase();
                      blen = byteLength(str);
                      if (width >= blen) {    //
                          if (align == 'right')
                              t += spaces(width - blen) + str;
                          else if (align == 'left')
                              t += str + spaces(width - blen);
                          else
                              t += spaces(Math.floor((width - blen)/2)) + str + spaces((width - blen) - Math.floor((width - blen)/2));
                      }
                      else
                          t += str;
                      state = NORMAL_STATE;
                  }
                  else if (a == 'f' || a == 'g' || a == 'F' || a == 'G') {
                      if (pwidth > 0) {
                          var str = d.toFixed(pwidth);
                          blen = byteLength(str);
                          if (width >= blen) {   // Fix a bug of 1.1
                              if (align == 'right')
                                  t += spaces(width - blen) + str;
                              else if (align == 'left')
                                  t += str + spaces(width - blen);
                              else
                                  t += spaces(Math.floor((width - blen)/2)) + str + spaces((width - blen) - Math.floor((width - blen)/2));
                          }
                      }
                      else {
                          str = "" + Math.round(d);
                          blen = byteLength(str);
                          if (width >= blen) {    //
                              if (align == 'right')
                                  t += spaces(width - blen) + str;
                              else if (align == 'left')
                                  t += str + spaces(width - blen);
                              else
                                  t += spaces(Math.floor((width - blen)/2)) + str + spaces((width - blen) - Math.floor((width - blen)/2));
                          }
                      }
                      state = NORMAL_STATE;
                  }
                  else {
                      t += a;
                      state = NORMAL_STATE;
                  }
                  break;
           }
       }
           return t;
       }
}



/*함수모음 외 기본 js파일 링크 설정*/

//transparent
function printSWF(fn, w, h)
{
 var arg = arguments;
 var argc =  arguments.length;

 str   = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0\"width=\""+w+"\" height=\""+h+"\">";
 str += "        <param name=\"SRC\" value=\""+fn+"\">";
 str += "        <param name=\"wmode\" value=\"transparent\">";
 str += "        <param name=\"quality\" value=\"high\">";
 str += "  <param name=\"loop\" value=\"true\">";
 str += "  <param name=\"menu\" value=\"false\">";
 str += "        <embed src=\""+fn+"\" pluginspage=\"http://www.macromedia.com/shockwave/download/\" type=\"application/x-shockwave-flash\" width=\""+w+"\" height=\""+h+"\" wmode=\"transparent\">";
 str += "        </embed> ";
 str += "</object>";

 document.write(str);
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

function initRollOverImg(){
$(".isRollOver").mouseover(function(){
	var obj = $("img",this);
	obj.attr("orgSrc",$(obj).attr("src"));
	if(!obj.attr("ovImg")){
		if(obj.attr("orgSrc")){
		var fileExt = obj.attr("orgSrc").substr(obj.attr("orgSrc").lastIndexOf("."));
		obj.attr("ovImg", obj.attr("orgSrc").replace(fileExt,"_o"+fileExt));
		}
	}
	$(obj).attr("src",obj.attr("ovImg"));
});
$(".isRollOver").mouseout(function(){
	var obj = $("img",this);
	$(obj).attr("src",obj.attr("orgSrc"));
});

}

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
function initTabMenu2(){
	var tabObj = $("[isTab2]");

	if(tabObj.length>0){
		for(i=0; i<tabObj.length;i++){
			if($(tabObj[i]).attr("initTab")>0) var initTab = $(tabObj[i]).attr("initTab");
			else var initTab = 1;

			setTabMenu2(	$(tabObj[i]).attr("isTab2"),initTab);
		}
	}
}


//탭메뉴 클릭 액션 설정
function setTabMenu2(tab_id,n){

		$("li[id^='" + tab_id + "_btn'] a").click(function(){
			var tabStr = $(this).attr("href");
			var n  = tabStr.replace("#"+tab_id + "_cont","");
			setTabContents2(tab_id,n);
			return false;
		});	

		if(n>0) setTabContents2(tab_id,n);
}

//탭메뉴 컨텐츠 활성
function setTabContents(tab_id,n){
	if(n==undefined || n<1) n = 1;

	
	//메뉴 활성
	$("[id^='" + tab_id + "_tab']").not("#"+tab_id+"_tab"+n+"").removeClass("over");
	$("#"+tab_id+"_tab"+n).addClass("over");

	//컨텐츠 활성
	$("[id^='" + tab_id + "_sub']").not("#"+tab_id+"_sub"+n+"").hide();
	$("#"+tab_id+"_sub"+n).show();

}


//탭메뉴 컨텐츠 활성
function setTabContents2(tab_id,n){
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



function setTab2(obj_id,num){

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
		var btnimg = document.getElementById(obj_id +"img_" + i);

		if (i==num){ 
			if (btnimg!=undefined) btnimg.src = $(btnimg).attr("ovImg");
			tabs[i].className="on"; 
		}
		else{
			if (btnimg!=undefined) btnimg.src = $(btnimg).attr("outImg");
			tabs[i].className="";
		}

	}
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


function image_window(img)
{
	var _charset = "UTF-8";
	var imgsrc	= ($(img).attr("orgSrc"))? $(img).attr("orgSrc") : img.tmp_src;
	
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

function img_resize(obj,w){

	for (i=0; i<obj.length;i++){
		if (parseInt($(obj[i]).width()) > w){
			$(obj[i]).width(w);
		}		
	}
}

function contBoxView(id,type){
	$("." + id + "_sub").hide();
	$("#" + id + type+ "_sub").show();

}
//이메일 주소 선택
function email_domain(email_domain,value){
	var f_obj = document.getElementById(email_domain);
	f_obj.value=value;
	if(value=="") f_obj.style.display="";
	else f_obj.style.display="none";
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
	if(window.opener){
		opener.document.location=u;
	}else{
		window.open(u);	
	}
	window.close();
}
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
	$("body").append(msg_wrap);
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
		$(winCloseBtn).html("<img src='http://web.cs21.com/_Img/Common/sbtn_close.gif'/>");
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
msgPopupWin.prototype.setShow = function(){	$(this.obj).show();}
msgPopupWin.prototype.setHide = function(){	$(this.obj).hide();}
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

/*
function setCenterPos(doc,obj){
	obj.style.left = ((doc.offsetWidth-obj.offsetWidth)/2)  + "px";
	var _top = ((doc.offsetHeight-obj.offsetHeight)/2);
	 _top =  (parseInt(_top)>0) ? _top : 0 ;
	obj.style.top =_top + "px";
}
*/



//메인 이미지 배너
function initBanner(banImgObj,num){

	banImgObj.style.filter="blendTrans(duration=1)";
	banImgObj.subItem = new Array();
	banImgObj.numObj = document.getElementById(banImgObj.id + "_num");
	banImgObj.numItem = new Array();
	banImgObj.len = 0;


	if (num==undefined || num<1)	banImgObj.seq = 1;
	else 	banImgObj.seq = num;

	for (i=1;i<= banImgObj.childNodes.length;i++){
		if ( banImgObj.childNodes[i-1].tagName != "LI") continue;
		banImgObj.len ++;
		banImgObj.subItem[banImgObj.len] = banImgObj.childNodes[i-1];

	}
	var tmp_n =0;
	for (i=1;i<= banImgObj.numObj.childNodes.length;i++){
		if ( banImgObj.numObj.childNodes[i-1].tagName != "LI") continue;
		tmp_n++;
		banImgObj.numItem[tmp_n] = banImgObj.numObj.childNodes[i-1];
		banImgObj.numObj.childNodes[i-1].parentObj = banImgObj;
		banImgObj.numObj.childNodes[i-1].seq = tmp_n;
		banImgObj.numItem[tmp_n].childNodes.item(0).onmouseover = banImgObj.numItem[tmp_n].childNodes.item(0).onfocus = function () {
			this.parentNode.parentObj.seq = this.parentNode.seq;
			setBanner (this.parentNode.parentObj);

		}
	}

}

/*팝업존 등 배터 */
function setBanner(obj,num,fun){

	clearTimeout(obj.Timer);
	if (num!=undefined)	obj.seq = num;

	if (obj.seq > obj.len) {
		obj.seq = 1;
	}
	if(obj.filters!=undefined) 		obj.filters.blendTrans.apply();
	//alert(obj.instName+":"+obj.len)
	for (i=1; i<=obj.len; i++){
		if (obj.seq ==i){
			obj.subItem[i].style.display="";
			obj.numItem[i].childNodes.item(0).className = obj.numItem[i].childNodes.item(0).className.replace(" out "," over ");
		}else{
			obj.numItem[i].childNodes.item(0).className =obj.numItem[i].childNodes.item(0).className.replace(" over "," out ");
			obj.subItem[i].style.display="none";
		}
	}
	
	if(obj.filters!=undefined) 		obj.filters.blendTrans.play();

	var tmp_n = obj.seq+1;
	if (tmp_n > obj.len ) {		
		obj.Timer = setTimeout(obj.instName + ".setNextBanImgs()",3000);
	}else{
		obj.Timer = setTimeout("setBanner(document.getElementById('"+obj.id+"'),"+tmp_n+")",3000);
	}
}


function $alert(msg){
	$(document).ready(function(){
		frmWin = new msgPopupWin({w:"350px",h:"230px",setStyle:true,title:"SITE MESSAGE!",clickClose:false});
		var printMsg = msg.replace(/\b\n\b/i,'<br/>'); 
		frmWin.addContents("<div class='popErrorMsg'>"+printMsg+"</div><div class='popErrorBtns'></div>");
	});
}



function $alertLoading(msg){
	if(msg==undefined) var msg = "데이터 처리중입니다.";
	$(document).ready(function(){
		frmWin = new msgPopupWin({w:"300px",h:"120px",setStyle:false,title:"SITE MESSAGE!",clickClose:false});
		var printMsg = msg.replace(/\b\n\b/i,'<br/>'); 
		frmWin.addContents("<div class='popErrorMsg'><div class='c pad50t'><img src='http://web.cs21.com/_Img/Common/loading_img01.gif' alt=''/> "+printMsg+"</div></div><div class='popErrorBtns'></div>");
	});
}
function $alertLoadingClose(){
	try{frmWin.close();}catch(e){}
}

function setCenterPos(doc,obj){
	obj.style.left = ((doc.offsetWidth-obj.offsetWidth)/2)  + "px";
	obj.style.top = ((doc.offsetHeight-obj.offsetHeight)/2)  + "px";

}
function getCenterPos(doc,obj){
	return {"left":((doc.offsetWidth-obj.offsetWidth)/2),"top":((doc.offsetHeight-obj.offsetHeight)/2) };

}

//PNG 이미지출력
function setPng24(obj) { 

  obj.width=obj.height=1; 
  //obj.style.visibility="hidden";
  obj.className=obj.className.replace(/\bpng24\b/i,''); 
  obj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');" 
  obj.src=''; 
 
  return ''; 
}

//새창열기
function openWindow(href,w,h,title){ window.open(href,'','width='+w+',height='+h+",scrollbars=yes");}

//창크기로 화면 중앙 좌표 구하기
function getWinCenter(w,h){

	var top = parseInt((screen.availHeight)/2-h/2); 
	var left = parseInt((screen.availWidth)/2-w/2); 
	var obj = {"top":top,"left":left};
	return obj;
}

function openIframeLayer(url,width,height,page_title){
	frmWin = new msgPopupWin({w:width+"px",h:height+"px",setStyle:true,title:page_title});
	frmWin.setContents("<iframe width=100% height=99% frameborder=0 src='"+url+"'></iframe>");

}
function openLayerPage(url,width,height,page_title,set){
	try{
		var settings = {w:width+"px",h:height+"px",setStyle:true,page_title:true};
		if(set!=undefined){$.extend(settings, set);	}

	
	frmWin = new msgPopupWin(settings);
	$(frmWin.bodyPannel).load(url,function (){frmWin.setCloseBtns();});
	}catch(e){
	}
}



function OpenZipSearch(zip_id,addr1_id,addr2_id){
	window.open("http://web.cs21.com/zipsearch.php?r=/getAddr.php&zip_id="+ zip_id +"&addr1_id=" + addr1_id + "&addr2_id=" + addr2_id,"winZip", "left=50,top=50,width=400,height=350,scrollbars=1");
}

function OpenZipSearch2(zip_id,addr1_id,addr2_id,url){
	window.open("http://web.cs21.com/zipsearch.php?r="+url+"&zip_id="+ zip_id +"&addr1_id=" + addr1_id + "&addr2_id=" + addr2_id,"winZip", "left=50,top=50,width=400,height=350,scrollbars=1");
}

function editorSet(){
	if (editor_type=="SmartEditor")
	{
		for (i=0; i<oEditors.length;i++){
			oEditors[i].exec("UPDATE_IR_FIELD", []);
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


function setDisableLayer(objid,val){
	var obj1 = $("#"+objid+"_box");
	var obj2 = $("#"+objid+"_layer");

	if(val){
		obj2.hide();
		
	}else{
		obj2.show();
		
		$(obj2).width(obj1.innerWidth());
		$(obj2).height(obj1.innerHeight() );
	}
}




function setIframeSize(obj,w,h){
		$("#" +obj).width(w).height(h);
}



////////////////////////////////////////////////////////
//리스트 추가 삭제 
////////////////////////////////////////////////////////
function itemAddObj(objName, objId,tagName) {	
	this.rootObj = null; this.subObj=null; this.total = 0; this.last_n=0;this.listTagName=(tagName==undefined || tagName=="")? "p":tagName;
	this.useKey = true;
	this.objName = objName;
	this.init(objId,tagName); 
}
itemAddObj.prototype.init = function(objId,tagName){	
		var this_s = this;
		this.rootObj = $("#" + objId);
		this.cloneObj = $(this.listTagName+":first-child",this.rootObj);
		this.subObj= $(this.listTagName,this.rootObj);
		this.total = this.subObj.length;
		this.last_n = this.total +1;
		this.setOrder();
		var this_s = this;
}
itemAddObj.prototype.setOrder = function(){	

	//키보드 및 버튼 액션 초기화
	$(".isDelBtn",this.subObj).unbind("click");	$(".isAddBtn",this.subObj).unbind("click");

	//키보드 및 버튼 액션 초기화
	if(this.useKey){
		$(this.subObj).unbind("keydown");
		$(this.subObj).unbind("keyup");
	}


	this.subObj = $(this.listTagName,this.rootObj);
	
	for (i=0;i<this.subObj.length ;i++ )
	{
		$(this.subObj[i]).attr("n",i+1);
		$(this.subObj[i]).attr("depth",1);
		var thisInputEl = $("input,select",this.subObj[i]);

		for (j=0;j<thisInputEl.length ;j++ )
		{
			var elName = $(thisInputEl[j]).attr("cpname") + "["+(i+1)+"]";
			$(thisInputEl[j]).attr("name",elName);
			$(thisInputEl[j]).attr("parentEl",(i+1));
		}
		
		$(".isBtnField a.isDelBtn",this.subObj[i]).attr("href","javascript:"+this.objName+".Del("+(i+1)+")");
		$(".isBtnField a.isAddBtn",this.subObj[i]).attr("href","javascript:"+this.objName+".Add("+(i+1)+")");


	}
	var this_s = this;
	if(this.useKey){
		$(this.subObj).bind("keydown",function(e){return this_s.setKeyDown(this,e)});
		$(this.subObj).bind("keyup",function(e){return this_s.setKeyUp(this,e)});
	}

	return null;
}

itemAddObj.prototype.Add = function(n){
	
		var this_s = this;
		

		if(n<=1) {
			var obj = this.cloneObj.clone();
			
		}else{
			var obj = $(this.listTagName+":nth("+(parseInt(n) -1 )+")",this.rootObj).clone();

		}

		$("input[type='text']:not([isdepth='true'])",$(obj)).val("");

		$("input[type='checkbox']",obj).attr("checked",false);

		$("select option:first",obj).attr("selected",true);

		var targetObj = (n!="")? $(this.listTagName + ":nth("+(parseInt(n) -1 )+")",this.rootObj): $(this.listTagName + ":last",this.rootObj);
		$(targetObj).after(obj);
		$("input[type='text']:nth(0)",$(obj)).focus();
		this.setOrder();

}


itemAddObj.prototype.addDepth = function(n){
	
		var this_s = this;
		if(n=="" || n==undefined  || n<=1) return;
		//var obj = this.cloneObj.clone();

		var targetObj = (n!="")? $(this.listTagName + ":nth("+(parseInt(n)  -1)+")",this.rootObj): $(this.listTagName + ":last",this.rootObj);
		
		var nowDepth = $("[isdepth='true']",$(targetObj)).val();

		if(parseInt(nowDepth)<1) nowDepth = 1;
		else nowDepth = parseInt(nowDepth)+1;
	

		if(nowDepth>2) return  ;
		$(targetObj).css({"padding-left":15*(nowDepth-1)});
		$("[isdepth='true']",$(targetObj)).val(nowDepth);


}

itemAddObj.prototype.delDepth = function(n){
	
		var this_s = this;
		if(n=="" || n==undefined || n<1) return;

		var targetObj = (n!="")? $(this.listTagName + ":nth("+(parseInt(n)  -1)+")",this.rootObj): $(this.listTagName + ":last",this.rootObj);


		var nowDepth = $("[isdepth='true']",$(targetObj)).val();
		if(parseInt(nowDepth)<=1) nowDepth = 1;
		else nowDepth = parseInt(nowDepth)-1;
		$(targetObj).css({"padding-left":15*(nowDepth-1)});
		$("[isdepth='true']",$(targetObj)).val(nowDepth);


}
itemAddObj.prototype.Del = function(n){
	
		
		if($(this.listTagName ,this.rootObj).length<2) {alert("더이상 삭제하실 수 없습니다.");return;}
		var obj = $(this.listTagName + ":last",this.rootObj);
		
		if(n=="")	var obj = $(this.listTagName + ":last",this.rootObj);
		else			var obj =$(this.listTagName + ":nth("+(parseInt(n)-1)+")",this.rootObj);

		if($(obj).attr("islock")=="1") {alert("삭제하실 수 없는 항목입니다");return;}
		else $(obj).remove();
		
		
		this.setOrder();

		//포커스 이동
		if(n=="" || parseInt(n)>$(this.listTagName,this.rootObj).length)	$(this.listTagName + ":last input[type='text']:eq(0)",this.rootObj).focus();
		else			$(this.listTagName + ":nth("+(parseInt(n)-1)+") input[type='text']:eq(0)",this.rootObj).focus();


}

itemAddObj.prototype.setKeyDown = function(obj,e){

	if(e.which==17) this.rootObj.ctrl = true;
	
	//순서체크
	var chkObjNum = $(e.target).attr("parentEl");

	 if(this.rootObj.ctrl && e.which == 13){

	
	
		 this.Add(chkObjNum);

		 return false;
	 }
	  if(this.rootObj.ctrl && e.which == 46){
		 //순서체크
			 this.Del(chkObjNum);

		 return false;
	 }
	//방향키 ->
	if(this.rootObj.ctrl && e.which==39 ){

		 this.addDepth(chkObjNum);

		 return false;
	 }
	//방향키 <-
	 if(this.rootObj.ctrl && e.which==37 ){
		  this.delDepth(chkObjNum);
		 return false;
	 }
	 //방향키 ↓
	 if(e.which==40 ){
		var chkName = $(e.target).attr("cpname");	

		var obj =$(this.listTagName + ":nth("+parseInt(chkObjNum)+")",this.rootObj);
		$("[cpname='"+chkName+"']",$(obj)).focus();
		 
		 return false;
	 }
	 //방향키 ↑
	 if(e.which==38 ){
		var chkName = $(e.target).attr("cpname");	

		var obj =$(this.listTagName + ":nth("+(parseInt(chkObjNum) -2)+")",this.rootObj);
		$("[cpname='"+chkName+"']",$(obj)).focus();
		 //포커스이동
		 return false;
	 }

	}
itemAddObj.prototype.setKeyUp=function(obj,e){
	if(e.which==17) this.rootObj.ctrl = false;
}



Array.prototype.foreach =function(fn){	var l = this.lengh;	for (var i =0;i<l ;i++ ){	fn(this[i],i,this.clone());}}

////////////////////////////////////////////////////////
//멀티카테고리
////////////////////////////////////////////////////////
function selectObj(settings) {	
	this.obj = null; this.obj_id = ""; this.maxDepth=4; this.s_seq = 1; this.varr = Array(); this.sub_el = Array();this.labelArr  = Array();;
	this.initSelect(settings); 
}
selectObj.prototype.initSelect = function(settings){	
	this.url = settings.url;
	this.obj_id = settings.objId;
	this.maxDepth = settings.max;
	this.obj = document.getElementById(this.obj_id);
	this.labelArr = settings.label;
	this.setName = settings.setName;
	this.listType=settings.listType=="M"? settings.listType:"";

}
selectObj.prototype.setValue = function (str){this.varr = str.split("|");}
selectObj.prototype.makeSelect = function (depth,key,v,varr){
		var pars="prcCode=makeCateSel&depth=" + depth + "&key_v=" + key;
		var url = this.url;
		var el =this.obj;
		var this_s = this;
		var vstr = v;

			//depth 이하  reset
			for (i=this.maxDepth; i>=depth ;i--){
				if (this.sub_el[i]!=undefined){
					try{
					this.obj.removeChild(this.sub_el[i]);
					}catch(e){}
					this.sub_el[i] = null;
					
				}
			}
			if (depth>this.maxDepth) return;
			$.getJSON(url+"?" +pars,function(obj){
				 if(obj.result>0){
					 var sobj =  document.createElement("SELECT");
				 }
				if(sobj==undefined) return;
				 sobj.name = this_s.setName + depth;
				sobj.depth = depth;
				sobj.this_s = this_s;
				sobj.onchange =function(){
					this_s.makeSelect((this.depth+1),this.value,"");
					this_s.selectValue(document.getElementById(this_s.obj_id+"_val"));
				}
				
				var lbl  = depth +"차 분류";
				if(this_s.labelArr[depth-1]!=undefined) lbl =  this_s.labelArr[depth-1] ;
				add_option(sobj,lbl,"");

				for (i=1; i<=obj.result;i++){
					add_option(sobj,obj.str[(i-1)][0],obj.str[(i-1)][1]);
					if (obj.str[(i-1)][1]==vstr)  var select_i = i;	
					else if (obj.str[(i-1)][1]==this_s.varr[(depth-this_s.s_seq)]) var select_i = i;

				}

				this_s.sub_el[depth] = sobj;

				el.appendChild(this_s.sub_el[depth] );
				this_s.sub_el[depth].selectedIndex = select_i;

				this_s.sub_el[depth].onchange();
			
		});
}
selectObj.prototype.getSelectedData = function (){
	var tmp_text = "";
		var tmp_value ="";
		var tmp_split = "";
		var tmp_depth = 0;
		var val_arr = Array();

		for (i=0; i<=this.maxDepth;i++){
			if ( this.sub_el[i]!=undefined && this.sub_el[i].selectedIndex>0){
				tmp_depth ++;
				tmp_text = tmp_text + tmp_split + this.sub_el[i].options[this.sub_el[i].selectedIndex].text;
				tmp_split =  " > ";

				tmp_value = this.sub_el[i].options[this.sub_el[i].selectedIndex].value;
				val_arr.push(tmp_value);
			}
		}
		var return_obj = { full_str:tmp_text,value:tmp_value,sdepth:tmp_depth,values:val_arr.join("|")}
		return return_obj;
}
selectObj.prototype.selectValue =function(obj){
		var v = this.getSelectedData();
		if(obj!=undefined) obj.value = v.values;
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
}
listObj.prototype.initList= function(data){		this.list = {pg:1}	}
listObj.prototype.setListValue= function(att,val){eval("this.list." + att + "='" + val + "'");}
listObj.prototype.setListValues= function(data){for(var i in data) { 	this.list[i] = data[i];} 	this.listIsInit = true;}

listObj.prototype.setListStyle= function(type){	this.list.liststyle = type;		this.setList();}
listObj.prototype.setListSort= function(key,sort){this.list.sortkey = key;		this.list.sort = sort;		this.list.pg = 1;		this.setList();}
listObj.prototype.setListSearch= function(data){for(var i in data) { 	this.list[i] = data[i];} 		this.setList();}
listObj.prototype.setPageSize= function(num){this.list.psize=num;		this.setList();}
listObj.prototype.goPage= function(num){this.list.pg = num;	this.setList();}
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
	for(var i in this.list) { 	str.push(i+":"+this.list[i]);	}
	var urlstr = str.join("/");
	return urlstr;
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



		if(this.noneSetUrl==undefined || this.noneSetUrl!=true) location.href="#" +this.setPageLink();
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
					
					try{

					if(this_s.listCallback!=undefined){
						this_s.listCallback();
					}}catch(e){ alert(e); }
				}
			}
			);
			
		}

		}catch(e){alert(e);}
}


function listToQuerystr(list){
	var str = Array();
	for(var i in list) { 	str.push(i+"="+list[i]);	}
	return str.join("&");
}

function add_option(obj,t_name,t_value){
	var idx = obj.length;
	obj.length= idx + 1;

	obj.options[idx].text = t_name;
	obj.options[idx].value= t_value;
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
//멀티 셀렉트 전체 선택
function multi_select_all(obj_id){
	var obj =  document.getElementById(obj_id);
	for (i=0;i<obj.length;i++ )
	{
		obj.options[i].selected=true;
	}


}


function toclipboard(str)  {     window.clipboardData.setData('Text',str); }
function copyText(str){
	str.select();  
	var clip = str.createTextRange();  
	clip.execCommand('copy');  
	alert(str.value);  
}


function copyLocalUrl(atarget){
	var $obj = $(atarget);
	toclipboard($obj.text());
	alert("경로가 복사되었습니다.");
	
}