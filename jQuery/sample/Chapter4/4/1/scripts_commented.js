$(function(){
	
	$('.accordion').each(function(){
		
		// jQuery객체를 준비
		var dl = $(this);
		var allDt = dl.find('dt');
		var allDd = dl.find('dd');

		// 우선은 모든 dd를 닫음
		allDd.hide();

        // dt의 커서를 변경
        allDt.css('cursor','pointer');

		// 이벤트를 설정
		allDt.click(function(){

			var dt = $(this);
			var dd = dt.next(); // 다음의 요소를 취득

			// 클릭된 것만을 열기
			allDd.hide();
			dd.show();

			// 커서를 변경
			allDt.css('cursor','pointer');
			dt.css('cursor','default');

		});

	});

});
