$(function(){
	
	$('.guideText').each(function(){
		
		// 초기value값을 취득
		var guideText = this.defaultValue;

		// jQuery객체를 준비
		var element = $(this);

		// 포커스되었을 때
		element.focus(function(){
			// 값이 초기값이라면
			if(element.val()===guideText){
				// 값을 비우고
				element.val('');
				// 클래스'guide'를 삭제
				element.removeClass('guide');
			}
		});

		// 포커스가 벗어났을 때
		element.blur(function(){
			// 아무것도 입력되지 않았다면
			if(element.val()===''){
				// 초기값을 셋트하여
				element.val(guideText);
				// 클래스'guide'를 추가
				element.addClass('guide');
			}
		});

		// 만약 초기값이 입력되면 'guide'클래스추가
		if(element.val()===guideText){
			element.addClass('guide');
		}

	});

});
