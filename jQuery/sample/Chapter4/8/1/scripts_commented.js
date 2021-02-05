$(function(){

	// 풍선 도움말의 div 요소를 준비
	var balloon = $('<div class="balloon"></div>').appendTo('body');

	// 풍선 도움말의 위치를 업데이트하는 함수
	function updateBalloonPosition(x, y){
		balloon.css({ left: x + 15, top: y });
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
			balloon.show();
		},function(){
			// 풍선 도움말을 숨기기
			balloon.hide();
		})
		
		// mousemove이벤트를 설정
		element.mousemove(function(event){
			// 커서 위치에서 풍선 도움말의 위치를 업데이트
			updateBalloonPosition(event.pageX, event.pageY);
		});

	});
	
});
