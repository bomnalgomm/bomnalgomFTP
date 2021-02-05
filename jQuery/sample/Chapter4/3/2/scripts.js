$(function(){
	var guideClass = 'guide';
	$('.guideText').each(function(){
		var guideText = this.defaultValue;
		var element = $(this);
		element.focus(function(){
			if(element.val()===guideText){
				element.val('').removeClass(guideClass);
			}
		}).blur(function(){
			if(element.val()===''){
				element.val(guideText).addClass(guideClass);
			}
		});
		if(element.val()===guideText){
			element.addClass(guideClass);
		}
	});
});
