
var gphoto ={

	img_obj:null,num_obj:null,subSeq:0,isInit:false,
	setBans:function(){


		var this_s = this;
		this.isIe6 = (/msie 6/i).test(navigator.userAgent);this.isIe9 = (/msie 9/i).test(navigator.userAgent);
		//각 탭에 해당하는 이미지 리스트 객체 및 버튼 객체 지정
		this.img_obj = $("#gphoto ul li");
		this.num_obj = $("#gphoto ul li > .nicon");
		//this.num_obj = $(".m-rolling-num .pbtns");	 //버튼형식일때
		
		this.isPlay = true;
		$("#gphoto .btn-play").hide();




		//번호 아이콘
		var numItems = $(this.num_obj);
		//var numItems = $("> button",this.num_obj);
		for (var j=0;j<numItems.length ;j++ )
		{
			$(numItems[j]).attr("seq",j+1);
			//$(numItems[j]).bind("mouseover",function(){	this_s.setBanner($(this).attr("seq"),false);});
			//$(numItems[j]).bind("focus",function(){	this_s.setBanner($(this).attr("seq"),false);});
			//$(numItems[j]).bind("mouseout",function(){	this_s.setNextBanImgs();});
			$(numItems[j]).bind("click",function(){	this_s.setBanner($(this).attr("seq"),false); return false; });
			//$(numItems[j]).bind("blur",function(){	this_s.setNextBanImgs();});
		}
		
		$("#gphoto .btn-play").bind("click",function(){this_s.isPlay = true; $(this).hide(); $("#gphoto .btn-pause").show(); this_s.setBanner(this_s.subSeq);});
		$("#gphoto .btn-pause").bind("click",function(){this_s.isPlay = false; $(this).hide();$("#gphoto .btn-play").show(); this_s.stopBan();});
		$("#gphoto .btn-next").bind("click",function(){this_s.goNext();});
		$("#gphoto .btn-prev").bind("click",function(){this_s.goPrev();});

		this.initBanner(0);
		this.setBanner(1);
		

		this.isInit = true;

		//this.getListStr();
	},

	initBanner:function(num){
		var this_s = this;
		if (num==undefined || num<1)	var num = 1;
		
		//var subItems = $("li",this.img_obj);
		var subItems = $(".pcont",this.img_obj);
		for (var i=0;i<subItems.length ;i++ )
		{
			//this.onImgObj.attr("len") 
			$(subItems[i]).css({"position":"absolute","display":"none"});//"left":0,"top":0,
			$(subItems[i]).bind("mouseover",function(){ this_s.stopBan(); });

			$(subItems[i]).bind("mouseout",function(){ this_s.setBanner(this_s.subSeq); });
			$(">a",$(subItems[i])).each(function(){
				$(this).attr("subseq",i+1);
			});

			if(num == (i+1)){
				$(subItems[i]).css({"position":"absolute","display":"block"});
			}
			//$(">a",$(subItems[i])).bind("focus",function(){var n = $(this).attr('subseq');this_s.setBanner(n); this_s.stopBan(); });
			//$(">a",$(subItems[i])).bind("blur",function(){this_s.setBanner(this_s.subSeq); });
			
		}
		
		$("img",$(this.num_obj)).each(function(){
			var obj = $(this);
			obj.attr("orgSrc",$(obj).attr("src"));

			if(!obj.attr("ovImg")){
				var fileExt = obj.attr("orgSrc").substr(obj.attr("orgSrc").lastIndexOf("."));
				obj.attr("ovImg", obj.attr("orgSrc").replace(fileExt,""+fileExt));
			}
			

		});

	},
	
	setBanner:function(num,func){
		clearTimeout(this.Timer);		
		var this_s = this;
		
		if (num==undefined)	num = 1 ;

		var obj = this.img_obj;
		//obj.subItems =  $("li",obj);
		obj.subItems =  $(".pcont",obj);

		var numItems= $(this.num_obj);
		//var numItems= $("button",this.num_obj);
		
		if(this.subSeq!=num){
		for (var i=0; i<obj.subItems.length; i++){
			var numImgObj = $("img",$(numItems[i]));
			if ( (i+1)==num ){
				$(numItems[i]).stop().addClass("over");
				
				numImgObj.attr("src",numImgObj.attr("ovImg"));
				
				if(this.isIe6){
					numImgObj.show();
					$(obj.subItems[i]).show();
					
				}else{
					numImgObj.stop().animate({opacity:0},20);
					numImgObj.animate({opacity:1},500);
					$(obj.subItems[i]).stop().animate({"opacity":"1"});

				}
	
				$(obj.subItems[i]).css({"position":"absolute","display":"block"});

			}else{
				$(numItems[i]).stop().removeClass("over");
				numImgObj.attr("src",numImgObj.attr("orgSrc"));

				if(this.isIe6){
					$(obj.subItems[i]).stop().hide();
					
				}else{
				
					$(obj.subItems[i]).stop().animate({"opacity":"0"});
					$(obj.subItems[i]).css({"position":"absolute","display":"none"});
				}
			}
		}
		this.subSeq = num;
		}

		var nextNum = parseInt(num) + 1;
		if(nextNum> obj.subItems.length){
			nextNum = 1;
		}
		

		if(func==undefined && this.isPlay) this_s.setNextBanImgs();//this.Timer = setTimeout(function(){this_s.setBanner(nextTab,nextNum);},3000);
		else if(func==false) {
		}

	}	,
	setNextBanImgs:function(){
		clearTimeout(this.Timer);		
		var this_s = this;
		var nextNum = parseInt(this_s.subSeq) + 1;
		if(nextNum>  $(".pcont",this.img_obj).length){
			nextNum = 1;
		}

	this.Timer = setTimeout(function(){this_s.setBanner(nextNum);},3000);

	},
	stopBan:function(){clearTimeout(this.Timer);},
	goNext:function(){
		clearTimeout(this.Timer);		
		var this_s = this;
		var nextNum = parseInt(this_s.subSeq) + 1;
		if(nextNum>  $(".pcont",this.img_obj).length){
			nextNum = 1;
		}
		this_s.setBanner(nextNum);
	},
	goPrev:function(){
		clearTimeout(this.Timer);		
		var this_s = this;
		var nextNum = parseInt(this_s.subSeq) - 1;
		if(nextNum<1){
			nextNum =  $(".pcont",this.img_obj).length;
		}
		this_s.setBanner(nextNum);
	}
}

