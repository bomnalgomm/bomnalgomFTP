/* 20140128. Template by MoonYoungshin. 20140708. Last Developer. */

//jQuery.noConflict();
jQuery(function($){
var _isDebug = false;

if(window.console == undefined){console = {log: function(){}};} // [~IE10]

// Desktop|Mobile 구분. 20131025. [IE10, CR, FF, SF, OP, Android WebBrowser]OK
if(window.orientation != undefined){
	$('html').addClass('Mobile'); // SmartPhone, Tablet
}else{
	$('html').addClass('Desktop');
}

//전역변수로 사용
$.smartopen = {
		layout : {
			topmenu : $("#menu1"),				//상단에 출력되는 메뉴영역
			thumbmenu : $("#book1page1cont")	//하단에 출력되는 썸네일 이용한 네비게이션 영역
		}
}

/* ◆◆◆ 화면 배치 : .on('load resize click') */

/* ◆◆ 화면 재배치. 뷰, 페이징 */
$('.book1p img').css({visibility: 'hidden'}); // document 가 ready 되면 실행! 하지만, [~IE8] JS 처리 늦어서 문제! HTML 콘텐츠 바로 다음에 실행하여 해결!

var resetAct1 = function(){ // $(window).on('load', function(){ 여기서(img 등 모든 요소 로딩 후) 실행해야 함 });

	/* 단면or양면 모드 결정 */ //if(window.orientation == 90 || window.orientation == -90) var orientationLandscape = 1; // 가로모드 -- Desktop[CR, IE10, ..] 에서 불가
	if($(window).width() > $(window).height()){
		var orientationLandscape = 1;
	}
	if($(document).width() >= 1024 || orientationLandscape){
		$('html').removeClass('oneFigure');
		$('html').addClass('twoFigures'); // 양면
	 }else{
		$('html').removeClass('twoFigures');
		$('html').addClass('oneFigure'); // 단면
	 }
	_mn = ($('html').hasClass('twoFigures'))? 2: 1; // 2장일 때 계상 ★ _전역변수
	var $page1m = $('#book1page1cont a.m');
	var onIdx = $page1m.filter('.on').index(); // console.log('★현재활성: ' + onIdx);

	/* 맨앞, 맨뒤 버튼 감춤. 앞뒤 빈페이지 고려함.*/
	if( onIdx <= _mn-1 || $page1m.eq(onIdx-1).hasClass('blank') ){
		$('#book1 .prev').css({display:'none'});
	}else{
		$('#book1 .prev').css({display:'block'});
	}

	if( onIdx >= ($page1m.length-1)-(_mn-1) || $page1m.eq(onIdx+1).hasClass('blank') ){
		$('#book1 .next').css({display:'none'});
	}else{
		$('#book1 .next').css({display:'block'});
	}

	/* ◆ 이북뷰 */
	(function(){
		var $this = $('.book1p');
		$this.img = $('img', $this);

		($this.resetViewFull = function(){ // 이미지 세로 정렬
			// ($(this)[0].complete)? 는 [IE10] 로딩전후 판단 부정확하여 사용안함.
			$this.img.each(function(){

				$(this).parent().addClass('js-loading').attr({title:'로딩중…'});
				if(!$(this).height()){ // 이미지 높이 없으면
					$(this).one('load',function(){ // 처음엔 이미지 로딩 후 계상

						$(this).css({'margin-top':($this.height()-$(this).height())/2+'px'});
						$(this).css({visibility: 'visible'}).hide().fadeIn(600, function(){
							$(this).parent().removeClass('js-loading').removeAttr('title');
						});
					});
				}else{
					$(this).css({'margin-top':($this.height()-$(this).height())/2+'px'});
					$(this).css({visibility: 'visible'}).hide().fadeIn(0, function(){
						$(this).parent().removeClass('js-loading').removeAttr('title');
					});
				}
			});
		})();
	})();

	/* ◆ 페이징(축소판) */
	if($('html').hasClass('twoFigures')){ // 양면 활성
		$page1m.filter(':nth-child(2n-1)').css({margin: '1px -2px 0 0', padding: '0 0 0 6px'});
		$page1m.filter(':nth-child(2n)').css({margin: '1px 0 0 0', padding: '0 4px 0 0'});
		if(!(onIdx%2)){ // 좌면이면
			$page1m.eq(onIdx).css({margin: '0 -2px 0 -2px'});
			$page1m.eq(onIdx+1).addClass('on2').css({margin: '0 -2px 0 0'}); // 마주보는 우면
		}else{ // 우면이면
			$page1m.eq(onIdx-1).addClass('on2').css({margin: '0 -2px 0 -2px'}); // 마주보는 좌면
			$page1m.eq(onIdx).css({margin: '0 -2px 0 0'});
		}
	}else{ // 단면 활성
		$page1m.css({margin: '1px 0 0 0', padding: '0 5px'});
		$page1m.filter('.on').css({margin: '0 -1px'});
		$page1m.filter('.on2').removeClass('on2');
	}
}; 	// /resetAct1(){}

/* 초기 안내 잠시 여닫기 */
var isClick1 = 0; // a, button 클릭하면 1
var initGuide1 = function(){
	setTimeout(function(){
		if(!isClick1){ // 클릭 없으면 .layer1(상하단 콘트롤 영역)이 나타났다 사라짐
			$('.layer1').slideDown('fast', function(){});
			// 기획자 요청:마우스 올리면 slideUp이벤트 중지.
			var layer1slide = setTimeout(function(e){
				$('.layer1').slideUp(400, function(){});
			}, 1500);
			$('.layer1').hover(function(){
				clearTimeout(layer1slide);
			});
			//$('.layer1').delay(1500).slideUp(400, function(){}); // 1500? 모바일 주소바 감춰진 후
		}
	}, 500);
};

/* (화면) 초기화 */
var initAct1 = function(){
	$('html').css({padding: '0 0 100% 0', overflow: 'hidden'});
	if($('html').hasClass('Mobile')){ // 모바일이면

		//모바일 디바이스 버젼에 따라서 계속 주소줄이 보였다 나타났다 해서 중지 시킴.
		//window.scrollTo(0, 1);
		setTimeout(function(){ // ●[~IE8] setTimeout 중첩 절대 금지! [~IE7] 죽는다!!
			resetAct1();
		}, 50);
		setTimeout(function(){
			$('html').css({padding: '0 0 1px 0'}); // 위1px 보정
			window.scrollTo(0, 0);
			$('#book1page1').jQmPaging1(); // ☆페이징축소판 재조판(resetAct1();) 후에 기능 결합해야 한다. $(window).on('load', ..); 후 실행되므로.. 이 함수 정의 코드 위치와 상관없다.
		}, 500);
	}else{
		resetAct1();
		setTimeout(function(){
			$('#book1page1').jQmPaging1(); // ☆페이징축소판..
		}, 50);
	}
};

/* 화면 제어 이벤트 연결 */
$(window).on('load', function(){
	initAct1(); // resetAct1() 호출 포함
	initGuide1();
	jQopenLayer2('#body', '.layer2open', '.layer2pop'); // 문맥메뉴.레이어팝업
});
$(window).on('resize', function(){
	initAct1();
});
$('a, button').on('click', function(){
	//initAct1(); // 이전 다음 클릭하면 축소판.클릭되어 중복 실행되지만, 축소판.클릭 유발하지 않는 경우에 필요하다. 깜박이는 문제점 있어.. 아래 $('a.open_menu1') 클릭에만 실행함!
	//isClick1 = 1; // 초기 안내 출현 봉쇄
});
$('body').on('click', function(){
	//isClick1 = 1; // 이러면 단순 클릭에도 볼 수 없음.
});



/* ◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆
 * 상단 메뉴 설정
 *
 * 보기 상스러워서 each로 처리.
 */
($.smartopen.layout.topmenu).each(function(){

	$this = $(this);


	/**
	 * 모든 layer메뉴 감추기
	 * @param el, 해당 요소를 제외하고 hide시키며, toggle이가능한 경우 해당 el의 click 이벤트에서 토글 처리.
	 */
	function hideLayerMenu(el) {
		/* 우클릭 레이어 */
		$('.layer2pop', "#body").removeClass('on').fadeOut('fast');
		/* 토글을 사용하는 경우는 선택된 요소를 제외하고 hide시킴
		 * 토글을 사용하지 않는 경우는 다감춰주세요.
		 */
		if ( el &&  $(el).hasClass("toggle")) {
			var _href= $(el).attr('href');
			$('.toggle', $this).each(function(idx, element){
				if ( $(element).attr('href') != _href ) {
					$($(this).attr('href')).hide();
				}
			});
		} else {
			$('.toggle:not(.close)').each(function(){
				$($(this).attr('href')).hide();
			});
		}
	};

	/* 이전 페이지 버튼, 컨텐츠 영역에 이전 버튼 포함 */
	$this.find('.prev').add('#book1 .prev').on('click', function(e){
		e.preventDefault();
		var newOnIdx = $('#book1page1cont a.m.on').index() - _mn;
		if(newOnIdx < 0){
			newOnIdx = 0;
		}
		hideLayerMenu();
		// 상단 메뉴에서 클릭을 했을경우 추가, 코딩 쉽게 하기위해서 이전버튼 클릭도 전달
		$('#book1page1cont a.m').eq(newOnIdx).triggerHandler('click', {"type": "prev", isMenu : $(this).parents($this).length > 0});

	});

	/* 다음 페이지 버튼, 컨텐츠 영역에 다음 버튼 포함 */
	$this.find('.next').add('#book1 .next').on('click', function(e){
		e.preventDefault();
		var newOnIdx = $('#book1page1cont a.m.on').index();
		// 양명일경우 무조건 +2를 하는경우 on위치가 무조건 두번째 페이지로 지정됨
		// 외부링크 생성 및 저장 시 문제 있어서 무조건 앞쪽으로 고정처리.
		if ( newOnIdx == 1 ) {
			newOnIdx = newOnIdx + 1;
		} else {
			newOnIdx = newOnIdx + _mn;
		}

		if(newOnIdx > ($('#book1page1cont a.m').length-1)){
			newOnIdx = $('#book1page1cont a.m').length-1;
		}
		hideLayerMenu();
		//상단 메뉴에서 클릭을 했을경우 추가, 코딩 쉽게 하기위해서 이후버튼 클릭도 전달
		$('#book1page1cont a.m').eq(newOnIdx).triggerHandler('click', {"type": "next", isMenu : $(this).parents($this).length > 0});
	});

	/* 첫 페이지로 이동 */
	$this.find('.first').on('click', function(e){
		e.preventDefault();
		$('#book1page1cont a.m').eq(0).triggerHandler('click');
	});

	/* 마지막 페이지로 이동 */
	$this.find('.last').on('click', function(e){ e.preventDefault();
		$('#book1page1cont a.m').eq($('#book1page1cont a.m').length-1).triggerHandler('click');
	});

	/* 메뉴초점과, */
	$this.find('a').on('focusin mouseenter', function(){
		$(this).parent('li').addClass('on');
	}).on('focusout mouseleave', function(){
		$(this).parent('li').removeClass('on');

	/* #menu1 이하에 포함된 모든 a 클릭 시 우클릭 레이어 제거 */
	}).not(".close, .fullscreen").on('click', function(){
		hideLayerMenu(this);
	});

	/* 메뉴.창닫기 */
	$this.find('.close_window').on('click', function(e){ e.preventDefault();
		window.close(); // [IE]항상, [CR]새 창으로 오픈한거만 동작한다.
	});

	/* 메뉴.전체화면(메뉴닫기) */
	$this.find('.fullscreen').on('click', function(e){ e.preventDefault();
		$('.layer1').slideToggle('fast', function(){});
		$('.open_menu1').focus();
	});

	/* 페이지 확대 클릭 시 발생되는 이벤트 처리 */
	$this.find('.zoomLeftPage, .zoomRightPage').on('click', function(e){
		var imgcont;
		e.preventDefault();
		e.stopPropagation(); // 버블링 제거
		// 쉽게 쉽게 읽기 쉽게~~
		if ( $(this).hasClass('zoomLeftPage') ) {
			imgcont = $('#book1p1');
		} else if ( $(this).hasClass('zoomRightPage') ) {
			imgcont = $('#book1p2');
		}
		//blank가 있는경우 확대 할 수 없음!.
		if ( imgcont.hasClass("blank") ) {
			alert("해당페이지는 확대 할 수 없습니다.");
			return ;
		}

		// 20140707. 확대할 페이지를 활성화해줘야 확대 후 이전 다음 문제없다.
		if(!imgcont.hasClass('on')){
			$('#book1page1cont a.m.on2').not('.on').triggerHandler('click'); // 해당 페이징(축소판) 클릭하여 활성(on) 한다.
		}

		$('#zoom1 .mCont img').attr({
			src: imgcont.find("img").attr('src').replace('/middle/', '/'),
			alt: imgcont.find("img").attr('alt')
		});
		if(!$('html').hasClass('Mobile')){
			$('html').addClass('onZoom1');
			$('#zoom1 .defaultSize').focus().triggerHandler('click'); // 초점 표시하고 기본크기로 맞춤
		}else{ // 모바일
			window.open('/SmartOpen/html/zoom1.jsp');
		}
	});

	/* 좌측, 우측 페이지 인쇄 */
	$this.find('.printLeftPage, .printRightPage').on('click', function(e){
		var imgcont, p1cls, p2cls;
		e.preventDefault();
		if ( $(this).hasClass('printLeftPage') ) {
			p1cls = 'doPrint';
			p2cls = 'noPrint';
			imgcont = $('#book1p1');
		} else if ( $(this).hasClass('printRightPage') ) {
			p1cls = 'noPrint';
			p2cls = 'doPrint';
			imgcont = $('#book1p2');
		}

		//blank가 있는경우 확대 할 수 없음!.
		if ( imgcont.hasClass("blank") ) {
			alert("빈페이지 입니다 인쇄 할 수 없습니다.");
			return ;
		}

		$('#book1cont #book1p1').addClass(p1cls);
		$('#book1cont #book1p2').addClass(p2cls);

		window.print();
		$('#book1cont .book1p').removeClass('noPrint doPrint');
	});
});
/* ◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆◆ 상단 메뉴 영역 종료 */


/* 메뉴열기(.layer1) */
$('a.open_menu1').on('click', function(e){ e.preventDefault();
	$('.layer1').stop().slideToggle('fast', function(){
		initAct1(); // 20140128
	});
});

/* 이전, 다음 (상단메뉴+이북좌우버튼) */
//$('#menu1 .prev').add('#book1 .prev').add("#book1p1").on('click', function(e){ e.preventDefault();
/*
$('.prev', $.smartopen.layout.topmenu).add('#book1 .prev').on('click', function(e){ e.preventDefault();
	var newOnIdx = $('#book1page1cont a.m.on').index() - _mn;
	if(newOnIdx < 0){
		newOnIdx = 0;
	}

	// 상단 메뉴에서 클릭을 했을경우 추가, 코딩 쉽게 하기위해서 이전버튼 클릭도 전달
	$('#book1page1cont a.m').eq(newOnIdx).triggerHandler('click', {"type": "prev", isMenu : $(this).parents("#menu1").length > 0});
});
*/
/*
 * 상단메뉴의 다음 메뉴 : #menu1 .next
 * 내용보기 상의 다음 버튼 : #book1 .next
 * 우측 이미지페이지  : #book1p2
 * 에 대한 이액션처리.

$('.next', $.smartopen.layout.topmenu).add('#book1 .next').on('click', function(e){ e.preventDefault();
	var newOnIdx = $('#book1page1cont a.m.on').index();
	// 양명일경우 무조건 +2를 하는경우 on위치가 무조건 두번째 페이지로 지정됨
	// 외부링크 생성 및 저장 시 문제 있어서 무조건 앞쪽으로 고정처리.
	if ( newOnIdx == 1 ) {
		newOnIdx = newOnIdx + 1;
	} else {
		newOnIdx = newOnIdx + _mn;
	}

	if(newOnIdx > ($('#book1page1cont a.m').length-1)){
		newOnIdx = $('#book1page1cont a.m').length-1;
	}
	//상단 메뉴에서 클릭을 했을경우 추가, 코딩 쉽게 하기위해서 이후버튼 클릭도 전달
	$('#book1page1cont a.m').eq(newOnIdx).triggerHandler('click', {"type": "next", isMenu : $(this).parents("#menu1").length > 0});
});
 */
/* ◆◆ 상단메뉴 */

// 메뉴토글.20140107. 기본토글+조건분기
$('.toggle').each(function(){$($(this).attr('href')).hide();});
$('.toggle').on('click', function(e){ e.preventDefault();

	var isZoomMenu = $(this).hasClass('zoom'); // 확대메뉴?
	var isOneFigure = $('html').hasClass('oneFigure'); // 단면모드?
	var isMobile = $('html').hasClass('Mobile'); // 모바일?

	if(!isZoomMenu || !isOneFigure){ // 기본 토글 동작한다.
		$(this).toggleClass('on');
		$($(this).attr('href')).toggle();
	}else{ // 확대메뉴 단면모드
		$('#zoom1 .mCont img').attr({
			src: $('#book1cont .book1p.on img').attr('src').replace('/middle/', '/'),
			alt: $('#book1cont .book1p.on img').attr('alt')
		});

		if(!isMobile){
			$('html').addClass('onZoom1');
			$('#zoom1').focus();
			//window.open('zoom1.html');
		}else{ // 모바일
			window.open('/SmartOpen/html/zoom1.jsp');
		}
	}
});
$('.toggle.close').on('click', function(e){ e.preventDefault();
	$(this).parents('.menu1c').prevAll('.toggle').focus(); // parents 가 중첩 div 인 것에 주의! .20140521. prev 를 prevAll 로 수정.
});


/* ◆◆◆ 문맥메뉴 : ★우클릭 이벤트 감지 플러그인 ☆jquery.rightClick.js 필요! */

/* Function sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssstart */

/** jQopenLayer1.20140114.MoonYoungshin. 오픈-레이어팝업2. 키보드 운용 고려 */
function jQopenLayer2(selector, open, pop){
	var $this = $(selector);
	$this.open = $( ((open)?open: '.layer2open'), $this); // 열기
	$this.pop = $( ((pop)?pop: '.layer2pop'), $this); // 레이어팝업
	$this.open.on('click', function(e){ e.preventDefault();
		e.stopPropagation(); // 버블링 제거
		$this.pop.removeClass('on').hide();
		$('html').addClass('clickLayer2open');
		$(this).parent().append($($(this).attr('href'))); // 레이어팝업 이동(원래 노드에서 제거 후 새 노드에 추가!)
		$($(this).attr('href')).addClass('on').fadeIn('fast');
	});
	$('.close', $this.pop).on('click', function(e){ e.preventDefault(); // 닫기
		e.stopPropagation(); // 버블링 제거
		$this.pop.removeClass('on').fadeOut('fast');
		$('.on', $this.pop).removeClass('on'); // 하위 활성 모양 제거
		if($('html').hasClass('clickLayer2open')){ // 키보드 운용 (우클릭 아니고)
			$this.open.focus(); // 오프너에 초점
		}
		$('html').removeClass('clickLayer2open');
	});
}

/* /Function eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeend */

$('#book1 .book1p').each(function(){

	var bound = { // 한계: 팝업 자손 펼친 크기
		x: $('.layer2pop').css({display: 'block'}).width() + $('.layer2pop ul ul').css({display: 'block'}).width(),
		y: $('.layer2pop').css({display: 'block'}).height() + $('.layer2pop ul ul').css({display: 'block'}).height()
	};
	$('.layer2pop').css({display: ''}).find('ul ul').css({display: ''}); // 계산용 값 제거

	if ( !_isDebug ) {
	$(this).noContext().rightClick(function(e){ // ☆기본동작제거하고, 우클릭 구현

		var $this = $(this);
		// 해당 페이지가 blank인 경우 취소처리.
		if ( $this.hasClass("blank") ) {
			return ;
		}

		$('.layer2open', $this).triggerHandler('click');
		$this.pop = $('.layer2pop', $this);
		$this.pop.css({margin: 0}) // 키보드용 값 제거

		// 레이어팝업2단메뉴접은게 (右內下內 | 右外下內 | 右內下外 | 右外下外)?
		// 범위 = 부모위치 + 부모크기 - 레이어팝업너비
		$this.pop.limitX = $this.position().left + $this.width() - $this.pop.width();
		$this.pop.limitY = $this.position().top + $this.height() - $this.pop.height();
		// 상대위치 = 페이지기준이벤트위치 - 부모위치
		$this.pop.reLeft = e.pageX - $this.position().left;
		$this.pop.reTop = e.pageY - $this.position().top;

		if(e.pageX <= $this.pop.limitX && e.pageY <= $this.pop.limitY){ // 右內下內
			$this.pop.css({
				left: $this.pop.reLeft + 'px',
				right: 'auto',
				top: $this.pop.reTop + 'px',
				bottom: 'auto'
			});
			$this.pop.removeClass('rtl btt');
		}
		if(e.pageX > $this.pop.limitX && e.pageY <= $this.pop.limitY){ // 右外下內 - 우경계위치
			$this.pop.css({
				left: 'auto',
				right: '5px', // 딱 붙으니 미워서
				top: $this.pop.reTop + 'px',
				bottom: 'auto'
			});
			$this.pop.removeClass('rtl btt');
			$this.pop.addClass('rtl');
		}
		if(e.pageX <= $this.pop.limitX && e.pageY > $this.pop.limitY){ // 右內下外 - 하경계위치
			$this.pop.css({
				left: $this.pop.reLeft + 'px',
				right: 'auto',
				top: 'auto',
				bottom: '10px'
			});
			$this.pop.removeClass('rtl btt');
			$this.pop.addClass('btt');
		}
		if(e.pageX > $this.pop.limitX && e.pageY > $this.pop.limitY){ // 右外下外 - 우하경계위치
			$this.pop.css({
				left: 'auto',
				right: '5px',
				top: 'auto',
				bottom: '10px'
			});
			$this.pop.removeClass('rtl btt');
			$this.pop.addClass('rtl btt');
		}

		// 레이어팝업2단메뉴펼친게
		if($this.pop.position().left < ($this.width()-bound.x)){ // 우범위 안넘으면
			$this.pop.removeClass('rtl');
		}else{
			$this.pop.addClass('rtl');
		}
		if($this.pop.position().top < ($this.height()-bound.y)){ // 하범위 안넘으면
			$this.pop.removeClass('btt');
		}else{
			$this.pop.addClass('btt');
		}

	});
	}
});

// 문맥메뉴 닫기
$('#book1 .book1p').on('click', function(e){ e.preventDefault();
	$('html').removeClass('clickLayer2open'); // 키보드 운용이 아니므로
	$('.close', this).triggerHandler('click');
	$('.layer2pop', this).css({left: '50%', top: '50%',
		margin: '-' + $('.layer2pop', this).height()/2 + 'px 0 0 -' + $('.layer2pop', this).width()/2 + 'px'
	});

});

// 다단 동작
$('.contextmenu1 .open').on('click', function(e){ e.preventDefault();
	$('.menu2').addClass('on');
})
$('.contextmenu1 .close').on('click', function(e){ e.preventDefault();
	$('.menu2').removeClass('on');
})
// 키보드, 마우스 운용
$('.menu2 li a').on('focusin mouseenter', function(){
	$(this).parent('li').addClass('on');
	$(this).parent('li').children().addClass('on');
	$(this).parent('li').siblings().removeClass('on');
	$(this).parent('li').siblings().children().removeClass('on');
}).on('focusout mouseleave', function(){
	setTimeout(function(){ // 즉시 2단메뉴 접으면 진입할 수 없다.
		$(this).parent('li').removeClass('on');
		$(this).parent('li').children().removeClass('on');
	}, 100);
});


/*
 * 더블클릭 시 화면 확대 처리.
 * @TODO, blank화면에 대한 확대는 지원을 하지 못하도록.
 */
$(".book1p").on("dblclick", function(e){
	e.preventDefault();
	if ( $(this).hasClass("blank") ) {
		return ;
	}
	e.stopPropagation(); // 버블링 제거
	var which = $(this).attr('id');
	switch(which){
	case 'book1p1':
		$('.zoomLeftPage', $.smartopen.layout.topmenu).triggerHandler('click');
		break;
	case 'book1p2':
		$('.zoomRightPage', $.smartopen.layout.topmenu).triggerHandler('click');
		break;
	default:
	}
	$('html').addClass('clickContextmenu1zoom');
} );



/* ◆◆ 문맥메뉴 개별 기능 추가 */
// 동적으로 .contextmenu1 자손에 .zoom 위임하므로 이벤트 연결에 주의바람! ~jQuery1.7 의 .delegate() 메서드와 같음.
/* 확대 */
$('.contextmenu1').on('click', '.zoom', function(e){ e.preventDefault();
	e.stopPropagation(); // 버블링 제거
	var which = $(this).parents('.book1p').attr('id');
	switch(which){
	case 'book1p1':
		$('.zoomLeftPage', $.smartopen.layout.topmenu).triggerHandler('click');
		break;
	case 'book1p2':
		$('.zoomRightPage', $.smartopen.layout.topmenu).triggerHandler('click');
		break;
	default:
	}
	$('html').addClass('clickContextmenu1zoom');
});
/* 인쇄 */
$('.contextmenu1').on('click', '.print', function(e){ e.preventDefault();
	e.stopPropagation(); // 버블링 제거
	var which = $(this).parents('.book1p').attr('id');
	switch(which){
	case 'book1p1':
		$('.printLeftPage', $.smartopen.layout.topmenu).triggerHandler('click');
		break;
	case 'book1p2':
		$('.printRightPage', $.smartopen.layout.topmenu).triggerHandler('click');
		break;
	default:
	}
});
/* 저장 */
$('.contextmenu1').on('click', '.save', function(e){
	//e.preventDefault();
	e.stopPropagation(); // 버블링 제거
	this.href = this.href.replace(/\&page\=[0-9]+/, '');
	var which = "#" + $(this).parents('.book1p').attr('id');
	var src = $('#book1cont').find(which).find('img').attr('src').replace('/middle/', '/');
	var page = src.substring(src.lastIndexOf("/")+1, src.lastIndexOf("."));
	this.href = this.href + "&page=" + (page);
});


/* ◆◆◆ 페이징(축소판) */

/* ◆◆ 축소판.클릭 */
$('#book1page1cont a.m').on('click', function(e, data){
	e.preventDefault();
	var $this = $(this);

	// 상단 메뉴를 통해서 클릭이 이루어진 경우.
	if ( data && data.isMenu ) {
		if ( !data.type ){
		} else if ( data.type === 'next') {
			if ( $(".book1control1 button.next").is(':hidden') ) {
				alert('다음페이지가 없습니다!');
				return ;
			}
		} else if ( data.type === 'prev' ) {
			if ( $(".book1control1 button.prev").is(':hidden') ) {
				alert('이전페이지가 없습니다!');
				return ;
			}
		}
	}

	$('.book1p').removeClass('on on2 blank');
	$this.siblings().addBack().removeClass('on on2');

	if($this.hasClass('blank')){ // if blank page
		$this.addClass('on2');
		if(!(($this.index())%2)){ // if left page
			$this.next().addClass('on');
		}else{ // if right page
			$this.prev().addClass('on');
		}
	}else{
		$this.addClass('on');
		if(!(($this.index())%2)){ // if left page
			$this.next().addClass('on2');
		}else{ // if right page
			$this.prev().addClass('on2');
		}
	}

	// 이미지 불러오기
	$('.book1p img').css({visibility: 'hidden'}); // 나중에 세로 중앙 정렬 후 'visible'

	// ★개발이슈! 이미지 소스값은 파일명은 동일하고 폴더만 다르다는 전제로 치환했음.
	var $onA = $('a.m.on', $this.parent()); // blank 페이지 클릭까지 고려한.. 진짜 활성 페이징축소판.
	if(!(($onA.index())%2)){ // if left page
		// origin -> ""
		$('#book1p1 img').attr({ // left ebook img
			src: $('img', $onA).attr('src').replace('/thumbnail/', '/middle/'),
			alt: $('img', $onA).attr('alt') + ' : ' + $('img', $onA).attr('title')
		}).parent().addClass('on');

		//작은거 클릭 시 페이지가 맞지 않아서 처리가 안되는 부분.
		$('#book1p2 img').attr({ // right ebook img
			src: $('img', $onA.next()).attr('src').replace('/thumbnail/', '/middle/'),
			alt: $('img', $onA.next()).attr('alt') + ' : ' + $('img', $onA.next()).attr('title')
		}).parent().addClass($onA.next().attr('class'));
	}else{ // if right page
		$('#book1p1 img').attr({ // left ebook img
			src: $('img', $onA.prev()).attr('src').replace('/thumbnail/', '/middle/'),
			alt: $('img', $onA.prev()).attr('alt') + ' : ' + $('img', $onA.prev()).attr('title')
		}).parent().addClass($onA.prev().attr('class'));
		$('#book1p2 img').attr({ // right ebook img
			src: $('img', $onA).attr('src').replace('/thumbnail/', '/middle/'),
			alt: $('img', $onA).attr('alt') + ' : ' + $('img', $onA).attr('title')
		}).parent().addClass('on');
	}
	$('.book1p').removeClass('m');

	initAct1(); // 재배치 -- 20140106. 해야한다.
	//$('#book1page1').jQmPaging1(); // 페이징에서 활성 페이지 뷰한다. // initAct1() 안에서 실행되므로 주석처리함.
});

/* Function sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssstart */

/** Paging1.20140128.MoonYoungShin. ◆◆ 페이징 제어 기능 바인딩 */
$.fn.jQmPaging1 = function(options){
	if(!this) return false;
	var config = {
		action: ''
		, mView: '#book1page1view' // 페이징 뷰(페이지묶음) 영역 선택자
		, mCont: '#book1page1cont' // 콘텐츠 그룹 선택자
		, m: 'a.m' // 개별 페이징 메뉴
		, prev: '.prev' // 이전
		, next: '.next' // 다음
		, first: '.first' // 맨앞
		, last: '.last' // 맨뒤
		, line: 1 // 줄수(no use)
	};
	$.extend(config, options);
	return this.each(function(){
		var $this = $(this);
		//DOM
		$this.mView = $(config.mView, $this);
		$this.mCont = $(config.mCont, $this);
		$this.ms = $(config.m, $this.mCont);
		$this.prev = $(config.prev, $this);
		$this.next = $(config.next, $this);
		$this.first = $(config.first, $this);
		$this.last = $(config.last, $this);
		$this.mCont.css({position: 'absolute', left: 0, top: 0});

		($this.reset = function(){ // 너비, 줄, 온페이지 계산

			$this.mView.width = $this.mView.innerWidth(); // padding 포함
			$this.ms.width = $this.ms.outerWidth(true); // padding, border, marign 포함. outerWidth() 는 padding, border 만 포함. outerWidth(), innerWidth(), width() 모두 display 와 무관하다.
			$this.ms.mpv = Math.floor($this.mView.width / $this.ms.width); // 1라인 뷰 안에 온전히 보여지는 메뉴수
			$this.ms.mpv = $this.ms.mpv - $this.ms.mpv%_mn; // 1024 이상이면 _mn = 2 이므로 홀수면 -1(나머지) 하여 작은 짝수를 선택한다.
			$this.mCont.wd = $this.ms.mpv * $this.ms.width; // ☆메뉴(축소판) 안잘리는최대폭계산. = 이전 다음 이동값.
			if($this.ms.hasClass('blank')){ // 빈페이지 있으면
				//원본.
				$this.row = Math.ceil(($this.ms.length - _mn%2*2) / $this.ms.mpv); // 페이징 전체 뷰 개수. 1장씩 보여줄 때 -첫-끝 blank 계상
				$this.onRowIdx = Math.floor(($('.on', $this).index() - _mn%2) / $this.ms.mpv); // 활성 페이징의 뷰 인덱스. 1장씩 보여줄 때 -첫 blank 계상

				//blank에 대한 계산이 필요없습니다.
				//1개이상의 blank가 없으므로
				//시페이지카운트는 = 전체카운트-1.
				//선택된blank페이지가 아닌 페이지는 무조건 0.
				//$this.row = ($this.ms.length - 1); // 페이징 전체 뷰 개수. 1장씩 보여줄 때 -첫-끝 blank 계상
				//$this.onRowIdx = 0;
			}else{
				$this.row = Math.ceil(($this.ms.length) / $this.ms.mpv); // 페이징 전체 뷰 개수. 1장씩 보여줄 때 -첫-끝 blank 계상
				$this.onRowIdx = Math.floor(($('.on', $this).index()) / $this.ms.mpv); // 활성 페이징의 뷰 인덱스. 1장씩 보여줄 때 -첫 blank 계상
			}
			$this.mCont.css({left: 0-$this.mCont.wd*$this.onRowIdx + 'px'}); // 활성 페이징의 뷰를 보여준다.

			//console.log($this.mCont.wd + ' = ' + $this.ms.mpv + '*' + $this.ms.width + ' $this.ms.mpv = ' + $this.mView.width + '/' + $this.ms.width + ' ' + $this.mView.width/$this.ms.width);
			//console.log($(document).width() + ' ' + $(window).width() + ' ' + window.innerWidth);

		})();

		// .바인딩('load resize click'){ .. initAct1(); .. } 하여 안에서 jQmPaging1() 호출되므로 아래 주석처리함.
		/* $(window).on('load resize', function(){ // 다시 맞춤
			$this.reset();
		}); */


		// ★ 아래 이벤트 연결 .off().on() 이유? 리사이즈 등의 이벤트마다 jQmPaging1(); 실행 중복되어 발생하는 동작 오류 해결.

		$this.first.off().on('click', function(e){ e.preventDefault(); // 페이징 맨앞.클릭
			$this.mCont.css({left: 0});
		});
		$this.last.off().on('click', function(e){ e.preventDefault(); // 페이징 맨뒤.클릭
			$this.mCont.css({left: (1-$this.row)*$this.mCont.wd + 'px'});
		});
		$this.prev.off().on('click', function(e){ e.preventDefault(); // 페이징 이전.클릭
			var eventCnt = $this.mCont.queue('fx').length; // 연속 클릭시 이전 animate 멈추고, CSS 속성들 즉각 반영됩니다.
			for(var i=0; i<eventCnt; i++) {
				$this.mCont.stop(true, true);
			}
			if(parseInt($this.mCont.css('left')) < 0){
				$this.mCont.animate({left: parseInt($this.mCont.css('left')) + $this.mCont.wd + 'px'}, 200, 'swing', function(){});
			}else{
				// alert("맨앞입니다");
			}
		});
		$this.next.off().on('click', function(e){ e.preventDefault(); // 페이징 다음.클릭
			var eventCnt = $this.mCont.queue('fx').length;
			for(var i=0; i<eventCnt; i++) {
				$this.mCont.stop(true, true);
			}
			if(parseInt($this.mCont.css('left')) > (1-$this.row)*$this.mCont.wd){
				$this.mCont.animate({left: parseInt($this.mCont.css('left'))-$this.mCont.wd + 'px'}, 200, 'swing', function(){});
			}else{
				// alert("맨뒤입니다");
			}
		});
		/* 키보드운용 */
		$this.ms.eq(0).on('focusin', function(e){ e.preventDefault(); // 첫페이지 진입
			$this.first.triggerHandler('click');
		});
		$this.ms.eq($this.ms.length-1).on('focusin', function(e){ e.preventDefault(); // 끝페이지 진입
			//$this.last.triggerHandler('click'); // 키보드 후진 시, 앞 쪽의 포커스를 볼 수 없으니 주석처리함.
		});
	});
}

/* /Function eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeend */

/* ◆◆◆ 제스처 */

var $book1 = $('#book1'); // 터치 영역 조상
	$book1.mView = $('.mView', $book1);
	$book1.mCont = $('.mCont', $book1);

$book1.prevAct = function(){ // 이전 액션
	$('#book1 .prev').triggerHandler('click');
};
$book1.nextAct = function(){ // 다음 액션
	$('#book1 .next').triggerHandler('click');
};

($book1.gesture1 = function(){
	var o = {
		sx: 0 // start x
		, sy: 0 // start y
		, dx: 0 // distance x
		, dy: 0 // distance y
		, ex: 0 // end x
		, ey: 0 // end y
		, sl: 0 // start left
		, st: 0 // start top
		, threshold: 40 // 반응 기준px값
	}
	//$book1.mView.bind('touchstart touchmove touchend mousedown mousemove mouseup', function(e){
	$book1.mView.bind('touchstart touchmove touchend', function(e){
		 // $(this) 좌상단에서의 터치 이벤트 상대 위치 x, y
		$book1.offsetLeft = ($(this).offset().left < 0)? 0: $(this).offset().left; // 뷰가 화면 보다 클 때 보정
		$book1.offsetTop = ($(this).offset().top < 0)? 0: $(this).offset().top;
		if(e.originalEvent.touches || e.originalEvent.changedTouches){ // 터치 있으면
			var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]; // 싱글 터치
			touch.length = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
		}else{
			var e = e || window.event;
		}
		var x = (e.pageX || touch.pageX) - $book1.offsetLeft;
		var y = (e.pageY || touch.pageY) - $book1.offsetTop;
		if(x < $(this).width() && x > 0 && y < $(this).height() && y > 0){ // $(this) 범위 안이면 동작
			if(e.type == 'touchstart'/* || e.type == 'mousedown' */){
				$book1.onGesture = 1;
				o.sx = x; o.sy = y; // 터치 시작 위치 기억
				o.dx = 0; o.dy = 0; // 터치 이동 거리 초기화
				o.sl = parseInt($book1.mCont.css('left')); // mCont 가 [1][2][3] 나열되어 있을 때와 동일하게 동작하고.. 이전, 다음 동작 시에는 mContC 로 계산할거다.
				clearInterval($book1.timer1); // 자동 정지
			}
			if(e.type == 'touchmove'/* || e.type == 'mousemove' */){
				if($book1.onGesture){
					o.dx = x-o.sx; o.dy = y-o.sy; // 터치 이동 거리 계산
					if(Math.abs(o.dx) > Math.abs(o.dy)){ // 가로 이동 크면 동작
						e.preventDefault();
						// ★▼ Ajax개발! 성능, 데이터 요금.. 문제 해결되어야.. 이전 다음 이미지를 미리 불러와서 보여줄 수 있다. 그전에는 주석처리함.
						//$book1.mCont.css('left', (o.sl + o.dx) + 'px'); // 터치 이동 거리만큼 mCont 이동
					}else{
						$book1.onGesture = 0;
					}
				}
			}
			if(e.type == 'touchend'/* || e.type == 'mouseup' */){
				e.preventDefault();
				$book1.onGesture = 0;
				o.ex = x; o.ey = y; // 터치 종료 위치 기억
				if(Math.abs(o.dx) > Math.abs(o.dy)){ // 가로 이동 크면 동작
					$book1.offsetXdrag = parseInt($book1.mCont.css('left')) || 0; // mContC 를 이전 다음 동작 시 이동한 만큼 보정할거고.. (NAN이면0으로계산)
					$book1.mCont.css('left', (o.sl) + 'px'); // 원위치
					if((o.ex-o.sx) > o.threshold){ // 터치 right →
						$book1.prevAct();
					}
					else if((o.ex-o.sx) < -o.threshold){ // ←터치 left
						$book1.nextAct();
					}
					else{
						$book1.mCont.animate({left: (o.sl) + 'px'}, 'slow', 'swing', function(){});
					}
				}
			}
		}else{ // $(this) 범위 밖이면 원위치
			$book1.mCont.css('left', (o.sl) + 'px'); // 원위치
			$book1.onGesture = 0;
		}
		$('a', this).on('click', function(e){
			if(Math.abs(o.dx) > 2){ // 2px 초과 드래그하면.. 링크 이동 안함.
				e.preventDefault();
			}
		});
		// Bug Fix!!
		if(/touch/.test(e.type)){ // Android 4.1.2 Webkit 534.30 (GalaxyS2, ..) 는 touch 와 mouse 이벤트 동시에 발생하고,
		}else{ // Desktop Web 은 mouse 이벤트만 발생한다. 그래서..
			e.preventDefault(); // 여기서만 이벤트 기본 동작 제거 해줘야지.. 올바로 동작한다.
		}
	});
})();

/*
 *  ▣▣ 확대.레이어창(Desktop) sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssstart
 *
 *  화면이 삭제 되었을 경우.
 */
(function(){ // 변수 충돌 방지하면서 바로 실행
	var $thisImg = $('#zoom1 .mCont img');
	var $thisFrame = $('#zoom1 .mCont img').parent();
	var verticalAlignMiddle = function(){
		if( ($thisImg.height() < $thisFrame.height()) && ($('html').hasClass('IE7') || $('html').hasClass('lteIE6')) ){ // [IE7]이하만 실행
			$thisImg.animate({'margin-top': ($thisFrame.height()-$thisImg.height())/2 + 'px'}, 0, 'swing', function(){}); // 세로중앙
		}else{
			$thisImg.css({'margin-top': 0}); // 상단
		}
		//console.log($thisFrame.height() + '  ' + $thisImg.height() + '  ' + ($thisFrame.height()-$thisImg.height())/2 + '  ' + $thisImg.css('margin-top'))
	};
	$('#zoom1 .defaultSize').on('click', function(e){ e.preventDefault();
		$('#zoom1 .mCont img').css({width: '1040px', height: 'auto', 'max-width': '1040px', 'max-height': 'none'});
		//@TODO:1040에 맞추는 형식이 아니고, 원본크기 그대로 출력을 요함.
	});
	$('#zoom1 .frameFullSize').on('click', function(e){ e.preventDefault();
		$('#zoom1 .mCont img').css({width: '100%', height: 'auto', 'max-width': '100%', 'max-height': 'none'});
	});

	$('#zoom1 .imgFullSize').on('click', function(e){
		e.preventDefault();
		$('#zoom1 .mCont img').css({width: 'auto', height: 'auto', 'max-width': '100%', 'max-height': '100%'});

		//화면에 맞추기위해서 화면 보다 크면 화면크기에 가로/세로비율로 맞춤
		var width = $thisImg.width();
		var height = $thisImg.height();

		var fx = $thisImg.width()/ $(window).width();
		var fy = $thisImg.height()/ $(window).height();
		var f = 1.0;
		if (fx > fy) {
			f = fx;
		} else {
			f = fy;
		}

		if (f < 1)
			f = 1.0;

		width = width/f;
		height = height/f;
		$('#zoom1 .mCont img').css({height: height + 'px'});
		$('#zoom1 .mCont img').css({width : width + 'px'});

		/*
		이전코드 코딩실코드.
		if( ($thisFrame.width()/$thisFrame.height()) > ($thisImg.width()/$thisImg.height()) ){
			$('#zoom1 .mCont img').css({height: $thisFrame.height() + 'px'});
		}else if( ($thisFrame.width()/$thisFrame.height()) < ($thisImg.width()/$thisImg.height()) ){
			$('#zoom1 .mCont img').css({width: $thisFrame.width() + 'px'});
		}
		*/
	});


	$('#zoom1 .zoomIn').on('click', function(e){ e.preventDefault();
		$('#zoom1 .mCont img').css({width: $('#zoom1 .mCont img').width()*1.25 + 'px', height: 'auto', 'max-width': 'none', 'max-height': 'none'});
	});
	$('#zoom1 .zoomOut').on('click', function(e){ e.preventDefault();
		$('#zoom1 .mCont img').css({width: $('#zoom1 .mCont img').width()/1.25 + 'px', height: 'auto', 'max-width': 'none', 'max-height': 'none'});
	});
	$('#zoom1 .print').on('click', function(e){ e.preventDefault();
		window.print();
	});
	/* $('#zoom1 .save').on('click', function(e){ e.preventDefault();
	}); */
	$('#zoom1 .close').on('click', function(e){ e.preventDefault();
		if($('.contextmenu1 .zoom')[0] && $('html').hasClass('clickContextmenu1zoom')){ // 컨텍스트메뉴 확대 클릭으로 확대창 열었다면
			$('.contextmenu1 .zoom').focus();
		}else if($('.layer1').css('display') == 'block'){ // 상단메뉴 열려있으면
			$('.zoom', $.smartopen.layout.topmenu).focus();
		}else{ // 초점할 곳 없으면.. 메뉴열기 초점
			$('a.open_menu1').focus();
		}
		$('html').removeClass('onZoom1 clickContextmenu1zoom');
	});


	$("#zoom1 .btnSave").on("click", function(e){
		e.stopPropagation();
		this.href = this.href.replace(/\&page\=[0-9]+/, '');
		var src = $('#zoom1 .mCont img').attr("src");
		var page = src.substring(src.lastIndexOf("/")+1, src.lastIndexOf("."));
		this.href = this.href + "&page=" + (page);

	});

	/* 로딩 등 이벤트 시 화면 제어 */
	$(window).on('load resize', function(){
		verticalAlignMiddle();
	});
	$('#zoom1 a, button').on('click', function(){
		verticalAlignMiddle();
	});


	/* 20140704. 확대 화면의 이전, 다음 버튼 */

	$('#zoom1 .prev').on('click', function(e){
		e.preventDefault();
		var newOnIdx = $('#book1page1cont a.m.on').index() - 1; // 확대 화면은 무조건 단면
		if(newOnIdx < 0){
			newOnIdx = 0;
		}
		// 축소판.클릭 트리거하면서 이전 버튼 클릭했다는 정보도 전달
		$('#book1page1cont a.m').eq(newOnIdx).triggerHandler('click', {"type": "prev", isMenu : $(this).parents($this).length > 0});
		// 새 활성 이미지로 교체
		$('#zoom1 .mCont img').attr({
			src: $('#book1cont .book1p.on img').attr('src').replace('/middle/', '/'),
			alt: $('#book1cont .book1p.on img').attr('alt')
		});
	});

	$('#zoom1 .next').on('click', function(e){
		e.preventDefault();
		var newOnIdx = $('#book1page1cont a.m.on').index() + 1; // 확대 화면은 무조건 단면
		if(newOnIdx > ($('#book1page1cont a.m').length-1)){
			newOnIdx = $('#book1page1cont a.m').length-1;
		}
		// 축소판.클릭 트리거하면서 다음 버튼 클릭했다는 정보도 전달
		$('#book1page1cont a.m').eq(newOnIdx).triggerHandler('click', {"type": "next", isMenu : $(this).parents($this).length > 0});
		// 새 활성 이미지로 교체
		$('#zoom1 .mCont img').attr({
			src: $('#book1cont .book1p.on img').attr('src').replace('/middle/', '/'),
			alt: $('#book1cont .book1p.on img').attr('alt')
		});
	});



})();///(function(){

/* /확대.레이어창(Desktop) eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeend */

});///jQuery(function($){