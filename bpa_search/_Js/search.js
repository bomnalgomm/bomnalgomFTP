// 인기검색어 탭
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

// 상세검색 
function detailSearchShow(){
	if($("#detail-search").attr("isOpen")=="1"){
		siteMenuAllHide();
	}else{
		$("#detail-search").css({height:0}).show().stop().animate({height:150},300,function(){
			$(".btn-srh-close").attr("title","상세메뉴 닫기");
			$(".detail-cont li.first input").focus();			
		});
	}
}

function detailSearchHide(){
	$("#detail-search").stop().animate({"height":0},300,
	function(){
		$(".btn-srh-close").attr("title","상세검색 열기");
		$(this).hide();}
	);
	$(".btn-srh-more").focus();
}