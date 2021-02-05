$(function(){

	// 풍선 도움말의 div 요소를 준비
	var balloon = $('<div class="balloon"></div>').appendTo('body');

	// 풍선 도움말의 위치를 업데이트하는 함수
	function updateBalloonPosition(x, y){
		balloon.css({ left: x + 15, top: y });
	}

	// 풍선 도움말을 표시하는 함수
	function showBalloon(){
		balloon.stop(); // 이미 애니메이션 중인 경우, 중지
		balloon.css('opacity',0).show(); // 투명한 상태로 표시
		balloon.animate({ opacity: 1 }, 200); // 0.2초후에 투명도를 1로
	}

	// 풍선 도움말을 숨기는 함수
	function hideBalloon(){
		balloon.stop(); // 이미 애니메이션 중인 경우, 중지
		balloon.animate(
			{ opacity: 0 }, 200, // 0.2초후에 투명하게
			function(){ balloon.hide(); } // 끝나면 숨김
		);
	}
	
	// 클래스 showBalloon가 있는 요소에 대해 풍선 도움말 표시 작업을 수행
	$('.showBalloon').each(function(){

		var element = $(this);

		// title 속성 값으로 지정된 값을 풍선 도움말의 텍스트로 사용
		var text = element.attr('title');
		// title속성값을 비워 브라우저 디폴트 풍선 도움말을 표시하지 않도록 하기
		element.attr('title','');

		// mouseenter, mouseleave 이벤트를 설정
		element.hover(function(event){
			// 풍선 도움말의 텍스트 업데이트
			balloon.text(text);
			// 커서 위치에서 풍선 도움말의 위치를 업데이트
			updateBalloonPosition(event.pageX, event.pageY); 
			// 풍선 도움말을 표시
			showBalloon();
		},function(){
			// 풍선 도움말을 숨기기
			hideBalloon();
		})
		
		// mousemove이벤트를 설정
		element.mousemove(function(event){
			// 커서 위치에서 풍선 도움말의 위치를 업데이트
			updateBalloonPosition(event.pageX, event.pageY);
		});

	});
	
});
