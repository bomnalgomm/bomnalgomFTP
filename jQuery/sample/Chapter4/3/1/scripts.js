$(function(){
	$('.guideText').each(function(){
		var guideText = this.defaultValue;
		var element = $(this);
		element.focus(function(){
			if(element.val()===guideText){
				element.val('');
				element.removeClass('guide');
			}
		});
		element.blur(function(){
			if(element.val()===''){
				element.val(guideText);
				element.addClass('guide');
			}
		});
		if(element.val()===guideText){
			element.addClass('guide');
		}
	});
});
