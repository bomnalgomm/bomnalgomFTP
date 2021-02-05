/**
 * SNS처리용으로 사용됩니다.
 */
$(window).on('load', function(){
	
	$(".btnFacebook").on("click", function(e){
		e.preventDefault();
		var page = 1;
		
		if ( $(this).parents('.book1p').attr('id') ) {
			var which = "#" + $(this).parents('.book1p').attr('id');
			var src = $('#book1cont').find(which).find('img').attr('src').replace('/middle/', '/');
			var page = src.substring(src.lastIndexOf("/")+1, src.lastIndexOf("."));
			
		} else {
			var $page1m = $('#book1page1cont a.m');
			var page = $page1m.filter('.on').index();
		}
		
		var url = (this.href) + "&cpage=" + page;
		
		
		var facebookwin = window.open('http://www.facebook.com/sharer.php?t=' + encodeURIComponent(document.title) + '&u=' + encodeURIComponent(url), '', '');
	});
	
	$(".btnTwitter").on("click", function(e){
		e.preventDefault();
		var page = 1;
		
		if ( $(this).parents('.book1p').attr('id') ) {
			var which = "#" + $(this).parents('.book1p').attr('id');
			var src = $('#book1cont').find(which).find('img').attr('src').replace('/middle/', '/');
			var page = src.substring(src.lastIndexOf("/")+1, src.lastIndexOf("."));
			
		} else {
			var $page1m = $('#book1page1cont a.m');
			var page = $page1m.filter('.on').index();
		}
		
		
		
		var url = (this.href) + "&cpage=" + page;
		var facebookwin = window.open('http://twitter.com/home/?status=' + encodeURIComponent(document.title) + ' ' + encodeURIComponent(url), '', '');
	});
	
	
	Kakao.init('d81e7f3ab2771b9b4c792caec73dd804');
	$(".btnKakaotalk").on("click", function(e){
		e.preventDefault();
		
		if ( window.orientation == undefined ) {
			alert("모바일 환경에서만 사용이 가능 합니다.");
			return ;
		}
		
		
		var $img = $("#book1p2").find("img");
		
		Kakao.Link.sendTalkLink({
			label : document.title,
			image: {
    	        src: 'http://' + document.location.host + $img.attr("src"),
    	        width: $img.attr("width"),
    	        height: $img.attr("height")
    	    },
	    	webLink : {
				text : '바로보기',
				url  : this.href
			}
        });
        

	});
	
	
	
});

	
	
	
	
	
	/*
	$.fn.twitter_print = function(setting) { 
	var container = $(this);
	var setting = jQuery.extend({
		"url" : document.URL ,
		"title" : encodeURIComponent(document.title)	
	}, setting);
    
	var a = $('<a href="+ '" target="_blank" title="새 창, 트위터에 담기"></a>');//.append($(img));
	*/
	
  

