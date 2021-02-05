var selBox = {
	
	//objs : 	$(".isSelBox1"),
	init:function(){
		this.objs = $(".isWidget-fquick");
		var objArr = Array();
		for (i=0;i<this.objs.length ;i++ )
		{
			objArr[i] = this.objs[i];
			$(".isSelSub",this.objs[i]).append("<div class='isCloseBtnArea'><button class='isCloseBtn'><img src='http://www.haeundae.go.kr/img2/main/icon_btn_close.gif' alt='닫기'/></button></div>")
			if( $(".isSelSub",this.objs[i]).height()>180)  $(".isSelSub ul",this.objs[i]).height(170);
			$(".isSelSub a",this.objs[i]).bind("focus",function(){$(this).addClass("over");});
			$(".isSelSub a",this.objs[i]).bind("blur",function(){$(this).removeClass("over");});
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
