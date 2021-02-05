$(function(){

	var class_closed = 'closed'; // 닫기위한 클래스를 정의
	
	$('.accordion').each(function(){
		
		// jQuery객체를 준비
		var dl = $(this);
		var allDt = dl.find('dt');
		var allDd = dl.find('dd');

		// 모두 닫는 함수
		function closeAll(){
			allDt.addClass(class_closed); // 모든 dt의 클래스에 'closed' 추가
			allDd.addClass(class_closed); // 모든 dd의 클래스에 'closed' 추가
		}

		// 지정된 요소를 여는 함수
		function open(dt, dd){
			dt.removeClass(class_closed); // dt의 클래스로부터 'closed' 삭제
			dd.removeClass(class_closed); // dd의 클래스로부터 'closed' 삭제
		}

		// 우선은 모든 dd를 닫는다
		closeAll();

		// 이벤트를 설정
		allDt.click(function(){

			var dt = $(this);
			var dd = dt.next();

			closeAll(); // 모두 닫기
			open(dt, dd); // 클릭된 것을 열기

		});

	});

});
