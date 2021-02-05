
var mainNavi = {
	mnObj : null,
	mnItems:new Array(),
	currentSeq:null,
	initSeq:null,
	Timer:null,subTimer:null,
	isOver:false,isSubOver:false,
	init:function(objId,seq,seq2){

		
		var this_s  = this;
		this.mnObj = $("#" + objId);
		this.mnItems = $("> li > a ",$(this.mnObj)) ;		
		this.mnLiItems = $("> li",$(this.mnObj)) ;		
		this.mnItemsImg = $("> li > a > img ",$(this.mnObj)) ;

		//�̹��� �ε��� �Ϸ��Ǿ����� üũ �� �� �ε�(���ĸ�,ũ�ҿ��� �̹��� �ε��Ǳ� ���� ������ �����ϴ� ����)
		/*
		if(!isIe6){
		var chkImgLoad = true;
		for (i=0;i<this.mnItemsImg.length ;i++ )
		{
			if(!this.mnItemsImg[i].complete) chkImgLoad = false;
		}
		if(!chkImgLoad) {this.Loader = setTimeout("mainNavi.init('"+objId+"',"+seq+")",50);return;}
		else{
			clearTimeout(this.Loader);
		}
		}
		*/
		
		this.initSeq = seq;
		this.initSeq2 = seq2;

		$(".depth2-wrap",$(this.mnObj)).bind("mouseover focus", function(){	clearTimeout(this_s.subTimer ); this_s.isSubOver = true;	});
		$(".depth2-wrap",$(this.mnObj)).bind("mouseout blur", function(){	clearTimeout(this_s.subTimer ); this_s.isSubOver = false;this_s.setSubMenuOutSet(500);	});

		$("a",$(this.mnObj)).bind("mouseover focus", function(){	 clearTimeout(this_s.subTimer ); this_s.isOver = true;	});
		$("> li > .depth2-wrap",$(this.mnObj)).bind("mouseover focus", function(){	clearTimeout(this_s.subTimer );  this_s.isOver = true;	});

		$("a",$(this.mnObj)).bind("mouseout blur", function(){	clearTimeout(this_s.subTimer ); this_s.isSubOver = false;this_s.setSubMenuOutSet(500); this_s.setMenuOut();	});
		$("> li > .depth2-wrap",$(this.mnObj)).bind("mouseout blur", function(){	this_s.setMenuOut();	});

		var tmpWidth = 980;

		var mnImgs = $(" img ",$(this.mnObj));//.mn_a1

		for (i=0;i<mnImgs.length ;i++ )
		{
			var orgSrc = $(mnImgs[i]).attr("src");
			var ovSrc = $(mnImgs[i]).attr("ovImg");
			$(mnImgs[i]).attr("orgSrc",orgSrc);
			if(ovSrc!=undefined) $(mnImgs[i]).attr("ovSrc",ovSrc);
		}
		

		//1���޴� ���� ũ�⸦ ����
		var tmpItems = $("> li ",$(this.mnObj)) ;
		var reSize = Math.floor(tmpWidth/tmpItems.length);
		
		var tmpWidth = 0;
		var tmpArr = new Array();
		for (i=0;i<tmpItems.length ;i++ )
		{
			
			$(tmpItems[i]).width(reSize);

		}


		//���޴� ���� 
		for (var i=0; i < this.mnItems.length ; i++ ){
			this.mnItems[i].seq = i + 1;
			$($(this.mnItems[i]).parents("li").get(0)).attr("seq",this.mnItems[i].seq);
			$(this.mnItems[i]).bind("mouseover focus",function(){ this_s.setMenuOn(this.seq);});			
			$(".depth2 a",$(this.mnLiItems[i])).each(function(){
				var li2 = $($(this).parents("li").get(0));
				var li1 = $($(li2).parents("li").get(0));

				var n = $(li1).attr("seq");
				$(this).attr("seq",n);
				$(this).attr("seq2",$(li2).index()+1);

				$(this).bind("mouseover focus",function(){
					var n =$(this).attr("seq");
					var n2 = $(this).attr("seq2");
					this_s.setMenuOn(n,n2);					
				});
				
			});
		}
		
	


		var chkMn =  $("> li:eq(" +(this.initSeq-1)+")", this.mnObj);
		if(this.initSeq>0 && chkMn.length>0){
			 this.isFirstOpen = true;
		}else{
			this.isFirstOpen = false;
		}

		if(this.initSeq<1) { 

		}else{
			this.setMenuOn(this.initSeq,this.initSeq2);
		}

		
	},
	setMenuOn:function(){
		clearTimeout(this.Timer );
		var this_s = this;
		var s  = new Array();
		for(var i=0; i<arguments.length;i++){
			s[i] = arguments[i];	
		}

		if(parseInt(s[1])<1 || s[1]==undefined) s[1] = 0;
		
		var thisMenu = $("> li:eq(" + ( s[0]-1 ) +")", this.mnObj);
		var subMenu = $("> .depth2-wrap",$(thisMenu));
		var otherMenu = $("> li", this.mnObj).not(thisMenu);
		var otherSubMenu = $("> .depth2-wrap",$(otherMenu));
		var thisMnImg = $(" > a:first-child   img", thisMenu);
		var otherMnImg = $(" > a:first-child   img", otherMenu);

		
	
		if(this.currentSeq !=s[0]  || this.isSubClose){
			this.setSubMenuOut(this.currentSeq);
			$(thisMenu).addClass("over");
			$(thisMnImg).attr("src",$(thisMnImg).attr("ovSrc"));

			if(!this.isFirstOpen) this.setSubMenuOn(s[0]);
			
			
		}
		

		//�����޴� �ѿ��� ó��

		if(s[1]>0){
			var thisSubMnImg = $(".mn_l2:eq("+(s[1]-1)+") .mn_a2 img",subMenu);
			$(thisSubMnImg).each(function(){ $(this).attr("src",$(this).attr("ovSrc")); });
			var otherSubMnImg = $(".mn_a2 img",this.mnObj).not(thisSubMnImg);
			otherSubMnImg.each(function(){ $(this).attr("src",$(this).attr("orgSrc")); });

		}else if(s[1]==0 && this.initSeq== s[0] && this.initSeq2>0){

			var thisSubMnImg = $(".mn_l2:eq("+(this.initSeq2-1)+") .mn_a2 img",subMenu);
			$(thisSubMnImg).each(function(){ $(this).attr("src",$(this).attr("ovSrc")); });
			var otherSubMnImg = $(".mn_a2 img",this.mnObj).not(thisSubMnImg);
			otherSubMnImg.each(function(){ $(this).attr("src",$(this).attr("orgSrc")); });
		}else{
			var otherSubMnImg = $(".mn_a2 img",this.mnObj);
			otherSubMnImg.each(function(){ $(this).attr("src",$(this).attr("orgSrc")); });
		}

	
		
	
		$(otherMenu).removeClass("over");

		for(i=0; i<otherMnImg.length;i++){
			$(otherMnImg[i]).attr("src",$(otherMnImg[i]).attr("orgSrc"));
		}
	

		if(!this.isFirstOpen) this.currentSeq = s[0];
		this.isFirstOpen = false;


		
	},
	setSubMenuOn:function(seq){
		clearTimeout(this.subTimer );
		var this_s = this;

		this_s.isSubClose = false;

		var subMenu = $("> li:eq(" +  (seq -1) +")  .depth2-wrap",this.mnObj);

		$("#mnavi").stop().animate({"height":"245px"},300);



		this.setSubMenuOutSet(3000);
		
	},
	setSubMenuOut:function(seq){
		
		clearTimeout(this.subTimer );
		var this_s = this;
		var subMenu = $("> li:eq(" +  (seq -1) +") .depth2-wrap",this.mnObj);		
		$("#mnavi").stop().animate({"height":"45px"},300);


		//$(subMenu).fadeOut("fast");


	},
	setSubMenuOutSet:function(time){
		var this_s = this;
		this.subTimer = setTimeout(function(){
			if(!this_s.isSubOver){
				//$(".depth3w").animate({left:-140});
				this_s.isSubClose = true;
				
				$("#mnavi").stop().animate({"height":"45px"},300);

				//���� �޴� �̹��� �ʱ�ȭ
				var thisMn =  $("> li:eq(" + ( this_s.initSeq-1 ) +")",this_s.mnObj);
				var otherMenu = $("> li", this_s.mnObj).not(thisMn);
			
				$("> a:first-child   img", otherMenu).each(function(){		$(this).attr("src",$(this).attr("orgSrc"));	});
				$("> a:first-child   img", thisMn).each(function(){		$(this).attr("src",$(this).attr("ovSrc"));				});
				
			


			}

		},time);
	},
	setMenuOut:function(){
		clearTimeout(this.Timer );
		var this_s = this;
		this.isOver = false;	
		this.Timer = setTimeout(function(){
			if(this_s.isOver==false) {
				//this_s.setMenuOn(this_s.initSeq);
			}
		},400);
	}
}

function initNavigation(s1,s2) {
//	alert(seq);

	if(parseInt(s1)<1) s1 = 0;
	if(parseInt(s2)<1) s2 = 0;
	mainNavi.init("topmenu",s1,s2);

}


