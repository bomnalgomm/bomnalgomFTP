/**
 * @File Name : script_scroll1section3.js
 * @Description : jQuery Code. 스크롤 섹션. 메인본문섹션 페이징. 마우스휠.
 * @Modification Information
 * <pre>
 * 수정일 | 수정자 | 수정내용
 * 2018.03.27 | 문영신 | 최초 등록. jq_scroll1section2.js 버전 20180308 복제
 * 2018.03.27 | 문영신 | 콘텐츠 맞춤. 마우스휠 추가.
 * 2018.04.04 | 문영신 | 더 많이 보이는 콘텐츠 메뉴 활성.
 * 2018.04.06 | 문영신 | 키보드 운용 고도화
 * </pre>
 * @author 웹표준화실 문영신
 * </pre>
 * @author 웹표준화실 문영신
 * @since 2018.03.19
 *
 * @Copyright (C) IACTS.CO.KR All rights reserved.
 */

/* Table of contents )) ☆ 코드 변하면 목차 갱신하세요.
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
즉시실행 --
	변수 초기화
이벤트연결 --
	마우스휠
메인UX연결
	$선택객체
	동작연결
	동작정의
	자동순환
	스크롤. 섹션 위치로 가면 해당 섹션내비 활성
	섹션내비.이벤트연결
	기타.이벤트연결
Function --
	onActiveSN2() // 순번.활성
	smoothScrollToHash() // 섹션내비.동작
	setLocationHash() // URI 해시
	smoothScrollTop() // 부드러운 세로 스크롤
––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
 */

/** ◇◆◇◆◇◆ (function(){})(); 20160725. 20180327. 20180406 MoonYoungshin
 */
