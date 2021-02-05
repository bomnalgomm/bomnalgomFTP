//*.js
var nowString = "";
var isIe7 = (/msie 7/i).test(_userAgent_);

if(isIe7) document.writeln('<script type="text/javascript" src="http://cms1.ks.ac.kr//kor/_Js/mainmenu.js?'+nowString+'"></'+'script>');
else document.writeln('<script type="text/javascript" src="http://cms1.ks.ac.kr//kor/_Js/mainmenu.js?'+nowString+'"></'+'script>');

function parseDocumentURL(){
	var url = document.location.href;
	var chkFlag = url.lastIndexOf("#mcont");
	if(chkFlag>0){
		var chkobj = url.slice(chkFlag,url.length);
		return chkobj;
	}

	return "";
	

}



var mContent1 ={
	subSeq:0,

	set:function(){
		var this_s = this;

		
		this.isPlay = true;

		this.bg_obj = $('#mcont1_bg .bg-wrap');
		this.subItems = $(".main1-cont");
		


		$("#mcont1_cont .btnPrev").bind("click",function(){this_s.goPrev();return false;});
		$("#mcont1_cont .btnNext").bind("click",function(){this_s.goNext();return false;});		
		
	

		this.isInit = true;

		this.initBanner(0);
		this.setContent(1);
		

		//this.getListStr();
	},

	initBanner:function(num){
		var this_s = this;
		if (num==undefined || num<1)	var num = 1;
		
		/*
		var subItems =this.img_obj;
		for (var i=0;i<subItems.length ;i++ )
		{
			
		}
		*/
		
			$(".main1-cont .vtxt1, .main1-cont .vtxt2").hide();

	},
	
	setContent:function(num,func){
		clearTimeout(this.Timer);		
		var this_s = this;
		
		if (num==undefined)	num = 1 ;

		
		this.setContentBg(num);
		
		
		if(this.subSeq!=num){
			
			this.subSeq = num;
			for (var i=1;i<=this.subItems.length ; i++)
			{
				var el = $(this.subItems[i-1]);
				if(i==num){
					$(".mcont1-sub",el).stop().animate({left: 0},{
						duration: 800,
						easing:'easeInOutExpo',
						complete:function(){
						}
					});

					$(".vtxt1",el).show("fadeIn");
					$(".vtxt2",el).show("fadeIn");
				}else{
					$(".mcont1-sub",el).stop().animate({left: -580},{
						duration: 800,
						easing:'easeInOutExpo',
						complete:function(){
						}
					});
					$(".vtxt1",el).hide("fadeOut");
					$(".vtxt2",el).hide("fadeOut");

				}

			}

		}

		var nextNum = parseInt(num) + 1;
		if(nextNum> this.subItems.length){
			nextNum = 1;
		}
		

		if(func==undefined && this.isPlay) this_s.setNextContent();//this.Timer = setTimeout(function(){this_s.setContent(nextTab,nextNum);},3000);
		else if(func==false) {
		}

	}	,
	setContentBg:function(n){
		var toX = 2000*(n-1) * -1;

		$(this.bg_obj).stop().animate({left: toX},{
			duration: 800,
			easing:'easeInOutExpo',
			complete:function(){
			}
		});
		var toX2 = 300 *(n-1) * -1;
		$(".ipad-cont").stop().animate({left: toX2},{
			duration: 800,
			easing:'easeInOutExpo',
			complete:function(){
			}
		});
	},
	setNextContent:function(){
		clearTimeout(this.Timer);		
		var this_s = this;
		var nextNum = parseInt(this_s.subSeq) + 1;
		if(nextNum>  this.subItems.length){
			nextNum = 1;
		}

		this.Timer = setTimeout(function(){this_s.setContent(nextNum);},7000);

	},
	stopBan:function(){clearTimeout(this.Timer);},
	
	goNext:function(){
		clearTimeout(this.Timer);		
		var this_s = this;
		var nextNum = parseInt(this_s.subSeq) + 1;
		if(nextNum>  this.subItems.length){
			nextNum = 1;
		}
		this_s.setContent(nextNum);
	},
	goPrev:function(){
		clearTimeout(this.Timer);		
		var this_s = this;
		var nextNum = parseInt(this_s.subSeq) - 1;
		if(nextNum<1){
			nextNum = this.subItems.length;
		}
		this_s.setContent(nextNum);
	}
}


