//*.js
var nowString = "";
var isIe7 = (/msie 7/i).test(_userAgent_);

if(isIe7) document.writeln('<script type="text/javascript" src="http://cms1.ks.ac.kr//kor/_Js/mainmenu.js?'+nowString+'"></'+'script>');
else document.writeln('<script type="text/javascript" src="http://cms1.ks.ac.kr//kor/_Js/mainmenu.js?'+nowString+'"></'+'script>');


var mainMenu = {
	mnObj : null,
	mnItems:new Array(),
	currentSeq:null,
	initSeq:null,setSeq:null,
	Timer:null,
	isOver:false,
	init:function(objId,seq){

		
		var this_s  = this;
		this.mnObj = $("#" + objId +" > ul");
		this.mnItems = $("> li > a ",$(this.mnObj)) ;		

		this.initSeq = seq;
		this.tmpSeq = seq;
		



		/*
		
		this.isInit = false;
		this_s.moveFlag = 0;
		this.mnObj.bind("mousemove",function(){
			this_s.moveFlag = 0;

		});
		*/

		$("a",$(this.mnObj)).bind("focus", function(){	/* this_s.isOver = true;*/ });
		$("a",$(this.mnObj)).bind("blur", function(){	this_s.setMenuOut();	});

		//대메뉴 설정 
		for (var i=0; i < this.mnItems.length ; i++ ){
			this.mnItems[i].seq = i + 1;
			$(this.mnItems[i]).bind("focus",function(){ this_s.setMenuOn(this.seq);});
			$(this.mnItems[i]).bind("blur",function(){ this_s.setMenuOut();});

			$(this.mnItems[i]).bind("mouseover",function(){ 
				 this_s.setMenuOn(this.seq);
			});

			$(this.mnItems[i]).bind("mouseout",function(){ 
				 this_s.setMenuOut();
			});
		}


		if(this.initSeq<1) { 

		}else{

		}
			this.setMenuOn(seq);
		
	},
	setMenuOn:function(){
		clearTimeout(this.Timer );
		
		var this_s = this;
		var s  = new Array();
		for(var i=0; i<arguments.length;i++){
			s[i] = arguments[i];	
		}
		
		if( s[0]!=0){
			var thisMenu = $("> li:eq(" + ( s[0]-1 ) +")", this.mnObj);
			var otherMenu = $("> li", this.mnObj).not(":eq(" + ( s[0]-1 ) +")");
		}else{
			var thisMenu = null;
			var otherMenu = $("> li", this.mnObj);

		}
		
		//on되어있는 다른 버튼 끄기
	
		$("a",otherMenu).stop().animate({"width":"15px"},200,function(){$(this).removeClass("on").removeClass("over").animate({width:15},200);});

		if(thisMenu!=null && thisMenu.length>0) {
			$("a",thisMenu).stop().addClass("over").animate({"width":"100px"},200,function(){$(this).addClass("on")});
			//this.Timer = setTimeout(function(){this_s.setMenuOn(0);},2000);
		}
		

		this.currentSeq = s[0];
		
	},
	setSeqNum:function(n){
		this.initSeq = n;
	},
	setMenuOut:function(){
		clearTimeout(this.Timer );
		var this_s = this;
		this.isOver = false;	

		this.Timer = setTimeout(function(){

			//if(this_s.isOver==false) {

				this_s.setMenuOn(this_s.initSeq);
			//}
		},100);
	}
}

function initMainmenu() {
	var chkInitNum = parseDocumentURL();
	 
	if(chkInitNum!=""){
		var s1 = chkInitNum.replace("#mcont","");
	}else var s1 =1;
 
	mainMenu.init("mainMenuWrap",s1);

}

function setMainMenuBtns(){
	//메뉴 버튼 클릭액션 지정
	$("#mainMenuWrap a").bind("click",function(){
		var toEl = $(this).attr("href");

		if(toEl.substring(0,1)!="#") {
			toEl = "#"+ $(this).attr("linkObject");
		}

		var toCont = $(toEl).attr("id");


		goMainSection(toCont.replace("mcont",""));

		mainMenu.moveFlag = 1;


		return false;
	});
	//메뉴 버튼 키다운 액션 지정
	$("#mainMenuWrap a").bind("keydown",function(event){

		mainMenu.moveFlag = 1;

		if(event.keyCode==13){
			var toEl = $(this).attr("href");
			if(toEl.substring(0,1)!="#") {
				toEl = "#"+ $(this).attr("linkObject");
				//goMainSection(toEl,false);	

			}
			goMainSection(toEl,false);

			$("a:eq(0)",$(toEl)).focus();
			$("a.btnGoPage",$(toEl)).show();
			return false;
		}else{

		}
	});

}


initMainmenu();

setMainMenuBtns();