$(function(){

	// 간격은 3초
	var interval = 3000;

	// slideshow라는 클래스가 부여된 요소 각각에 대해서 처리하기
	$('.slideshow').each(function(){

		// img요소들을 둘러싸고 있는 div요소를 취득
		var container = $(this);

		// 페이드 전환 1회분의 함수
		function switchImg(){

			// img요소를 전부 취득
			var imgs = container.find('img');

			// 선두・2번째의 요소를 취득
			var first = imgs.eq(0); // 선두의 img요소
			var second = imgs.eq(1); // 2번째의 img요소

			// 처음의 img요소를 페이드아웃시켜, 가장 뒤로 이동
			first.fadeOut().appendTo(container);

			// 2번째의 img요소를 페이드인 시킨다.
			second.fadeIn();

		}

		// 3초 마다 switchImg를 실행
		setInterval(switchImg, interval);

	});

});
