$(function(){
	
	// 가이드용 클래스명을 정의
	var guideClass = 'guide';
	
	$('.guideText').each(function(){
		
		// 초기value값을 취득
		var guideText = this.defaultValue;

		// jQuery객체를 준비
		var element = $(this);

		// 내용은 동일. 메소드 체인으로 재작성했다.
		element.focus(function(){
			if(element.val()===guideText){
				element.val('').removeClass(guideClass);
			}
		}).blur(function(){
			if(element.val()===''){
				element.val(guideText).addClass(guideClass);
			}
		});

		// 만약 초기값이 입력되면 가이드용의 클래스추가
		if(element.val()===guideText){
			element.addClass(guideClass);
		}

	});

});
