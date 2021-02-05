$(function(){
	
	// 간격은 3초
	var interval = 3000;

	// slideshow라는 클래스가 부여된 요소 각각에 대해서 처리하기
	$('.slideshow').each(function(){

		// 타이머를 넣어둘 변수를 준비
		var timer;

		// jQuery객체화를 준비
		var container = $(this);

		// 페이드 전환 1회분의 함수
		function switchImg(){

			// a요소를 취득
			var anchors = container.find('a');

			var first = anchors.eq(0); // 선두의 a요소
			var second = anchors.eq(1); // 2번째의 a요소

			// 처음의 a요소를 페이드 아웃시키고, 가장 뒤로 이동
			first.fadeOut().appendTo(container);

			// 2번째의 a요소를 페이드 인 시킨다
			second.fadeIn();

		}

		// 타이머 개시 함수
		function startTimer(){
			timer = setInterval(switchImg, interval);
		}

		// 타이머 정지 함수
		function stopTimer(){
			clearInterval(timer);
		}

		// 이벤트를 설정：
		// 마우스 오버하면 타이머를 정지하고、
		// 마우스 아웃하면 타이머를 개시한다
		container.find('a').hover(stopTimer,startTimer);

		// 처음의 타이머를 개시
		startTimer();

	});

});
