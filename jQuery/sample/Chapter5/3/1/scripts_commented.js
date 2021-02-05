$(function(){
	
	$('.rollover').each(function(){

		// jQuery객체를 준비
		var a = $(this);
		var img = a.find('img');

		// 통상시・마우스 오버시의 src속성을 준비
		var src_off = img.attr('src');
		var src_on = src_off.replace('_off','_on');

		// 이미지의 프리로드
		$('<img />').attr('src', src_on);

		// 이벤트 설정
		a.hover(function(){
			img.attr('src', src_on);
		},function(){
			img.attr('src', src_off);
		});

	});
	
});
