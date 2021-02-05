$(function(){
	
	$('.rollover').each(function(){

		// jQuery객체를 준비
		var a = $(this);
		var img = a.find('img');

		// 통상시・마우스 오버시의 src속성을 준비
		var src_off = img.attr('src');
		var src_on = src_off.replace(/^(.+)_off(\.[^\.]+)$/,'$1_on$2');

		// 이미지를 프리로드
		$('<img />').attr('src', src_on);

		// 이벤트를 설정
		a.bind('mouseenter focus', function(){
			img.attr('src', src_on);
		});
		a.bind('mouseleave blur', function(){
			img.attr('src', src_off);
		});

	});
	
});