(function(){

var onSN = 0, // on serial number 1, 2, 3, …
	nowScrollTop = 0, // $(window).scrollTop() 담는거
	vmTop = 0, // 섹션 이전 요소 상쇄값. 기본 $head.height()
	vmTopFirst = 0, // 첫째 섹션 상쇄값
	vmTopLast = 0, // 맨끝 섹션 상쇄값
	this_hash = '', // #해시값 담는거
	this_hash_top = '', // $(this_hash).offset().top
	location_href = '', // location.href 담아 계산
	end_top = 0, // 목적위치
	setoff = 0, // 상쇄값 최종 상계
	timer1 = 0, // 섹션순환타이머
	timer2 = 0, // #head fixed 지연타이머
	interval = 60000, // 간격 ★☆
	isStop = 0, // 정지상태
	do1 = {}, // 동작정의
	// 20180327
	isScroll = false, // 스크롤 동작중 
	duration = 600, // 스크롤 동작시간
	bar;


/** ◇◆  마우스휠. 20180327. MoonYoungshin
 */
$(function(){
	var delta = 0;
	$("html, body").on('mousewheel DOMMouseScroll', function(e) {
		e.preventDefault();
		var e = e.originalEvent;
			//console.log(e);
		if (e.detail) { // [FF]
			delta = e.detail * -28; // [CR][IE]과 동일하게 계상
			//console.log('detail: '+ delta);
		}else{ // [CR][IE]
			delta = e.wheelDelta;
			//console.log('wheelDelta: '+ delta);
		}
		//console.log(delta);
		if( isScroll == false ){
			if( delta < 0){ // 아래로 스크롤
				do1.next();
			}else if( delta > 0 ){ // 위로 스크롤
				do1.prev();
			}
			isScroll = true;
		}
	});
});


/** ◇◆◇◆ 메인UX연결. 20180327. MoonYoungshin
 * Use1) immediate funtions
 * Task) To Advance. To OOP!!
 */
$(function(){
	var $this, // 섹션내비요소 중 활성인거 담는거
		$nav1a = $('#go1mainbody li a'), // 섹션내비
		$nav2a = $('.mousewheel1[class*="scroll1"]'), // 마우스휠스크롤
		$nav1top = $('#gotop1'),	// 현재 페이지 상단으로 가기
		$section = $('#body [class*="mainbody"]'), // 바디섹션
		$head = $('#head'),
		$foot = $('#foot'),
		$b1stop = $('.control1 .stop'), // 버튼 정지
		$b1play = $('.control1 .play'), // 버튼 재생
		$b1prev = $('.control1 .prev'), // 버튼 이전
		$b1next = $('.control1 .next'); // 버튼 다음


	/** ◇◆ 동작연결. 20160725. MoonYoungshin
	 */
	/* (function(){
		$b1stop.on('click', function(){ // 정지
			$b1stop.addClass('off');
			isStop = 1;
			do1.stop();
		});
		$b1play.on('click', function(){ // 재생
			$b1stop.removeClass('off');
			isStop = 0;
			do1.play();
		});
		$b1prev.on('click', function(){ // 이전
			do1.prev();
		});
		$b1next.on('click', function(){ // 다음
			do1.next();
		});
        $('#body .container').on('mouseenter focusin', function(){ // 본문 영역에 마우스 진입 또는 초점진입
			$b1stop.addClass('off');
			isStop = 1;
			do1.stop();
        });
	})(); */


	/** ◇◆ 동작정의. 20180327. MoonYoungshin
	 */

	do1.act = function(){ // 기본동작

		$this = $nav1a.eq(onSN-1);

		// 상쇄값 최종 상계
		vmTop = $head.height(); // 20180327. 공통.상단 높이 고려함.
		nowScrollTop = $(window).scrollTop();
		this_hash = $this[0].hash;
		this_hash_top = $(this_hash).offset().top;

		//if( onSN ==  $nav1a.length ){ // 맨끝 // ★☆20180308. 주석처리
			setoff = 0; // 상쇄값없다.
		//}else{ // 맨끝제외
			//if( (nowScrollTop < vmTop) && (this_hash_top > vmTop) ){ // #head 클릭시엔 relative 이고 조각링크로 이동중~후에는 fixed 로 변화.
				setoff = -vmTop * 2; // ★☆ #head 에 가리지 않고, 높이에서 빠진 #head 까지 고려
			//}else{
				setoff = (-vmTop + 2); // ★☆ 상쇄값 + 2 이유 )) 스크롤 연결 섹션내비 활성 결함 방지 위해.. 경계보다 조금 더 스크롤을 내린다.
			//}
		//}
		//console.log(onSN+'   '+setoff+'   '+$(window).scrollTop());
		smoothScrollToHash($this, setoff);
	};

	do1.stop = function(){ // 정지
		clearInterval(timer1);
	};

	do1.play = function(){ // 재생
		clearInterval(timer1);
		timer1 = setInterval(function(){
			do1.auto();
		}, interval);
	};

	do1.prev = function(){ // 이전
		if( --onSN < 1 ){
			//onSN = $nav1a.length; // 반대끝으로 돌리기
			onSN = 1; // 안돌리기
		}
		do1.act();
	};
	do1.next = function(){ // 다음
		if( ++onSN > $nav1a.length ){
			//onSN = 1; // 반대끝으로 돌리기
			onSN = $nav1a.length; // 안돌리기
		}
		do1.act();
	};


	/** ◇◆ 자동순환. 20160725. MoonYoungshin
	 */
	/* (function(){
		clearInterval(timer1);
		timer1 = setInterval(function(){
			do1.auto();
		}, interval);
		do1.auto = function(){ // 다음 동작
			if(!isStop){
				do1.next();
			}
		}
	})(); */


	/** ◇◆ 스크롤. 섹션 위치로 가면 해당 섹션내비 활성. 20180327. 20180406. MoonYoungshin
	 */
	$(window).on('scroll load resize', function(e){

		nowScrollTop = $(window).scrollTop();
		vmTop = $head.height(); // 콘텐츠 상단이 공통.상단 높이 바로 밑에 오면 활성.  // ★☆ 공통.상단 높이 고려안하려면 주석처리한다.
		vmTopFirst = vmTop;
		vmTopLast = ($(document).height() - $(window).height()) - $foot.height(); // 콘텐츠 상단이 #foot 바로 밑에 오면..
		vmTop2 = ($(window).height()/2);
		vmTop = vmTop2; // 더 많이 보이는 콘텐츠 메뉴 활성. // ★☆ 안하려면 주석처리한다.

		if(nowScrollTop > $head.height()){
			$head.addClass('fixed'); // 헤더 항상 보이게
		}else{
			$head.removeClass('fixed');
		}

		if(nowScrollTop == 0 || nowScrollTop < vmTop ){ // 기본
			onSN = 1; // onSN = 0
		}
		if(nowScrollTop > ($section.eq(0).offset().top - vmTopFirst) ){
			onSN = 1;
		}
		if(nowScrollTop > ($section.eq(1).offset().top - vmTop)){
			onSN = 2;
		}
		if(nowScrollTop > ($section.eq(2).offset().top - vmTop)){
			onSN = 3;
		}
		if(nowScrollTop > ($section.eq(3).offset().top - vmTop)){
			onSN = 4;
		}
		// 맨끝은 반이상 보이거나 푸터보이기시작하면 활성 // ★☆ 20180327.
		if( (nowScrollTop > ($section.eq(4).offset().top - vmTop2)) || (nowScrollTop > vmTopLast) ){
			onSN = 5;
		}

		onActiveSN2(onSN, [$nav1a, $section]);

	});


	/** ◇◆ 섹션내비.이벤트연결. 20160725. MoonYoungshin
	 */
	$nav1a.each(function(index, element){
		// element == this
		$(this).on('click', function(e){
			e.preventDefault();
			onSN = index + 1;
			do1.act();
		});
	});


	/** ◇◆ 섹션.이벤트연결. 20180406. MoonYoungshin
	 */
	$section.each(function(index, element){
		// element == this
		$(this).on('focusin', function(e){
			onSN = index + 1;
			do1.act();
		});
	});


	/** ◇◆ 기타.이벤트연결. 20180327. MoonYoungshin
	 */
	$nav1top.on('click', function(e){ // 맨 위로 가기
		e.preventDefault();
		//setLocationHash($(this)[0].hash);
		smoothScrollTop(0);
	});

	$nav2a.each(function(index, element){
		$(this).on('click', function(e){
			e.preventDefault();
			smoothScrollToHash($(this), setoff);
		});
	});


});
/** /◇◆◇◆ 메인UX연결 **/


/* ◇◆ Function ◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆ */


	/** ◇◆ 순번.활성 20180406. MoonYoungshin
	 */
	function onActiveSN2(onSN, objArray){ // 활성순번, [요소객체배열, 요소객체배열, ..]

		for (property in objArray){
			var $it = objArray[property];

			if(!$it.siblings().length){ // li>a 이면 li 을 선택
				$it = $it.closest('li');
			}
			$it.filter('.on').removeClass('on');
			if(onSN){ // .eq(-1) 은 맨끝이므로.. 걸러줘야한다.
				$it.eq(onSN-1).addClass('on');
			}
		}

	}


	/** ◇◆ 섹션내비.동작 20160725. MoonYoungshin
	 */
	function smoothScrollToHash($this, setoff){ // (제이쿼리객체, 상쇄값)
		this_hash = $this[0].hash; // = $this.attr('href');
		this_hash_top = $(this_hash).offset().top;
		smoothScrollTop( this_hash_top, setoff );
	}


	/** ◇◆ URI 해시 20160725. MoonYoungshin. (현재사용안함)
	 */
	function setLocationHash(uriHash){ // (해시값) 인자 this_hash 사용하니 스코프 변수와 충돌나서 uriHash 로 수정함.
		//console.log(location.href);
		//console.log(uriHash);
		location_href = location.href;
		location_href = location_href.substring(0, location_href.lastIndexOf('#')); // 해시부터이후제거
		location.href = location_href + uriHash;
	}


	/** ◇◆ 부드러운 세로 스크롤 20180327. MoonYoungshin
	 */
	function smoothScrollTop(end_top, setoff){ // (이동할곳, 상쇄값)
		(setoff)? setoff: setoff = 0;
		$('html, body').stop().animate({ // $('html, body').animate() ☆[호환]OK!
			scrollTop: end_top + setoff // 상쇄 합침
		}, duration, 'easeInOutCirc', function(){
			isScroll = false; // 20180327
		});
	}


})();
/** /◇◆◇◆◇◆ (function(){})(); */