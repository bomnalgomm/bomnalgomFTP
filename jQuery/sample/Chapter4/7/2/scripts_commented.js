$(function(){
	
	$('.tabSet').each(function(){

		// 사용할 요소를 준비
		var topDiv = $(this);
		var anchors = topDiv.find('ul.tabs a'); // 탭 부분의 a요소
		var panelDivs = topDiv.find('div.panel'); // 패널의 div요소
		var lastAnchor; // 마지막으로 클릭한 a요소를 저장하기 위한 변수
		var lastPanel; // 마지막으로 열린 패널을 저장하기 위한 변수

		// 탭 부분을 표시
		anchors.show();

		// 처음부터 열어 둘 패널을 취득
		lastAnchor = anchors.filter('.on');
		lastPanel = $(lastAnchor.attr('href'));

		// 패널을 모두 숨기고 첫 패널만 열기
		panelDivs.hide();
		lastPanel.show();

		// 이벤트를 설정
		anchors.click(function(event){

			// a요소 클릭의 디폴트 동작을 무효화
			event.preventDefault();
			
			// 클릭된 a요소, 해당 패널을 취득
			var currentAnchor = $(this);
			var currentPanel = $(currentAnchor.attr('href'));

			// 만약 같은 탭이라면 중단 
			if(currentAnchor.get(0) === lastAnchor.get(0)){
				return;
			}

			// 마지막으로 열린 패널을 닫는다 
			lastPanel.slideUp(200, function(){

				// 애니메이션이 종료되었다면…

				lastAnchor.removeClass('on'); // 마지막으로 클릭한 탭의 강조표시를 없앰
				currentAnchor.addClass('on'); // 클릭된 탭을 강조표시시킨다

				currentPanel.slideDown(200); // 클릭된 탭에 해당하는 패널을 표시

				// 다음 처리를 위해 클릭된 a요소, 패널을 변수에 저장
				lastAnchor = currentAnchor;
				lastPanel = currentPanel;

			});

		});

	});
	
});
