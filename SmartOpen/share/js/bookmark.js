$(window).on('load', function(){
	$(".btnBookmark").on("click", function(e){
		e.preventDefault();
		var $page1m = $('#book1page1cont a.m');
		var onNaviImage = $page1m.filter('.on').index()
		var href = (this.href) + "&cpage=" + (onNaviImage+1);
		var title = this.title;
		
		if (window.sidebar && window.sidebar.addPanel) { // Mozilla Firefox Bookmark
	        window.sidebar.addPanel(title,href,'');
	    } else if(window.external && ('AddFavorite' in window.external)) { // IE Favorite
	        window.external.AddFavorite(href,title); 
	    } else if(window.opera && window.print) { // Opera Hotlist
	        this.title=title;
	        return true;
	    } else { // webkit - safari/chrome
	        alert('Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != - 1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.');
	    }

	});	
});
