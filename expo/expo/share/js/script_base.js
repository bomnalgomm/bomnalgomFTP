/**
 * @File Name : script_base.js
 * @Description : Javascript jQuery Code (즉시실행, 메소드와 함수 정의)
 * @Modification Information
 * <pre>
 * 수정일 | 수정자 | 수정내용
 * 2017.03.23 | 문영신 | 최초 등록 ( jq.js (v.20170314) 를 script_base.js (즉시실행, 메소드, 함수 정의) 와 script.js (메소드, 함수 호출, 실행..) 로 분리 )
 * ( … jQmPR1(), makeMenu2Dropdown(), doToggle(), makeActive2ClickHover2(), jQmPrevNext1(), addOnNav() 고도화 )
 * 2017.03.29 | 문영신 | makeActive2ClickHover2()
 * 2017.03.30 | 문영신 | jQmPrevNext1() 초기 활성 페이지 기능 추가 및 이전 다음 동작 고도화.
 * 2017.05.15 | 문영신 | makeEvenWidthMenus(mnum) 매직넘버 옵션 추가.
 * 2017.06.27 | 문영신 | makeActive2ClickHover2() 고도화.
 * 2017.06.29 | 문영신 | jQmPrevNext1() 고도화.
 * 2017.07.07 | 문영신 | makeShow(), makeActive() 고도화.
 * 2017.07.18 | 문영신 | jQtabCont2() 고도화.
 * 2017.07.19 | 문영신 | makeActive() 고도화.
 * 2017.07.26 | 문영신 | 요구반영. 결함개선. 고도화.
 * 2017.08.01 | 문영신 | setClassWinWidth() xlarge 중단점 수정.
 * 2017.08.21 | 문영신 | 요구반영. 결함개선. 고도화.
 * 2017.09.27 | 문영신 | jQmPrevNext3() 추가. 고도화.
 * 2017.10.10 | 문영신 | jQmPrevNext1() 현재페이지 / 전체페이지 추가.
 * 2017.10.20 | 문영신 | makeActive2ClickHover2() 결함개선. 데스크탑.주메뉴동작 2·3차메뉴도 li 범위 벗어날 때.. over 제거하도록 처리.
 * 2017.11.06 | 문영신 | goSelect1() 추가.
 * 2017.11.08 | 문영신 | 주석 설명 보강.
 * 2017.11.09 | 문영신 | jQchangePic4() 추가.
 * 2017.11.28 | 문영신 | jQmPrevNext2() 고도화. 페이징, 현재페이지 / 전체페이지 추가. 키보드 운용 결함 수정.
 * 2017.12.01 | 문영신 | makeOver() 추가.
 * 2017.12.11 | 문영신 | 주석 설명 보강.
 * 2017.12.14 | 문영신 | modernizr 코드 ::-webkit-scrollbar 감지 추가
 * 2017.12.15 | 문영신 | jQchangePic4() 섬네일 페이징 기능추가 및 고도화
 * 2017.12.29 | 문영신 | jQmPR1() 회전목마 동작 고도화
 * 2018.01.04 | 문영신 | jQchangePic4() 섬네일 이전쪽 다음쪽 기능 추가
 * 2018.01.05 | 문영신 | makeActive2ClickHover2() 고도화. makeActive2ClickHover() 제거.
 * 2018.01.25 | 문영신 | 쿠키와 팝업레이어 추가.
 * 2018.01.30 | 문영신 | doToggle() 고도화.
 * 2018.02.20 | 문영신 | jQmPR1() 고도화.
 * 2018.02.21 | 문영신 | makeBarGraph() 고도화.
 * 2018.03.23 | 문영신 | jQmPR1() 고도화.
 * 2018.03.26 | 문영신 | jQmPR1() .prev3-on .next3-on 추가
 * 2018.03.30 | 문영신 | jQmPrevNext3() 맨끝 마진 상계
 * 2018.04.04 | 문영신 | jQmPR1() fade 효과에 다른거 잠깐 보이는거 해결
 *
 * </pre>
 * @author 웹표준화실 문영신
 * @since 2016.05.18
 *
 * @Copyright (C) IACTS.CO.KR All rights reserved.
 */

/*! All JavaScript jQuery v.20150406~ 20180330. 20180404 | by MoonYoungshin[myshin@naver.com] | MIT License */

/* Table of contents )) ☆ 코드 추가되면.. 목차 갱신하세요.
************************************************************
	modernizr
Base --
	window.console
	window.orientation
	scrollTo
	기본 함수 호출
jQuery(function($){
	메소드, 함수 호출 )) ★☆ script.js
	즉시 실행
		전화걸기
		라이트박스.스위치.바닥스크롤제어
		removeClassOn() 활성제거
		setFontSize() 글자크기조절
		doSelectmenu1() 선택메뉴
		doToggle() 토글
}
Plugin --
	$.fn.jQmPR1 이전다음 쪽. 자동순환. 수동순번. 가로배치 가로전환. 아이템폭=쪽폭. 옵션 다양.
	$.fn.jQmTicker1 이전다음 쪽. 자동순환. 순번없음. 가로세로배치 세로전환. 아이템폭 자유
	$.fn.jQmTicker2 이전다음 항목. 자동순환. 순번없음. 가로배치 가로전환. 아이템폭 자유
	$.fn.jQmPrevNext1 이전다음 쪽. 자동순환. 자동순번. 가로세로배치 세로전환. 아이템폭 고정(또는 반응형).
	$.fn.jQmPrevNext2 이전다음 쪽. 자동순환. 자동순번. 가로배치 가로전환. 아이템폭 균등(또는 반응형).
	$.fn.jQmPrevNext3 이전다음 쪽. 자동순환. 자동순번. 가로배치 가로전환. 아이템폭 고정(또는 반응형).
	$.fn.jQmPrevNext4 이전다음 항목+쪽 (ToDo)
Function --
	setClassUAver() UA버전탐지
	setClassWinWidth() window크기탐지
	addOnNav() 현재활성 )) ★☆ script.js
	makeActive2ClickHover2() 메뉴활성온클릭호버(주메뉴) - 모바일 1차메뉴 클릭하면 하위메뉴펼침
	makeActive() 메뉴활성
	makeShow() 메뉴클릭콘텐츠만보이기
	makeOver() 메뉴오버
	makeMobileScrollbars() 만들기모바일스크롤바
	jQscrollTouch() 스크롤터치
	jQopenLayer2() 오픈레이어팝업
	jQchangePic3() 뷰섬네일. 이벤트축소판대상할당온제어
	jQchangePic4() 뷰섬네일. 현재/전체 이미지
	jQtabCont2() 탭.단순. 결함개선.
	jQtabCont3() 탭.슬라이드. 결함 있어 제거.
	makeEvenWidthMenus() 메뉴균등폭만들기
	makeMenu2Dropdown() 만들기메뉴드롭다운
	make2Dropdown1PrevNext1() 드롭다운 | 인라인이전다음
	makeBarGraph() 막대그래프 만들기

	goSelect1() 선택상자 바로가기
	setCookie(); getCookie(); 쿠키
	openPop(); closePop(); 팝업레이어

************************************************************
 */


/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssscrollbar-video-setclasses !*/
!function(e,n,o){function a(e,n){return typeof e===n}function s(){var e,n,o,s,t,i,l;for(var r in d)if(d.hasOwnProperty(r)){if(e=[],n=d[r],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(o=0;o<n.options.aliases.length;o++)e.push(n.options.aliases[o].toLowerCase());for(s=a(n.fn,"function")?n.fn():n.fn,t=0;t<e.length;t++)i=e[t],l=i.split("."),1===l.length?Modernizr[l[0]]=s:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=s),c.push((s?"":"no-")+l.join("-"))}}function t(e){var n=f.className,o=Modernizr._config.classPrefix||"";if(u&&(n=n.baseVal),Modernizr._config.enableJSClass){var a=new RegExp("(^|\\s)"+o+"no-js(\\s|$)");n=n.replace(a,"$1"+o+"js$2")}Modernizr._config.enableClasses&&(n+=" "+o+e.join(" "+o),u?f.className.baseVal=n:f.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):u?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(){var e=n.body;return e||(e=i(u?"svg":"body"),e.fake=!0),e}function r(e,o,a,s){var t,r,c,d,p="modernizr",u=i("div"),v=l();if(parseInt(a,10))for(;a--;)c=i("div"),c.id=s?s[a]:p+(a+1),u.appendChild(c);return t=i("style"),t.type="text/css",t.id="s"+p,(v.fake?v:u).appendChild(t),v.appendChild(u),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(n.createTextNode(e)),u.id=p,v.fake&&(v.style.background="",v.style.overflow="hidden",d=f.style.overflow,f.style.overflow="hidden",f.appendChild(v)),r=o(u,e),v.fake?(v.parentNode.removeChild(v),f.style.overflow=d,f.offsetHeight):u.parentNode.removeChild(u),!!r}var c=[],d=[],p={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var o=this;setTimeout(function(){n(o[e])},0)},addTest:function(e,n,o){d.push({name:e,fn:n,options:o})},addAsyncTest:function(e){d.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=p,Modernizr=new Modernizr;var f=n.documentElement,u="svg"===f.nodeName.toLowerCase(),v=p._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];p._prefixes=v;var h=p.testStyles=r;h("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+v.join("scrollbar{width:10px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:10px}",function(e){Modernizr.addTest("cssscrollbar","scrollWidth"in e&&30==e.scrollWidth)}),Modernizr.addTest("video",function(){var e=i("video"),n=!1;try{n=!!e.canPlayType,n&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),n.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),n.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(o){}return n}),s(),t(c),delete p.addTest,delete p.addAsyncTest;for(var m=0;m<Modernizr._q.length;m++)Modernizr._q[m]();e.Modernizr=Modernizr}(window,document);


/* ◇◆ Base ◇◆◇◆◇◆◇◆◇◆ */

/* [~IE7] console 에러 방지 */
	if(window.console == undefined){console = {log:function(){}};}

/* Mobile | Desktop 구분 */
	if(window.orientation != undefined){$('html').addClass('Mobile');}else{$('html').addClass('Desktop');}

/* [Mobile]툴바감춤 20170324. 20180821.
 * 앱 자체에서 툴바감춤 기능 제공 여부에 따라 조건 실행.
 * 20170324. [Android5.0.2](기본인터넷앱) 기능 제공되지만 1px 오차있어 추가함.
 * 20180821. 아래 scrollTo() 실행 후 앱 메뉴에서 이전쪽로 가면..
	[iOS10.2.1] 클릭 위치 그대로 표시한다.
	[Android5.0.2](삼성앱5.4.02.3) 웹페이지 상단으로 가버려 불편하다. ))) /Android/ 제외하여 해결.
 */
	//if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	if( /webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		if(window.addEventListener){window.addEventListener('load',function(){setTimeout(scrollTo,0,0,1);},false);}
	}

/* 기본 함수 호출 */
setClassUAver();
setClassWinWidth();


//jQuery.noConflict();
/* ◇◆ jQuery(document).ready(function($){}); ◇◆◇◆◇◆◇◆◇◆ */
jQuery(function($){


/* ◇◆ 즉시 실행 .doAction ◇◆◇◆◇◆ */


/* ◇◆ 전화걸기. 20160504. MoonYoungshin.
 */
(function(){
	$('a[href^="tel"]').on('click', function(){
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			return;
		}else{
			alert('스마트폰일 때 전화걸기가 가능합니다.');
			return false;
		}
	});
}());


/** ◇◆ 라이트박스.스위치.바닥스크롤제어. 20160106. 20170223. MoonYoungshin.
 * Task) 창조절 결함 해결 필요
 */
/* (function(){
	var sw = false;
	$('#tnb1>.h1>.b1.toggle').on('click', function(){
		sw = !sw;
		if(sw){
			$('html').css({
				position: 'fixed'
			});
		}else{
			$('html').css({
				position: ''
			});
		}
	});
}()); */


/** ◇◆ 글자크기조절. 20140718~20160321. MoonYoungShin.
 */
(function setFontSize(ss, os){ // subject selector, object selector
	var $this = (ss)? $(ss): $('#fontsize1');
	var $that = (os)? $(os): $('#body_content');
	$('.plus', $this).on('click', function(){
		$this.find('.on').removeClass('on');
		$(this).addClass('on');
		$that.css('fontSize','1.4em');
		return false;
	});
	$('.minus', $this).on('click', function(){
		$this.find('.on').removeClass('on');
		$(this).addClass('on');
		$that.css('fontSize','1em');
		return false;
	});
})();


/** ◇◆ 선택메뉴. 20141022~20150918. MoonYoungShin.
 * 20150626.1) 전송 버튼 클릭하면 링크로 이동
 * 20150626.2) 이벤트 없는 곳 클릭하면.. 선택메뉴 모두 닫음.
 * Use1) See Markup Code
 <div class="selectmenu1">
 <strong class="title"><a href="#selectmenu1option1" class="a1"><span class="t1">옵션</span><i class="ic1"></i></a></strong>
 <div class="selectmenu1option" id="selectmenu1option1">
 <ul class="options">
 <li class="option"><a href="#?" class="a1">옵션1</a></li>
 <li class="option"><a href="#?" class="a1">옵션2</a></li>
 <li class="option"><a href="#?" class="a1">옵션3</a></li>
 </ul>
 </div>
 </div>
 <a href="?" class="b1 submit">이동</a> <!-- 선택사항 -->
 …
 */
(function doSelectmenu1(selector){
	$('.selectmenu1').each(function(){
		var $this = $('.title .a1', this); // 제목+여닫기 버튼
		var $that = $($this.attr('href')); // 표적(옵션 블록)
		var $title= $('.t1', $this); // 제목 텍스트
		var $option = $('.option .a1', $that); // 옵션 요소
		var thatOn = 0; // 옵션 블록 focusout 고도화
		$title.text($('.option.on .a1').text() || $title.text()); // 20150918. 제목을 선택 옵션 텍스트 또는 초기값으로
		$this.parent().removeClass('on');
		$that.removeClass('on').hide();
		$this.on('click', function(){
			$this.parent().toggleClass('on');
			$that.toggleClass('on');
			$that.toggle();
			$this.focus(); // 제목으로 초점 보내기
			return false;
		});
		$option.on('click', function(){
			$(this).parent().siblings().removeClass('on');
			$(this).parent().addClass('on');
			$title.text($(this).text()); // 제목을 선택한 옵션 텍스트로
			$this.triggerHandler('click');
			thatOn = 1; // 옵션 클릭으로 옵션 블록 focusout 되면서 0 으로 변한 값을 1 로 바꿔준다, $this.triggerHandler('click'); 가 재실행되는 것을 방지한다.
			if( $(this).closest('.selectmenu1').nextAll('.submit').length > 0 ){ // 20150626.1)
				if($(this).attr('href').indexOf('#') == 0){ // 현재페이지링크 href="#.."
					return false;
				}else{ // 다른페이지링크
					return false;
				}
			}
		});
		$that.on('focusout', function(){
			thatOn = 0;
			setTimeout(function(){
				if(!thatOn){ // 옵션 블록 focusin 되거나, 옵션 클릭으로 focusout 되는 경우는 실행안한다.
					$this.triggerHandler('click');
				}
			}, 50);
			return false;
		});
		$that.on('focusin', function(){
			thatOn = 1;
			return false;
		});
	});
	// 20150626.1) 전송 버튼 클릭하면 링크로 이동
	$('.selectmenu1~.submit').on('click', function(){
		var $on_a = $(this).prev('.selectmenu1').find('.on>a');
		if($on_a.length > 0){
			location.href = $on_a.attr('href');
		}else{ // 선택한 메뉴 없으면.. 선택메뉴로 간다.
			$(this).prev('.selectmenu1').find('.title a.a1')[0].focus();
		}
		return false;
	});
	// 20150626.2) 이벤트 없는 곳 클릭하면.. 선택메뉴 모두 닫음.
	$('body').on('click', function(){
		$('.selectmenu1 .title').removeClass('on');
		$('.selectmenu1option').removeClass('on').hide();
	});
}());


/** ◇◆ 토글. v0.8. 20150520.~. 20170222. 20180130. MoonYoungShin.
 * Use1) <a href="#search1c" title="통합 검색 여닫기" class="b1 toggle fade"><span class="t1>통합 검색</span><i class="ic1"></i></a>
 * Use2) ☆ .toggle 이 탭처럼 동작하려면 (내가 on 이면 형제는 off), 나와 형제가 클래스 값이 각각 1개이고 같아야 한다.
   <div class="family1"><a href="#family1c1" class="toggle"><div id="family1c1"></div></div>
   <div class="family1"><a href="#family1c2" class="toggle"><div id="family1c2"></div></div>
   …
 * 토글 앵커와 대상의 부모가 같아야 한다. ( 다르더라도 단독 동작 토글이라면 괜찮다. )
 * 고도화. 효과 지정 가능. donot 결함 수정.
 * 20160527. 최초 비활성/활성 분기
 * 20170109. 토글a클릭 - 토글b클릭 - 토글a닫기클릭 시 초첨 되돌리기 무동작 결함개선.
 * 20170222. 초첨 보내기 분기. 메뉴 또는 대상.
 * 20180130. 토글 앵커와 대상이 멀리 있는 경우 형제 콘텐츠 닫기 고도화
 * Task1)
 * 탭처럼 클래스 값이 2개이상이면 고도화 필요!
 */
(function doToggle(selector){
	$('.toggle').not('.donot').each(function(){ // 20150515. 토글 동작 안하기 추가
		var $this = $(this); // 토글 앵커
		var $that = $($this.attr('href')); // 토글 대상
		var $sib = $that.parent().siblings('.' + $that.parent().attr('class')); // 형제 콘텐츠. $this 말고 $that 에서 찾아야 정확하다.
		// 최초 비활성/활성 분기
		if( $this.hasClass('on') ){
			$that.addClass('on').show();
		}else{
			$that.removeClass('on').hide();
		}
		// 토글 클릭
		$this.on('click', function(){
			var $that = $( $this.attr('href') ); // 토글 대상

			// 나 아닌 형제만 탐색하기 위해 .now 추가했다가 형제 조작한 뒤 제거한다.
			$this.addClass('now');
			$that.addClass('now');

			if( !$(this).is('.on') ){ // 20161208. 토글 닫은 후에 초점 오려면 .on 이 제거되도 .opener-last 클래스를 남겨둔다.
				$('.toggle').removeClass('opener-last'); // 오프너 제거
				$this.addClass('opener-last'); // 오프너 설정
			}
			// 형제 콘텐츠 닫기
			if( $this.is('.opt-far') ){ // 토글 앵커와 대상이 멀리 있는 경우라면..
				var $wrap = $this.closest('.w1toggles');
				console.log( $sib.not('.now').length );
				$('.toggle.opt-far', $wrap).not('.now').removeClass('on');
				$sib.not('.now').children().removeClass('on').hide();
			}else{
				$sib.each(function(){
					$(this).removeClass('on');
					var $this = $('.toggle', $(this)); // 형제 토글 앵커
					var $that = $($this.attr('href')); // 형제 토글 대상
					$this.removeClass('on');
					$that.removeClass('on').hide();
				});
			}

			$this.removeClass('now');
			$that.removeClass('now');

			// 내 토글 동작. 20150105 ☆ toggle() before toggleClass()
			if($this.hasClass('showhide')){
				$that.toggle();
			}else if($this.hasClass('slide')){
				$that.slideToggle(200, 'swing', function(){});
			}else if($this.hasClass('fade')){
				$that.fadeToggle(100, 'swing', function(){});
			}else if($this.hasClass('animate1')){
				$that.animate({
					left: 'toggle',
					top: 'toggle',
					width: 'toggle',
					height: 'toggle',
					opacity: 'toggle'
				}, 200, function(){});
			}else{ // 기본 토글
				//$that.toggle('swing'); // $that.toggle(400, 'swing'); 과 같다.
				$that.toggle();
				//console.log('기본 토글');
			}
			$this.toggleClass('on');
			$that.toggleClass('on');
			// 초점 보내기. 20170222.
			if($this.is('.on')){
				if($this.data('sendFocus') == 'that'){ // data-send-focus="that"
					$that.find('a, button').first().focus(); // 토글 대상이 떨어져 있어도 된다.
				}else{
					$this.focus();
				}
			}
			return false;
		});

		// 닫기 클릭. 20170109
		// $this.filter('.opener-last') 없으면 초점 보이지 않지만, 탭키 누르면 다음 콘텐츠로 이동한다. (이건 주로 마우스 동작 시 해당되므로 문제없음)
		$('.close', $that).on('click', function(){
			//console.log($this.text() + $this.is('.opener-last'));
			var closeHref = $(this).attr('href');
			if( $this.attr('href') == closeHref ){
				$this.filter('.on').triggerHandler('click');
				$this.filter('.opener-last').focus();
			}
			return false;
		});

	});
}());


/** ◇◆ 메소드.함수제목.YYYYMMDD.MoonYoungShin.
 */



}); /* /jQuery(function($){})(); */


/* ◇◆ Plugin ◇◆◇◆◇◆◇◆◇◆ */


/** ◇◆ PictureRotator. v0.6.5 ~20140814~ 20180326. 20180404. MoonYoungShin.
 * 이전다음 쪽. 자동순환. 수동순번. 가로배치 가로전환. 아이템폭=쪽폭. 옵션 다양.
 * !!required: jquery-1.8.0.min.js 이상, jquery.easing.1.3.js
 * Use) $('#vpr1').jQmPR1({interval: 6000, mTabindex: '-1', effect: 'slide', duration: 400, easing: 'easeOutExpo', gesture: true, threshold: 10});
 //$('#npr1').jQmPR1({interval: 6000, mTabindex: '-1'});
 //$('#apr1').jQmPR1({interval: 6000, mTabindex: '0', effect: 'accordion', c: '>.c', mNumEvent: 'focusin mouseenter click'}); // 아코디언 효과. 모바일에서 결함 발생.
 // ))) ★ JS 단순 효과 사용하고, CSS3 transition 이용 권장!
 * 20180404. fade 효과에 다른거 잠깐 보이는거 해결.
 * 20180220. 아이템 1개일 때 CSS클래스 'nodo' 추가. 효과제거.
 * 20171229. 회전목마 동작 고도화
 * 20170126. 창 크기 조절 후 슬라이드 이전 다음 결함 개선. z-index 개선.
 * 20170126. 코드 정리. 자동순환. 재생 버튼 클릭 후 초점 있을 때, 마우스 포인트를 콘텐츠 지나서 아웃할 때, 재가동으로 수정.
 * 20161215. mContC 1개일 때 결함 해결
 * 20161025. Test 코드 추가. 접근성 자동 순환 정지 관련.
 * 20161021. .onSync 활성동기화(연동) 추가.
 * 20161005. 콘텐츠 3개(현재.이전.다음)만 보이고, 나머지는 화면 밖으로 보냄.
 * 20161005. .mContC 에 .off .prev-on .next-on 추가.
 * 20160202. 내부에 초점 있는 상태에서 mouseleave 하면.. 자동순환 재개되어.. 콘텐츠 사라지는 결함 해결!
 * 20150414. mouseup 이벤트 a 링크 위해 e.preventDefault(); 주석처리. 'mouseup'){
 * a 링크 위해 'touchend' || 'mouseup' 일 때 e.preventDefault(); 제거함.
 * 반응형 적용 문제 해결. 창 조절에 동작값 다시 구하고  효과별 액션 분기.
 * 현재페이지/전체페이지 추가
 * 아코디언 효과 추가.
 * 순환 콘텐츠 고도화.. fade, slide 효과 벌레퇴치.
 * 콘텐츠와 순번이 섞여있을 때 고려 : .mContC>.m 와 .mCont>.m 일 경우 모두 고려함.
 * .mContC 키보드 운용 바르게 동작하도록 수정. 추가 . mNum 순번 탭 없을 경우 고려
 * 세로 슬라이드 추가, mNum, z-index, 키보드 운용할 때.. 즉시 변경으로 해결
 * 콘텐츠 a 에 focus 시 콘텐츠 보이며 운용 가능.
 * 순번 탭 포커싱 선택 추가
 * 맨앞뒤 이후 동작 같은 방향으로..
 * touch, drag? 콘텐츠에 a 요소가 있으면 touch 는 괜찮지만.. drag 는 동작하지 않는다.
 * .mCont{position:absolute;} 이면.. 이전, 다음 콘텐츠가 touchmove 에 동작한다.
   .mCont{position:absolute;} 아니면.. touchend 시 이전, 다음 액션.
 * addBack() 추가하여 $this 오버 아웃 추가
 * 새 활성 콘텐츠 내용 없으면.. 코드 만들어 불러온다. ★☆개발필요! ajax! 만들어진 코드 가져오도록..
 /----
 * Task.A) 아코디언 키보드 후진.
 * Task.B) Ajax, loading… 텍스트는 즉시 부르고, 이미지는 전환 완료 시 부른다. ★☆개발필요! ajax!
 * Task.C) 멀티뷰 페이드, 슬라이드는 보류. (대안! mContC 안에 멀티 콘텐츠 넣기) 기능 재검토 후에도 복잡하면 제거하자.
 */
$.fn.jQmPR1 = function(options){
	if(!this) return false;
	var config = {
		interval: 6000, // 간격 밀리초
		autoFlag: true, // true: 정지 버튼 클릭 안한 상태, false: 클릭한 상태
		effect: null, // 효과
		initEffect: null, // 최초 실행 효과 .20140626
		duration: 400, // 효과 동작시간 밀리초
		delay: 0, // 효과 지연시간
		zIndex: 0, // 콘텐츠 겹칠 때 이용
		//onnum: parseInt(location.hash.charAt(location.hash.length-1)) || 1, // 초기활성값=#끝수. 실무에는 글쎄요..
		onnum: 1, // 초기활성값
		oldonnum: 0, // 최초 콘텐츠 없는 상태
		easing: 'swing', // 동작 완화. jswing 은 jquery.easing.1.3.js 필요!
		preAct: 1, // 1: 1번째 액션에서만 실행, 2: 2번째.., ..
		viewNum: 1, // 멀티뷰. 단수 표시만 가능 (순번은 absolute 로 개별 위치 지정)
		//frontback: 1, // 1: 정방향(→↓), -1: 역방향(←↑) 감지에 이용 (임의 지정은 하지말자)
		vertical: 0, // 0: 가로방향 동작, 1: 세로방향 동작
		mTabindex: 0, // -1: 순번 탭 포커싱 안함, 0: 함.
		mNumEvent: 'click', // 순번 이벤트. 아코디언 효과에는 'focusin mouseenter click' .20140626
		gesture: false, // true: 터치이벤트 할당
		threshold: 10, // 터치무브가 값px 이상이면 동작 (( 40 에서 기본값 변경.
		swipe: true, // true: 터치 이동 거리만큼 mCont 이동. 20171229

		// DOM Selectors
		mView: '.mView', // 뷰영역
		mCont: '>.mCont', // 콘텐츠 그룹
		mContC: '>.mContC', // 단위콘텐츠. 아코디언 효과에는 자식으로 순번 앵커와 진짜콘텐츠를 분리한다.
		c: '', // 진짜콘텐츠가 .mContC>.c 이면 '>.c' 를 할당하라. 순번 앵커 .mContC>.m 를 추가할 수 있다.
		mNum: '.mNum', // 순번 페이징 그룹
		m: '.m', // 단위 순번은 .mNum>.m 이다.
		prev: '.mControl .prev', // 이전 버튼
		next: '.mControl .next', // 다음 버튼
		stop: '.mControl .stop', // (일시)정지 버튼
		play: '.mControl .play', // 재생 버튼
		pageOn: '.mPage .on', // 현재페이지
		pageTotal: '.mPage .total', // 전체페이지
		onSync: '.onSync', // 활성연동 그룹
		jsonDataUri: '/html/main/json.js' // ★☆개발필요! 동적으로 콘텐츠 가져오기 주소로 사용할거다.
	};
	$.extend(config, options);

	return this.each(function(){
		var $this = $(this);

		$this.effect = config.effect; // 효과 기억 위해!
		if($this.effect  == 'accordion'){
			config.initEffect = 'accordion';
		}
		//DOM
		$this.mView = $(config.mView, $this);
		$this.mCont = $(config.mCont, $this.mView);
		$this.mContC = $(config.mContC, $this.mCont); // '>.mContC'
		$this.mContCc = $(config.c, $this.mContC); // '>.mContC>.c'  // 아코디언용
		$this.mContCm = $(config.m, $this.mContC); // '>.mContC>.m' // 아코디언용
		$this.mNum = $(config.mNum, $this);
		$this.prev = $(config.prev, $this);
		$this.next = $(config.next, $this);
		$this.stop = $(config.stop, $this);
		$this.play = $(config.play, $this);
		$this.pageOn = $(config.pageOn, $this); // 현재페이지
		$this.pageTotal = $(config.pageTotal, $this); // 전체페이지
		$this.cTotal = $this.mContC.length; // 단위콘텐츠 개수.
		$this.onSync = $(config.onSync, $this); // 활성연동

		if(	$this.cTotal < 2 ){ // 20180220 
			$this.addClass('nodo');
			$this.effect = config.effect = '';
		}

		$this.v0 = { // 20170126. 불변값. 반응형결함개선
			endLeft: 0,
			endTop: 0,
			endOpacity: $this.mContC.css('opacity')
		};

		($this.setV0 = function(){ // 변동값
			// 뷰영역(단위콘텐츠크기) 밖에서 시작하여 원래 위치에서 끝난다.
			$this.v1 = {
				startLeft: parseInt($this.mContC.css('width')),
				startTop: parseInt($this.mContC.css('height')),
				mContCcWidth: parseInt($this.mContCc.css('width')), // 아코디언용
				mContCmWidth: parseInt($this.mContCm.css('width')) // 아코디언용
			};
			$.extend($this.v0, $this.v1); // 불변값+변동값
		})();

		($this.autoOnOff = function(){ // auto play, stop 상태 표시
			if(config.autoFlag){
				$this.play.removeClass('on').addClass('on');
				$this.stop.removeClass('on')
			}else{
				$this.play.removeClass('on')
				$this.stop.removeClass('on').addClass('on');
			}
		})();

		($this.reset = function(){ // 다시 맞춤 (load, resize, oriented 동작에)
			//$this.mView.css({width:(config.viewNum*$this.v0.startLeft) + 'px'}); // 멀티뷰*뷰너비. ☆20140731. 이 기능 제거해야 단독뷰 너비 반응형 동작한다.
			$this.setV0(); // 20140814. 동작값 다시 만들기
		})();

		// 순번 활성. 20161005.20161021.
		($this.changOn = function(){
			$this.mNum.each(function(){ // 순번
				$(this).children('.m').removeClass('on').addClass('off').eq(config.onnum-1).addClass('on').removeClass('off');
			});
			$this.onSync.each(function(){ // 활성연동
				$(this).children('.m').removeClass('on').addClass('off').eq(config.onnum-1).addClass('on').removeClass('off');
			});
			$this.mCont.each(function(){ // 콘텐츠
				$(this).children('.mContC').css({ zIndex: 0 }) // 20170126. z-index 초기화
					.removeClass('on').addClass('off').eq(config.onnum-1).addClass('on').removeClass('off');
				for(var i = config.viewNum-1; i--;){ // config.viewNum 개씩 보임.
					$(this).children('.mContC').eq(config.onnum + i).addClass('on');
				}
				//$(this).children().eq(config.onnum-1).find('a').focus(); // 활성 콘텐츠 자손 a 있으면 포커스
			});

			// 새, 헌 활성 콘텐츠 객체 구하기
			$this.cOnNew = $('.mContC.on' + config.c, $this.mCont);
			$this.cOnOld = (config.c)?
				$(config.c, $this.mCont.children().eq(config.oldonnum-1)).delay(config.delay):
				$this.mCont.children().eq(config.oldonnum-1);
			$this.cOnNew.css({ zIndex: 11 }); // 20170126. 새 활성 z-index 맨위로.
			$this.cOnOld.css({ zIndex: 10 });

			// 새 활성 콘텐츠 내용 없으면.. 코드 만들어 불러온다. ★☆개발필요! ajax! 만들어진 코드 가져오도록..
			$this.loadContent = function(){
				if($this.cOnNew.html() == ''){
					var onn = (config.onnum < 10)? '0' + config.onnum: config.onnum;
					$this.cOnNew.html('<div class="c"><a href="?' + config.onnum + '"><img src="/img/main/v1/v1' + onn + '.jpg" width="2000" height="300" alt="★대체텍스트' + onn + '" title="" /></a></div>');
				}
			}
			$this.loadContent();

			// 콘텐츠 나열. 20131205~. 20171218. 20180326.
			//console.log('---');
			$this.mContC.each(function(){
				var idxGap = 0; // 활성 콘텐츠 상대 순번 ( 0: 활성. 1: 이후첫번째, -1: 이전첫번째, ..)
				var thisNum = 1 + $(this).prevAll('.mContC').length; // 20131205.. 콘텐츠 순서 계산 (콘텐츠와 순번이 섞여있을 때 고려).

				$(this).removeClass('prev-on next-on prev2-on next2-on prev3-on next3-on');

				idxGap = (thisNum - config.onnum);

				//if ( idxGap > Math.ceil($this.cTotal / 2) ){ // 이후가 많다
				if ( idxGap >= Math.ceil($this.cTotal / 2) ){ // 이전이 많다. 아이템 3개 일때 좌우 대칭 배치된다.
					idxGap -= $this.cTotal
				}else if ( idxGap <= (-1 * Math.ceil($this.cTotal / 2)) ){
					idxGap += $this.cTotal
				}

				//console.log(idxGap);

				if( idxGap == -1 ){
					$(this).addClass('prev-on');
				}else if( idxGap == 1 ){
					$(this).addClass('next-on');
				}
				if( idxGap == -2 ){
					$(this).addClass('prev2-on');
				}else if( idxGap == 2 ){
					$(this).addClass('next2-on');
				}
				if( idxGap == -3 ){
					$(this).addClass('prev3-on');
				}else if( idxGap == 3 ){
					$(this).addClass('next3-on');
				}

				// 위치 지정
				$(this).css({
					left:(idxGap*$this.v0.startLeft) + 'px',
					top:(idxGap*$this.v0.startTop) + 'px'
				});

			});

			// 세로 슬라이드 여부
			if(config.vertical){$this.v0.startLeft = 0}
			else{$this.v0.startTop = 0}
			// <class="mContC">< class=".m" />< class=".c" /></> 일 때
			//$(config.m, $this.mNum).css({zIndex: parseInt($(config.m, $this.mNum).css('zIndex')) + 1}); // .c 와 형제일 때 제어 버튼을 위로 올려서 보이게 한다.

			$this.pageOn.text(config.onnum); // 현재페이지
			$this.pageTotal.text($this.cTotal); // 전체페이지

		}); // 20171218. $this.action 에 호출하므로 자동 실행 안되게 수정함.

		// 액션!!
		($this.action = function(effect){
			switch(effect){
			case 'slide': // ★슬라이드
				$this.changOn();
				if(config.onnum > config.oldonnum){config.frontback = 1} // 정방향
				else if(config.onnum < config.oldonnum){config.frontback = -1} // 역방향
				if(config.onnum == 1 && config.oldonnum == $this.cTotal){config.frontback = 1} // 정방향. 맨끝→맨앞
				else if(config.onnum == $this.cTotal && config.oldonnum == 1){config.frontback = -1} // 역방향. 맨끝←맨앞
				// 새 to 활성 동작
				$this.cOnNew.css({
					left:(config.frontback*$this.v0.startLeft) + $this.offsetXdrag + 'px',
					top:(config.frontback*$this.v0.startTop) + 'px',
					opacity:$this.v0.endOpacity
				});
				$this.cOnNew.delay(config.delay).stop().animate({
					left:$this.v0.endLeft + 'px',
					top:$this.v0.endTop + 'px',
					opacity:$this.v0.endOpacity
				}, config.duration, config.easing,function(){});
				// 헌 to 비활성 동작
				$this.cOnOld.css({
					left:(config.frontback*$this.v0.endLeft) + $this.offsetXdrag + 'px',
					top:(config.frontback*$this.v0.endTop) + 'px',
					opacity:$this.v0.endOpacity
				});
				$this.cOnOld.delay(config.delay).stop().animate({
					left:(config.frontback*(-1)*$this.v0.startLeft) + 'px',
					top:(config.frontback*(-1)*$this.v0.startTop) + 'px',
					opacity:$this.v0.endOpacity
				}, config.duration, config.easing,function(){});
				break;
			case 'fade': // ★페이드. 20180404.
				$this.changOn();
				$this.mContC.css({display: '', left: $this.v0.endLeft, top: $this.v0.endTop, opacity: 0}); // 모든 콘텐츠 초기화
				$this.cOnNew.css({opacity: 0}); // 새 활성 콘텐츠 초기화.
				$this.cOnNew.delay(config.delay).stop().animate({opacity: $this.v0.endOpacity}, config.duration, config.easing, function(){});
				$this.cOnOld.css({opacity: $this.v0.endOpacity}); // 헌 활성 콘텐츠 초기화.
				$this.cOnOld.delay(config.delay).stop().animate({opacity: 0}, config.duration, config.easing, function(){}); // 20131209.
				break;
			case 'accordion': // ★아코디언.20140626
				$this.changOn(); // 활성 on 용으로만 사용. 불필요한 지정값은 아래에서 리셋.
				$this.mContC.css({left:'auto', top:'auto'});
				$this.mContCc.css({zIndex:''});
				$this.mContC.each(function(){
					if($(this).is('.on')){
						$('.m', this).delay(config.delay).stop().animate({width: 0 + 'px'}, config.duration, config.easing, function(){});
						$('.c', this).delay(config.delay).stop().animate({width: $this.v0.mContCcWidth + 'px'}, config.duration, config.easing, function(){});
					}else{
						$('.m', this).delay(config.delay).stop().animate({width: $this.v0.mContCmWidth + 'px'}, config.duration, config.easing, function(){});
						$('.c', this).delay(config.delay).stop().animate({width: 0 + 'px'}, config.duration, config.easing, function(){});
					}
				});
				break;
			default: // ★단순 표시
				$this.changOn();
			}
			$this.offsetXdrag = 0; // 보정 후 초기화
		})(config.initEffect); // ★최초 실행

		$this.prevAct = function(){ // 이전 동작
			config.oldonnum = config.onnum;
			config.onnum -= config.viewNum; // 뷰영역에 config.viewNum 개씩 보임.
			if(config.onnum < 1){config.onnum = $this.cTotal; // 맨뒤 순번
				config.onnum = config.viewNum*(Math.ceil($this.cTotal/config.viewNum)-1) + 1; // 맨앞 이전은 맨뒤 그룹의 맨앞. config.viewNum 이하면 몇 개든 1그룹으로 계산.
			}
			$this.action($this.effect);
		}
		$this.nextAct = function(){ // 다음 동작
			//console.log('$this.effect : ' + $this.effect); // 자동 실행에는 값 가지지만, 클릭 시에는 아래 접근성 기능으로 null 이 되버림.
			config.oldonnum = config.onnum;
			config.onnum += config.viewNum; // 뷰영역에 config.viewNum 개씩 보임.
			if(config.onnum > $this.cTotal)config.onnum = 1; // 맨뒤 다음은 맨앞
			$this.action($this.effect);
		}

		$this.directAct = function(thisNum){ // 직접 동작
			if(config.onnum == thisNum) return false; // 활성 순번 클릭하면 동작 무시
			config.oldonnum = config.onnum;
			config.onnum = thisNum; // 클릭한 순번 활성화
			$this.action($this.effect);
		}

		$this.autoAct = function(){ // 자동 동작
			if(config.autoFlag){
				$this.nextAct();
			}
		}
		$this.timer1 = setInterval($this.autoAct, config.interval); // 자동 가동
		$this.restartInterval = function(timer){ // 자동 재가동
			if(timer){
				clearInterval(timer);
			}
			$this.timer1 = setInterval($this.autoAct, config.interval);
		}

		$this.stopAct = function(){ // 정지 동작
			config.autoFlag = false;
			$this.autoOnOff();
			clearInterval($this.timer1);
		}

		$this.playAct = function(){ // 재생 동작
			config.autoFlag = true;
			$this.autoOnOff();
			$this.restartInterval($this.timer1);
		}

		$this.prev.on('click', function(e){ // 이전 클릭
			e.preventDefault();
			$this.prevAct();
		});

		$this.next.on('click', function(e){ // 다음 클릭
			e.preventDefault();
			$this.nextAct();
		});

		$(config.m, $this.mNum).on(config.mNumEvent , function(e){ // 순번 클릭
			e.preventDefault();
			// 콘텐츠와 순번 혼합 형태 고려한 순번 계상. 20160626.
			if($(this).parent().hasClass('mNum')){ // .mNum>.m 또는 ( .mCont.mNum>.m 이고 .mCont.mNum>.mContC ) 이면
				var thisNum = 1 + $(this).index() * $(this).closest('.mNum').find('.m').length / $(this).closest('.mNum').children().length;
			}else{ // .mCont.mNum>.mContC>.m 이면
				var thisNum = 1 + $(this).closest('.mContC').index() * $(this).closest('.mNum').find('.m').length / $(this).closest('.mNum').children().length;
			}
			$this.directAct(thisNum);
		}).attr('tabindex', config.mTabindex); // 순번 탭 포커싱

		$this.stop.on('click', function(e){ // 정지 클릭
			e.preventDefault();
			$this.stopAct();
		});

		$this.play.on('click', function(e){ // 재생 클릭
			e.preventDefault();
			$this.playAct();
		});

		// 반응형. 사라짐 방지. 20170126
		var delta = 300,
			timer0 = null;
		$(window).on('resize', function(){
			if($this.timer1){
				//clearInterval($this.timer1);
			}
			clearTimeout( timer0 );
			timer0 = setTimeout( resizeDone, delta ); // 1번만 실행
		});
		function resizeDone(){
			$this.reset();
			//$this.restartInterval($this.timer1);
		}

		// 20161025. Test ☆☆(Hint to us!)
		//var xinterval, xnum = 0;
		//xinterval = setInterval(function(){
		//	xnum++;
		//	console.log( $this.attr('id') + " : " + xnum + " : " + config.autoFlag );
		//}, 1000);

		// 접근성 20170126. 20180323
		$this.find('button, a').addBack().on('focusin mouseenter', function(e){ // 오버 ( click 이벤트 추가하면 다른 요소가 초점 사라짐 주의)
			// 20131209. 투명 콘텐츠 겹쳐 보이는거 해결.
			if(e.type == 'focusin'){
				if($(this).closest('.mContC').length){ // 콘텐츠만 적용
					$this.effect = null; // 단순 효과로 변경. 안하면.. 초점 받은 후 동작으로 초점이 사라질 수 있다.
					$this.mContC.css({
						display: '',
						// 20180323. UA 해석 달라졌는지.. 첫 진입에서 겹쳐보여.. 아래 2줄 주석처리함
						//left: $this.v0.endLeft,
						//top: $this.v0.endTop,
						opacity: '' // 20171219. 인라인 스타일 제거하여 정의된 CSS값이 적용된다.
					});
					$(this).closest('.mContC').css({opacity:$this.v0.endOpacity});
				}
			}
			clearInterval($this.timer1);
		}).on('focusout mouseleave', function(e){ // 아웃
			if(e.type == 'focusout'){ // 20131209. 투명 콘텐츠 겹쳐 보이는거 해결 복구
				$this.effect = config.effect; // 효과 옵션을 다시 가져온다.
				if($(this).closest('.mContC').length){ // 콘텐츠만 적용
					$(this).closest('.mContC').css({opacity:$this.v0.endOpacity});
				}
			}
			if(config.autoFlag && !$(':focus', $this.mContC).length){ // 20160202. 20170126. autoFlag 참이고 단위콘텐츠 내부에 초점 없으면
				$this.restartInterval($this.timer1);
			}
		});

		// 단위콘텐츠. 키보드운용 20131205. 20171219
		// 이벤트는 focusin )) click 순서로 발생하니 유의바람!
		var activeFlag;
		var focusinFlag;
		$('a, area', $this.mContC).attr('tabindex',0).on('focusin', function(e){ // 초점인

			var thisIdx = $(this).closest('.mContC').prevAll('.mContC').length;

			if ( config.onnum == (thisIdx + 1) ){
				activeFlag = true;
			}else{
				activeFlag = false;
			}

			if($(config.m, $this.mNum).length > 0){ // 콘텐츠와 순번이 섞여있을 때 고려 : .mContC>.m 와 .mCont>.m 일 경우 모두 고려함.
				$(config.m, $this.mNum).eq(thisIdx).trigger('click');
			}else{ // 순번 없으면
				config.oldonnum = config.onnum;
				config.onnum = thisIdx + 1;
				$this.action($this.effect);
			}

			focusinFlag = true;
			//setTimeout(function(){
				focusinFlag = false;
			//}, 200); // [CR]OK!

		}).on('click', function(e){ // 클릭
			//e.preventDefault();
			//console.log( config.onnum +'  ' + activeFlag + '  ' + focusinFlag);
			if( activeFlag ){
				return;
			}else{
				if( !focusinFlag ){ // focusinFlag = flase 이면 실행. 마우스 클릭 아닌 키보드 엔터 누를 때 이미 포커싱 되어 있으므로..
					return;
				}
				return false;
			}
		});

		// 제스처. 20170629.
		if(!config.gesture) return false;
		($this.gesture1 = function(){
			var o = {
				sx: 0, // start x
				sy: 0, // start y
				dx: 0, // distance x
				dy: 0, // distance y
				ex: 0, // end x
				ey: 0, // end y
				sl: 0, // start left
				st: 0, // start top
				threshold: config.threshold // 반응 기준값
			};
			$this.mView.on('touchstart touchmove touchend mousedown mousemove mouseup', function(e){
				 // $(this) 좌상단에서의 터치 이벤트 상대 위치 x, y
				$this.offsetLeft = ($(this).offset().left < 0)? 0: $(this).offset().left; // 뷰가 화면 보다 클 때 보정
				$this.offsetTop = ($(this).offset().top < 0)? 0: $(this).offset().top;
				if(e.originalEvent.touches || e.originalEvent.changedTouches){ // 터치 있으면
					var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]; // 싱글 터치
					touch.length = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
				}else{
					var e = e || window.event;
				}
				var x = (e.pageX || touch.pageX) - $this.offsetLeft;
				var y = (e.pageY || touch.pageY) - $this.offsetTop;
				if(x < $(this).width() && x > 0 && y < $(this).height() && y > 0){ // $(this) 범위 안이면 동작
					if(e.type == 'touchstart' || e.type == 'mousedown'){
						$this.onGesture = 1;
						o.sx = x; o.sy = y; // 터치 시작 위치 기억
						o.dx = 0; o.dy = 0; // 터치 이동 거리 초기화
						o.sl = parseInt($this.mCont.css('left')); // mCont 가 [1][2][3] 나열되어 있을 때와 동일하게 동작하고.. 이전, 다음 동작 시에는  mContC 로 계산할거다.
						clearInterval($this.timer1); // 자동 정지
					}
					if(e.type == 'touchmove' || e.type == 'mousemove'){
						if($this.onGesture){
							o.dx = x-o.sx; o.dy = y-o.sy; // 터치 이동 거리 계산
							if(Math.abs(o.dx) > Math.abs(o.dy)){ // 가로 이동 크면 동작
								e.preventDefault();
								if(config.swipe){
									$this.mCont.css('left',(o.sl + o.dx) + 'px'); // 터치 이동 거리만큼 mCont 이동
								}
							}else{
								$this.onGesture = 0;
							}
						}
					}
					if(e.type == 'touchend' || e.type == 'mouseup'){
						//e.preventDefault(); // 20150414. a 링크 위해 주석처리.
						$this.onGesture = 0;
						o.ex = x; o.ey = y; // 터치 종료 위치 기억
						if(Math.abs(o.dx) > Math.abs(o.dy)){ // 가로 이동 크면 동작
							$this.offsetXdrag = parseInt($this.mCont.css('left')) || 0; // mContC 를 이전 다음 동작 시 이동한 만큼 보정할거고.. (NAN이면0으로계산)
							$this.mCont.css('left',(o.sl) + 'px');// mCont 는 원위치한다.
							if((o.ex-o.sx) > o.threshold){
								$this.prevAct();
							}
							else if((o.ex-o.sx) < -o.threshold){
								$this.nextAct();
							}
							else{
								$this.returnAct('slide');
							}
						}
						$this.restartInterval($this.timer1);
					}
				}else{ // $(this) 범위 밖이면 원위치
					if($this.onGesture){ // 터치중
						$this.returnAct('slide');
						$this.onGesture = 0;
					}
				}
				/* $('a', this).on('click', function(){
					if(Math.abs(o.dx) > 2){ // 2px 초과 드래그하면.. 링크 이동 안함.
						return false;
					}else{
						return;
					}
				}); */
				// Android 4.1.2 Webkit 534.30 (GalaxyS2,..) 는 touch 와 mouse 이벤트 동시에 발생하고,
				if(/touch/.test(e.type)){
					//$('.test').html($this.onGesture + "  " + /touch/.test(e.type) + "  " + e.type + "  " + Math.abs(o.dx)).css({'border':'1px solid #f00'}); // 점검
				}else{ // Desktop Web 은 mouse 이벤트만 발생한다.
					//$('.test').html($this.onGesture + "  " + /touch/.test(e.type) + "  " + e.type + "  " + Math.abs(o.dx)).css({'background':'#0f0'}); // 점검
					return false; // 그래서 여기서만 해줘야지.. 올바로 동작
				}
			});
		})();
		$this.returnAct = function(effect){ // 제자리로 되돌리기
			switch(effect){
			case 'slide':
				$this.mCont.animate({left:0},'slow','swing', function(){});
				break;
			default:
				$this.mCont.css('left',0);
			}
		}
	});
} /* /$.fn.jQmPR1 */


/** ◇◆ jQmTicker1. v0.3. 20140804.(20161110). 20170126. MoonYoungShin. * 이전다음 쪽. 자동순환. 순번없음. 가로세로배치 세로전환.
 * Need) ★ jquery-1.8.0.min.js 이상, jquery.easing.1.3.js
 * Use) $('#banner1').jQmTicker1();
 * 20170126. 코드 정리. 자동순환. 재생 버튼 클릭 후 초점 있을 때, 마우스 포인트를 콘텐츠 지나서 아웃할 때, 재가동으로 수정.
 * Task) 고도화!
 */
$.fn.jQmTicker1 = function(options){
	if(!this) return false;
	var config = {
		interval: 3000, // 간격 밀리초
		autoFlag: true, // true: 정지 버튼 클릭 안한 상태, false: 클릭한 상태
		effect: null, // 효과
		duration: 0, // 효과 동작시간. 밀리초
		easing: 'swing', // 동작 완화. jswing 은 jquery.easing.1.3.js 필요!
		//DOM Selectors
		mView: '.mView', // 뷰영역
		mCont: '>.mCont', // 콘텐츠 그룹
		mContC: '>.mContC', // 단위콘텐츠. 아코디언 효과에는 자식으로 순번 앵커와 진짜콘텐츠를 분리한다.
		prev: '.mControl .prev', // 이전 버튼
		next: '.mControl .next', // 다음 버튼
		stop: '.mControl .stop', // (일시)정지 버튼
		play: '.mControl .play', // 재생 버튼
		onPage: 1 // 초기활성페이지
	};
	$.extend(config, options);

	return this.each(function(){
		var $this = $(this);
		$this.effect = config.effect;
		//DOM
		$this.mView = $(config.mView, $this);
		$this.mCont = $(config.mCont, $this.mView);
		$this.mContC = $(config.mContC, $this.mCont); // '>.mContC'
		$this.mNum = $(config.mNum, $this);
		$this.prev = $(config.prev, $this);
		$this.next = $(config.next, $this);
		$this.stop = $(config.stop, $this);
		$this.play = $(config.play, $this);

		($this.autoOnOff = function(){ // auto play, stop 상태 표시
			if(config.autoFlag){
				$this.play.removeClass('on').addClass('on');
				$this.stop.removeClass('on')
			}else{
				$this.play.removeClass('on')
				$this.stop.removeClass('on').addClass('on');
			}
		})();

		$this.reset = function(){ // 다시 맞춤 (load, resize, oriented 동작에)
			config.onPage = 1;
			$this.action($this.effect);
		};

		// 액션
		$this.action = function(effect){
			switch(effect){
			default:
				$this.mCont.animate({'top': $this.mView.height() * (1 - config.onPage)  + 'px'}, config.duration, config.easing);
			}
			$this.offsetXdrag = 0; // 보정 후 초기화
		};

		$this.prevAct = function(){ // 이전 동작
			var allPage = $this.mCont.height() / $this.mView.height();
			if(config.onPage == 1){
				config.onPage = allPage;
			}else{
				config.onPage--;
			}
			$this.action($this.effect);
		}
		$this.nextAct = function(){ // 다음 동작
			var allPage = $this.mCont.height() / $this.mView.height();
			if(config.onPage == allPage){
				config.onPage = 1;
			}else{
				config.onPage++;
			}
			$this.action($this.effect);
		}

		// 자동순환 //
		$this.autoAct = function(){
			if(config.autoFlag){$this.nextAct();}
		}
		$this.timer1 = setInterval($this.autoAct, config.interval); // 자동 가동
		$this.restartInterval = function(timer){ // 자동 재가동
			if(timer){
				clearInterval(timer);
			}
			$this.timer1 = setInterval($this.autoAct, config.interval);
		}

		$this.stopAct = function(){ // 정지 동작
			config.autoFlag = false;
			$this.autoOnOff();
			clearInterval($this.timer1);
		}

		$this.playAct = function(){ // 재생 동작
			config.autoFlag = true;
			$this.autoOnOff();
			$this.restartInterval($this.timer1);
		}

		$this.prev.on('click', function(e){ // 이전 클릭
			e.preventDefault();
			$this.prevAct();
		});

		$this.next.on('click', function(e){ // 다음 클릭
			e.preventDefault();
			$this.nextAct();
		});

		$this.stop.on('click', function(e){ // 정지 클릭
			e.preventDefault();
			$this.stopAct();

		});

		$this.play.on('click', function(e){ // 재생 클릭
			e.preventDefault();
			$this.playAct();
		});

		// 반응형.
		$(window).on('resize', function(){
			$this.reset();
			$this.action(); // $this.action($this.effect); 마라! 과부하 방지.
		});

		// 접근성
		//$this.find('button, a').addBack().on('focusin mouseenter click', function(e){ // ~20170126
		$this.find('button, a').addBack().on('focusin mouseenter', function(e){ // 오버 20170126
			clearInterval($this.timer1);
		});
		$this.find('button, a').addBack().on('focusout mouseleave', function(e){ // 아웃
			if(config.autoFlag && !$(':focus', $this.mContC).length){ // 20170126. autoFlag 참이고 단위콘텐츠 내부에 초점 없으면
				$this.restartInterval($this.timer1);
			}
		});

		$this.mCont.find('a').first().on('focusin', function(e){ // 첫앵커 포커스시 맨앞페이지로
			config.onPage = 1;
			$this.mCont.css({'top': $this.mView.height() * (1 - config.onPage)  + 'px'});
		});
		$this.mCont.find('a').last().on('focusin', function(e){ // 끝앵커 포커스시 맨뒤페이지로는 [IE] 문제 있으므로 그대로 두는게 좋다.
			//var allPage = $this.mCont.height() / $this.mView.height();
			//config.onPage = allPage;
			//$this.mCont.css({'top': $this.mView.height() * (1 - config.onPage)  + 'px'});
		});

	});
} /* /$.fn.jQmTicker1 */


/** ◇◆ jQmPrevNext1. v0.8.1. 20161110~ 20170927. 20171010. MoonYoungShin.
 * 이전다음 쪽. 자동순환. 자동순번. 가로세로배치 세로전환. 아이템폭 고정(또는 반응형).
 * Use) $('#card1').jQmPrevNext1();
 //$('#ppr1').jQmPrevNext1({interval: 12000, gesture: true, threshold: 10});
 * 20171010. 현재페이지 / 전체페이지 추가
 * 20170629. gesture 제스처 추가.
 * 20170330. 초기 활성 페이지로 가기. 이전 다음 동작에선 페이지만 계산하고 동작은 doDirect() 에서 하게함.
 * 20170314. 소수점 오차 해결 방법 개선.
 * 20170126. 코드 정리. 자동순환. 재생 버튼 클릭 후 초점 있을 때, 마우스 포인트를 콘텐츠 지나서 아웃할 때, 재가동으로 수정.
 * 반응형 높이 소수점 오차 해결.
 * 클릭 이벤트 시 높이로 페이지 계산. (내용물 크기 반응형)
 * 창 크기 조정하면 맨앞으로 초기화한다.
 * 자동 쪽수 매김 기능 추가.
 * 접근성. 키보드 운용시 페이지 계산해서 찾아감.
 * Task) To Advance!
 */
$.fn.jQmPrevNext1 = function(options){
	if(!this) return false;
	var config = {
		interval: 120000, // 간격 밀리초
		autoFlag: true, // true: 정지 버튼 클릭 안한 상태, false: 클릭한 상태
		gesture: false, // true: 터치이벤트할당
		threshold: 10, // 터치 무브가 값px 이상이면 동작

		// DOM Selectors
		mView : '.mView', // 뷰
		mCont : '.mView .mCont', // 내용물 묶음
		mContC : '.mView .mContC', // 내용물 개별 단위콘텐츠 (아이템)
		bprev : '.mControl .prev', // 이전
		bnext : '.mControl .next', // 다음
		bstop : '.mControl .stop', // 정지
		bplay : '.mControl .play', // 재생
		mPageNum: '.mPageNum', // 자동 쪽수 매김 묶음
		pageOn: '.mPage .on', // 현재페이지
		pageTotal: '.mPage .total', // 전체페이지
		m: '.m' // 메뉴 아이템. 쪽수는 .mPageNum>.m 이다.
	};
	$.extend(config, options);
	return this.each(function(){
		var $this = $(this);
			$this.$v = $(config.mView, $this);
			$this.$c = $(config.mCont, $this); // 주의) $(config.mCont, $this.$v) 이러면 결함소지.
			$this.$cc = $(config.mContC, $this);
			$this.$bprev = $(config.bprev, $this);
			$this.$bnext = $(config.bnext, $this);
			$this.$bstop = $(config.bstop, $this);
			$this.$bplay = $(config.bplay, $this);
			$this.$mPageNum = $(config.mPageNum, $this); // 쪽수 매기기 래퍼
			$this.$mpn = {}; // 쪽수 매기기 아이템
			$this.$pageOn = $(config.pageOn, $this); // 현재페이지
			$this.$pageTotal = $(config.pageTotal, $this); // 전체페이지

		// 값 구하기 20170314.
		$this.getValue = function(){

			$this.onPage = 1; // 현재 활성 페이지
			$this.cTop = 0; // 내용물 묶음 상단 위치값

			// JS 로 만든 인라인 style 제거. 이외 style 값으로 다시 계산 위해서..
			$this.$v.css({ height: '', paddingBottom: '' });
			$this.$cc.css({ height: '', paddingBottom: '' });

			// 소수점 오차 해결 전 값
			$this.vHeight = Math.round( $this.$v.outerHeight() ); // 뷰 높이. 20161129. 반응형 padding 고려 ((( height()
			$this.cHeight = Math.round( $this.$c.outerHeight() ); // 내용물 묶음 높이
			$this.ccHeight = Math.round( $this.$cc.outerHeight() ); // 내용물 1개 높이

			// Rows per Page
			$this.rpp = Math.round( $this.vHeight / $this.ccHeight );

			// 전체페이지 계산
			// Math.round() 하면 결함! 뷰 영역에 3행씩 보여줄 때, 전체 4행이면 2페이지인데 1페이지로 잘못 계산됨.
			// 소수점 오차 해결 = 올림((내용물묶음높이-내용물행수)/뷰영역높이) ☆ 행 수가 1행 높이보다 크면 결함 소지 있음!
			$this.allPage = Math.ceil( ( $this.cHeight - ( $this.cHeight / $this.ccHeight ) ) / $this.vHeight );
			$this.data({'total-page': $this.allPage}); // JS 에서 이용
			$this.attr({'data-total-page': $this.allPage}); // CSS 에서 선택자로 이용

			if( !$('html').is('.lteIE8') ){ /* [~IE8] Down Bug 회피 */
				$this.$cc.css({
					height: $this.ccHeight + 'px',
					paddingBottom: 0
				});
				$this.$v.css({
					height: ( $this.ccHeight * $this.rpp ) + 'px', // 내용물 개별 높이 * 뷰 내용물 행 수
					paddingBottom: 0
				});
			}

			// 소수점 오차 해결 후 값
			$this.vHeight = Math.round( $this.$v.outerHeight() );
			$this.cHeight = Math.round( $this.$c.outerHeight() );
			$this.ccHeight = Math.round( $this.$cc.outerHeight() );

			// 초기 활성 페이지로 가기 20170330.
			if( $this.$cc.filter('.on').index() >= 0 ){
				$this.onPage = 1 + Math.round( $this.$cc.filter('.on').position().top / $this.vHeight );
			}
			//console.log($this.onPage);
			$this.cTop = -$this.vHeight * ($this.onPage - 1);

			// 쪽수 매기기
			$this.$mPageNum.empty(); // 내부를 비운다
			for(var i=1; i <= $this.allPage; i++){
				$this.$mPageNum.append('<a href="#?" class="m m' + i + '" title="' + i + '쪽 보기"><i class="ic1"></i> <span class="t1 blind">' + i + '</span></a>');
			}
			$this.$mpn = $(config.mPageNum + '>' + config.m, $this); // 쪽수 아이템. DOM 만들어지면 참조변수(객체변수) 만든다.
		}

		$this.setActive = function(){ // 활성값 설정 (반응형)
			//console.log('$this.onPage ' + $this.onPage);
			$this.$mpn.eq($this.onPage-1).addClass('on').siblings().removeClass('on');
			$this.$pageOn.text($this.onPage); // 현재페이지
			$this.$pageTotal.text($this.allPage); // 전체페이지
		}

		$this.action1 = function(effect){ // 동작
			$this.$c.css({'top': $this.cTop + 'px' });
			$this.setActive();
		}

		$this.doReset = function(){ // 초기화
			$this.getValue();
			$this.action1();
		}

		$this.doPrev = function(effect){ // 이전 동작 20170330.
			//$this.getValue(); 하지마요!
			$this.onPage--;
			if($this.onPage <= 0){ //
				$this.onPage = $this.allPage;
			}
			$this.doDirect();
		}
		$this.doNext = function(effect){ // 다음 동작 20170330.
			//$this.getValue(); 하지마요!
			$this.onPage++;
			if($this.onPage > $this.allPage){ //
				$this.onPage = 1;
			}
			$this.doDirect();
		}
		$this.doDirect = function(effect){ // 직접 동작
			$this.cTop = -$this.vHeight * ($this.onPage - 1);
			$this.action1();
		}

		// 자동순환 //
		$this.autoAction = function(){ // 자동 동작
			if(config.autoFlag){
				$this.doNext();
			}
		}
		$this.timer1 = setInterval($this.autoAction, config.interval); // 자동 가동
		$this.restartInterval = function(timer){ // 자동 재가동
			if(timer){
				clearInterval(timer);
			}
			$this.timer1 = setInterval($this.autoAction, config.interval);
		}

		$this.doStop = function(){ // 정지 동작
			config.autoFlag = false;
			$this.autoOnOff();
			clearInterval($this.timer1);
		}

		$this.doPlay = function(){ // 재생 동작
			config.autoFlag = true;
			$this.autoOnOff();
			$this.restartInterval($this.timer1);
		}

		$this.autoOnOff = function(){ // auto play, stop 상태 표시
			if(config.autoFlag){
				$this.$bplay.removeClass('on').addClass('on');
				$this.$bstop.removeClass('on')
			}else{
				$this.$bplay.removeClass('on')
				$this.$bstop.removeClass('on').addClass('on');
			}
		};
		$this.autoOnOff(); // 첫실행

		$this.$bprev.on('click', function(e){ // 이전 클릭
			e.preventDefault();
			$this.doPrev();
		});

		$this.$bnext.on('click', function(e){ // 다음 클릭
			e.preventDefault();
			$this.doNext();
		});

		$this.$mPageNum.on('click', '>' + config.m, function(e){ // 직접 클릭. 미래 존재 요소에 이벤트 연결
			e.preventDefault();
			$this.onPage = $(this).index() + 1;
			$this.doDirect();
		});

		$this.$bstop.on('click', function(e){ // 정지 클릭
			e.preventDefault();
			$this.doStop();
		});

		$this.$bplay.on('click', function(e){ // 재생 클릭
			e.preventDefault();
			$this.doPlay();
		});

		// 반응형. 사라짐 방지
		$(window).on('load resize', function(e){
			setTimeout(function(){
				$this.doReset();
			}, 50);
		});

		// 접근성
		//$this.find('button, a').addBack().on('focusin mouseenter click', function(e){ // ~20170126
		$this.find('button, a').addBack().on('focusin mouseenter', function(e){ // 오버 20170126
			clearInterval($this.timer1);
		});
		$this.find('button, a').addBack().on('focusout mouseleave', function(e){ // 아웃
			if(config.autoFlag && !$(':focus', $this.$cc).length){ // 20170126. autoFlag 참이고 단위콘텐츠 내부에 초점 없으면
				$this.restartInterval($this.timer1);
			}
		});

		// 마우스 'click' 하면 'mousedown' 'focusin' 'mouseup' 이벤트도 발생한다.
		// 'focusin' 이벤트에 뷰 영역 밖의 초점을 표시하기 위해 요소 위치를 변경하는 동작을 바인딩한 경우..
		// 'mousedown' 위치와 다른 곳에서 'mouseup' 동작되어 'click'의 기본 동작 (a 요소는 href 로 이동) 이 안된다.
		// 결함 해결 위해.. 'mousedown'에 의한 'focusin'인지 구분하여 분기한다.
		$this.isMousedown = 0;
		$this.$c.find('a').on('mousedown', function(e){
			$this.isMousedown = 1;
		});
		$this.$c.find('a').on('focusin', function(e){ // 앵커 포커스시 (키보드 탭, 마우스 다운, 클릭)
			// 키보드 운용시 페이지 계산해서 찾아감.
			$this.onPage = Math.floor($(this).position().top / $this.vHeight) + 1;
			if(!$this.isMousedown){
				$this.doDirect();
			}
		});
		$('window').on('mouseup', function(){
			$this.isMousedown = 0;
		});

		// 제스처. 20170629.
		if(!config.gesture) return false;
		($this.gesture1 = function(){
			var o = {
				sx: 0, // start x
				sy: 0, // start y
				dx: 0, // distance x
				dy: 0, // distance y
				ex: 0, // end x
				ey: 0, // end y
				sl: 0, // start left
				st: 0, // start top
				threshold: config.threshold // 반응 기준값
			};
			$this.$v.on('touchstart touchmove touchend mousedown mousemove mouseup', function(e){
				 // $(this) 좌상단에서의 터치 이벤트 상대 위치 x, y
				$this.offsetLeft = ($(this).offset().left < 0)? 0: $(this).offset().left; // 뷰가 화면 보다 클 때 보정
				$this.offsetTop = ($(this).offset().top < 0)? 0: $(this).offset().top;
				if(e.originalEvent.touches || e.originalEvent.changedTouches){ // 터치 있으면
					var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]; // 싱글 터치
					touch.length = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
				}else{
					var e = e || window.event;
				}
				var x = (e.pageX || touch.pageX) - $this.offsetLeft;
				var y = (e.pageY || touch.pageY) - $this.offsetTop;
				if(x < $(this).width() && x > 0 && y < $(this).height() && y > 0){ // $(this) 범위 안이면 동작
					if(e.type == 'touchstart' || e.type == 'mousedown'){
						$this.onGesture = 1;
						o.sx = x; o.sy = y; // 터치 시작 위치 기억
						o.dx = 0; o.dy = 0; // 터치 이동 거리 초기화
						clearInterval($this.timer1); // 자동 정지
					}
					if(e.type == 'touchmove' || e.type == 'mousemove'){
						if($this.onGesture){
							o.dx = x-o.sx; o.dy = y-o.sy; // 터치 이동 거리 계산
							if(Math.abs(o.dx) > Math.abs(o.dy)){ // 가로 이동 크면 동작
								e.preventDefault();
							}else{
								$this.onGesture = 0;
							}
						}
					}
					if(e.type == 'touchend' || e.type == 'mouseup'){
						//e.preventDefault(); // 20150414. a 링크 위해 주석처리.
						$this.onGesture = 0;
						o.ex = x; o.ey = y; // 터치 종료 위치 기억
						if(Math.abs(o.dx) > Math.abs(o.dy)){ // 가로 이동 크면 동작
							if((o.ex-o.sx) > o.threshold){
								$this.doPrev();
							}
							else if((o.ex-o.sx) < -o.threshold){
								$this.doNext();
							}
							else{
								// 원래 그대로
							}
						}
						$this.restartInterval($this.timer1);
					}
				}else{ // $(this) 범위 밖이면 원위치
					if($this.onGesture){ // 터치중
						// 원래 그대로
						$this.onGesture = 0;
					}
				}
				$('a', this).on('click', function(){
					if(Math.abs(o.dx) > 2){ // 2px 초과 드래그하면.. 링크 이동 안함.
						return false;
					}else{
						return;
					}
				});
			});
		})();
	});
} /* /$.fn.jQmPrevNext1 */


/** ◇◆ jQmPrevNext2. v0.4.0. 20160527~. 20171124. 20171128. MoonYoungShin.
 * 이전다음 쪽. 자동순환. 자동순번. 가로배치 가로전환. 아이템폭 균등(또는 반응형).
 * 20171124. 자동순번 추가 및 ( jQmPrevNext3 참고 )
 * 20170126. 코드 정리. 자동순환. 재생 버튼 클릭 후 초점 있을 때, 마우스 포인트를 콘텐츠 지나서 아웃할 때, 재가동으로 수정.
 * 내용물 개별 폭 값이 100%, 50%, 33.333% 처럼 좌우 정렬된 콘텐츠에 사용한다. (내용물 크기 반응형)
 * 창 크기 조정하면 현재 보이는 첫번째 내용물 기준으로 맞춰진다.
 * Use) $('#npr1').jQmPrevNext2();
 * Task) To Advance!
 */
$.fn.jQmPrevNext2 = function(options){
	if(!this) return false;
	var config = {
		interval: 12000, // 간격 밀리초
		autoFlag: true, // true: 정지 버튼 클릭 안한 상태, false: 클릭한 상태
		onItem: 1, // 초기 활성 아이템

		// DOM Selectors
		mView : '.mView', // 뷰
		mCont : '.mView .mCont', // 내용물 묶음
		mContC : '.mView .mContC', // 내용물 개별
		bprev : '.mControl .prev', // 이전
		bnext : '.mControl .next', // 다음
		bstop : '.mControl .stop', // 정지
		bplay : '.mControl .play', // 재생
		mPageNum: '.mPageNum', // 자동 쪽수 매김 묶음
		pageOn: '.mPage .on', // 현재페이지
		pageTotal: '.mPage .total', // 전체페이지
		m: '.m' // 메뉴 아이템. 쪽수는 .mPageNum>.m 이다.
	};
	$.extend(config, options);
	return this.each(function(){
		var $this = $(this);
			$this.$v = $(config.mView, $this);
			$this.$c = $(config.mCont, $this);
			$this.$cc = $(config.mContC, $this);
			$this.$bprev = $(config.bprev, $this);
			$this.$bnext = $(config.bnext, $this);
			$this.$bstop = $(config.bstop, $this);
			$this.$bplay = $(config.bplay, $this);
			$this.$mPageNum = $(config.mPageNum, $this); // 쪽수 매기기 래퍼
			$this.$mpn = {}; // 쪽수 매기기 아이템
			$this.$pageOn = $(config.pageOn, $this); // 현재페이지
			$this.$pageTotal = $(config.pageTotal, $this); // 전체페이지
			$this.cTotal = $this.$cc.length; // 내용물 개별 개수.
			$this.onPage = 1; // 현재 활성 페이지
			$this.cLeft = 0; // 내용물 묶음 좌단 위치값

		// 값 구하기
		$this.getValue = function(){

			$this.vw = Math.round( $this.$v.innerWidth() ); // 뷰 너비.
			$this.cw = Math.round( $this.$c.outerWidth() ); // 내용물 묶음 너비 (불필요함)
			$this.ccw = Math.round( $this.$cc.outerWidth(true) ); // 내용물 1개 너비 margin 포함

			// items per Page
			$this.ipp = Math.round( $this.vw / $this.ccw );
			if( $this.ipp == 0 ){
				$this.ipp = 1;
			}

			// 전체페이지 계산
			$this.allPage = Math.ceil( $this.cTotal / $this.ipp );
			$this.data({'total-page': $this.allPage}); // JS 에서 이용
			$this.attr({'data-total-page': $this.allPage}); // CSS 에서 선택자로 이용

			// 페이지 너비. $this.vw 보다 작거나 같다.
			$this.pw = $this.ccw * $this.ipp;

			// 활성 아이템으로 활성 페이지 산정
			$this.onPage = Math.ceil( config.onItem / $this.ipp );

			// 쪽수 매기기
			$this.$mPageNum.empty(); // 내부를 비운다
			for(var i=1; i <= $this.allPage; i++){
				$this.$mPageNum.append('<a href="#?" class="m m' + i + '" title="' + i + '쪽 보기"><i class="ic1"></i> <span class="t1 blind">' + i + '</span></a>');
			}
			$this.$mpn = $(config.mPageNum + '>' + config.m, $this); // 쪽수 아이템. DOM 만들어지면 참조변수(객체변수) 만든다.
		}

		$this.setActive = function(){ // 활성값 설정 (반응형)
			config.onItem = ($this.onPage - 1) * $this.ipp + 1; // 활성 페이지 첫 아이템을 활성 지정
			$this.$mpn.eq($this.onPage - 1).addClass('on').siblings().removeClass('on'); // 쪽수 활성
			//$this.$cc.eq(config.onItem - 1).addClass('on').siblings().removeClass('on'); // 아이템 활성
			$this.$pageOn.text($this.onPage); // 현재페이지
			$this.$pageTotal.text($this.allPage); // 전체페이지

			//console.log( ''
			//	+ ' | ' + $this.vw
			//	+ ' | ' + $this.ccw
			//	+ ' | ' + '$this.allPage ' + $this.allPage
			//	+ ' | ' + '$this.onPage ' + $this.onPage
			//);

		}

		$this.action1 = function(effect){ // 동작
			$this.$c.css({'left': $this.cLeft + 'px' });
		}

		$this.doReset = function(){ // 초기화
			$this.getValue(); // 변한 값만 구한다. 활성값은 구하면 안된다.
			$this.doDirect();
		}

		$this.doPrev = function(effect){ // 이전 동작
			if( !( $this.$c.position().left % $this.pw ) || ($this.onPage == $this.allPage) ){
				$this.onPage--;
			}
			if($this.onPage <= 0){ //
				$this.onPage = $this.allPage;
			}
			$this.doDirect();
		}

		$this.doNext = function(effect){ // 다음 동작
			$this.onPage++;
			if($this.onPage > $this.allPage){ //
				$this.onPage = 1;
			}
			$this.doDirect();
		}

		$this.doDirect = function(effect){ // 직접 동작
			if($this.onPage != $this.allPage){
				$this.cLeft = -$this.pw * ($this.onPage - 1);
			}else{ // 맨끝쪽이면 뷰와 아이템 우단을 맞춘다.
				$this.cLeft = $this.vw - ( $this.ccw * $this.cTotal );
			}
			$this.action1();
			$this.setActive();
		}

		// 자동순환 //
		$this.autoAction = function(){ // 자동 동작
			if(config.autoFlag){
				$this.doNext();
			}
		}

		$this.timer1 = setInterval($this.autoAction, config.interval); // 자동 가동

		$this.restartInterval = function(timer){ // 자동 재가동
			if(timer){
				clearInterval(timer); // 자동 정지
			}
			$this.timer1 = setInterval($this.autoAction, config.interval);
		}

		$this.doStop = function(){ // 정지 동작
			config.autoFlag = false;
			$this.autoOnOff();
			clearInterval($this.timer1);
		}

		$this.doPlay = function(){ // 재생 동작
			config.autoFlag = true;
			$this.autoOnOff();
			$this.restartInterval($this.timer1);
		}

		$this.autoOnOff = function(){ // auto play, stop 상태 표시
			if(config.autoFlag){
				$this.$bplay.removeClass('on').addClass('on');
				$this.$bstop.removeClass('on')
			}else{
				$this.$bplay.removeClass('on')
				$this.$bstop.removeClass('on').addClass('on');
			}
		};
		$this.autoOnOff(); // 첫실행

		$this.$bprev.on('click', function(e){ // 이전 클릭
			e.preventDefault();
			$this.doPrev();
		});
		$this.$bnext.on('click', function(e){ // 다음 클릭
			e.preventDefault();
			$this.doNext();
		});

		$this.$mPageNum.on('click', '>' + config.m, function(e){ // 직접 클릭. 미래 존재 요소에 이벤트 연결
			e.preventDefault();
			$this.onPage = $(this).index() + 1;
			$this.doDirect();
		});

		$this.$bstop.on('click', function(e){ // 정지 클릭
			e.preventDefault();
			$this.doStop();
		});
		$this.$bplay.on('click', function(e){ // 재생 클릭
			e.preventDefault();
			$this.doPlay();
		});

		 // 반응형. 사라짐 방지
		$(window).on('load resize', function(e){
			setTimeout(function(){
				$this.doReset();
			}, 50);
		});

		// 접근성
		//$this.find('button, a').addBack().on('focusin mouseenter click', function(e){ // ~20170126
		$this.find('button, a').addBack().on('focusin mouseenter', function(e){ // 오버 20170126
			clearInterval($this.timer1);
		});
		$this.find('button, a').addBack().on('focusout mouseleave', function(e){ // 아웃
			if(config.autoFlag && !$(':focus', $this.$cc).length){ // 20170126. autoFlag 참이고 단위콘텐츠 내부에 초점 없으면
				$this.restartInterval($this.timer1);
			}
		});

		// 마우스 'click' 하면 'mousedown' 'focusin' 'mouseup' 이벤트도 발생한다.
		// 'focusin' 이벤트에 뷰 영역 밖의 초점을 표시하기 위해 요소 위치를 변경하는 동작을 바인딩한 경우..
		// 'mousedown' 위치와 다른 곳에서 'mouseup' 동작되어 'click'의 기본 동작 (a 요소는 href 로 이동) 이 안된다.
		// 결함 해결 위해.. 'mousedown'에 의한 'focusin'인지 구분하여 분기한다.
		$this.isMousedown = 0;
		$this.$c.find('a').on('mousedown', function(e){
			$this.isMousedown = 1;
		});
		$this.$c.find('a').on('focusin', function(e){ // 앵커 포커스시 (키보드 탭, 마우스 다운, 클릭)
			// 키보드 운용시 페이지 계산해서 찾아감. 20171128
			$this.onPage = Math.floor( $(this).parent().position().left / $this.pw ) + 1;
			if(!$this.isMousedown){
				$this.doDirect(); // 직접 동작 (활성아이템이 뷰의 앞단에 위치..)
			}
		});
		$('window').on('mouseup', function(){
			$this.isMousedown = 0;
		});

	});
} /* /$.fn.jQmPrevNext2 */


/** ◇◆ jQmPrevNext3. v0.5.0. 20170927. 20171124. 20180330. MoonYoungShin.
 * 이전다음 쪽. 자동순환. 자동순번. 가로배치 가로전환. 아이템폭 고정(또는 반응형).
 * jQmPrevNext1 복제 후 개발
 * 맨끝쪽이면 뷰와 아이템 우단을 맞춘다.
 * 초기 활성 아이템 옵션 추가.
 * 20180330. 맨끝 마진 상계
 * Use) $('#c2pr2').jQmPrevNext3();
 //$('#c2pr2').jQmPrevNext3({interval: 12000, gesture: true, threshold: 10});
 * Task) To Advance!
 */
$.fn.jQmPrevNext3 = function(options){
	if(!this) return false;
	var config = {
		interval: 120000, // 간격 밀리초
		autoFlag: true, // true: 정지 버튼 클릭 안한 상태, false: 클릭한 상태
		gesture: false, // true: 터치이벤트할당
		threshold: 10, // 터치 무브가 값px 이상이면 동작
		onItem: 1, // 초기 활성 아이템

		// DOM Selectors
		mView : '.mView', // 뷰
		mCont : '.mView .mCont', // 내용물 묶음
		mContC : '.mView .mContC', // 내용물 개별 단위콘텐츠 (아이템)
		bprev : '.mControl .prev', // 이전
		bnext : '.mControl .next', // 다음
		bstop : '.mControl .stop', // 정지
		bplay : '.mControl .play', // 재생
		mPageNum: '.mPageNum', // 자동 쪽수 매김 묶음
		pageOn: '.mPage .on', // 현재페이지
		pageTotal: '.mPage .total', // 전체페이지
		m: '.m' // 메뉴 아이템. 쪽수는 .mPageNum>.m 이다.
	};
	$.extend(config, options);
	return this.each(function(){
		var $this = $(this);
			$this.$v = $(config.mView, $this);
			$this.$c = $(config.mCont, $this); // 주의) $(config.mCont, $this.$v) 이러면 결함소지.
			$this.$cc = $(config.mContC, $this);
			$this.$bprev = $(config.bprev, $this);
			$this.$bnext = $(config.bnext, $this);
			$this.$bstop = $(config.bstop, $this);
			$this.$bplay = $(config.bplay, $this);
			$this.$mPageNum = $(config.mPageNum, $this); // 쪽수 매기기 래퍼
			$this.$mpn = {}; // 쪽수 매기기 아이템
			$this.$pageOn = $(config.pageOn, $this); // 현재페이지
			$this.$pageTotal = $(config.pageTotal, $this); // 전체페이지
			$this.cTotal = $this.$cc.length; // 내용물 개별 개수.
			$this.onPage = 1; // 현재 활성 페이지
			$this.cLeft = 0; // 내용물 묶음 좌단 위치값

		// 값 구하기
		$this.getValue = function(){

			$this.vw = Math.round( $this.$v.innerWidth() ); // 뷰 너비.
			$this.cw = Math.round( $this.$c.outerWidth() ); // 내용물 묶음 너비 (불필요함)
			$this.ccw = Math.round( $this.$cc.outerWidth(true) ); // 내용물 1개 너비 margin 포함

			// items per Page
			$this.ipp = Math.floor( $this.vw / $this.ccw );
			if( $this.ipp == 0 ){
				$this.ipp = 1;
			}

			// 전체페이지 계산
			$this.allPage = Math.ceil( $this.cTotal / $this.ipp );
			$this.data({'total-page': $this.allPage}); // JS 에서 이용
			$this.attr({'data-total-page': $this.allPage}); // CSS 에서 선택자로 이용

			$this.$v.css({
				//width: ( $this.ccw * $this.ipp ) + 'px', // 내용물 개별 너비 * 뷰 내용물 아이템 수
			});

			// 소수점 오차 해결 후 값
			//$this.vw = Math.round( $this.$v.outerWidth() );
			//$this.cw = Math.round( $this.$c.outerWidth() );
			//$this.ccw = Math.round( $this.$cc.outerWidth() );

			// 페이지 너비. $this.vw 보다 작거나 같다.
			$this.pw = $this.ccw * $this.ipp;

			// 초기 활성 ( .mContC.on ) 고려.
			// 단, 내용물 묶음 위치가 페이지 기본 위치와 다르면 혼란을 줄 수 있다. (1 아이템씩 탐색한다면 괜찮다.)
			$this.$cc.eq( config.onItem - 1 ).addClass('on');
			$this.$cc_on = $this.$cc.filter('.on');
			if( !!$this.$cc_on.length ){ // 초기 활성 아이템 있으면
				$this.onPage = 1 + Math.floor( $this.$cc_on.position().left / $this.pw );
			}

			// 쪽수 매기기
			$this.$mPageNum.empty(); // 내부를 비운다
			for(var i=1; i <= $this.allPage; i++){
				$this.$mPageNum.append('<a href="#?" class="m m' + i + '" title="' + i + '쪽 보기"><i class="ic1"></i> <span class="t1 blind">' + i + '</span></a>');
			}
			$this.$mpn = $(config.mPageNum + '>' + config.m, $this); // 쪽수 아이템. DOM 만들어지면 참조변수(객체변수) 만든다.
		}

		$this.setActive = function(){ // 활성값 설정 (반응형)
			$this.$mpn.eq($this.onPage-1).addClass('on').siblings().removeClass('on'); // 쪽수 활성
			$this.$pageOn.text($this.onPage); // 현재페이지
			$this.$pageTotal.text($this.allPage); // 전체페이지
		}

		$this.action1 = function(effect){ // 동작
			if( !!$this.$cc_on.length ){ // 초기 활성 있으면
				$this.$c.css({'left': -$this.$cc_on.position().left + 'px' });
				$this.$cc_on.removeClass('on');
				$this.$cc_on = $this.$cc.filter('.on');
			}else{
				$this.$c.css({'left': $this.cLeft + 'px' });
			}
			$this.setActive();
		}

		$this.doReset = function(){ // 초기화
			$this.getValue(); // 여기서만 호출한다.
			$this.doDirect();
		}

		$this.doPrev = function(effect){ // 이전 동작
			// (내용물 묶음 위치가 페이지 기본 위치) 또는 (마지막 페이지) 라면.. 활성페이지-1 하지만..
			// 아니라면.. 활성페이지 그대로 내용물 묶음 위치를 페이지 기본 위치로 보낸다.
			if( !( $this.$c.position().left % $this.pw ) || ($this.onPage == $this.allPage) ){
				$this.onPage--;
			}
			if($this.onPage <= 0){ //
				$this.onPage = $this.allPage;
			}
			$this.doDirect();
		}
		$this.doNext = function(effect){ // 다음 동작
			$this.onPage++;
			if($this.onPage > $this.allPage){ //
				$this.onPage = 1;
			}
			$this.doDirect();
		}
		$this.doDirect = function(effect){ // 직접 동작
			if($this.onPage != $this.allPage){
				$this.cLeft = -$this.pw * ($this.onPage - 1);
			}else{ // 맨끝쪽이면 뷰와 아이템 우단을 맞춘다.
				$this.cLeft = $this.vw - ( $this.ccw * ($this.cTotal-1) + Math.round( $this.$cc.last().outerWidth(true) ) ); // 20180330. 맨끝 마진 상계
			}
			$this.action1();
		}

		// 자동순환 //
		$this.autoAction = function(){ // 자동 동작
			if(config.autoFlag){
				$this.doNext();
			}
		}

		$this.timer1 = setInterval($this.autoAction, config.interval); // 자동 가동

		$this.restartInterval = function(timer){ // 자동 재가동
			if(timer){
				clearInterval(timer);
			}
			$this.timer1 = setInterval($this.autoAction, config.interval);
		}

		$this.doStop = function(){ // 정지 동작
			config.autoFlag = false;
			$this.autoOnOff();
			clearInterval($this.timer1);
		}

		$this.doPlay = function(){ // 재생 동작
			config.autoFlag = true;
			$this.autoOnOff();
			$this.restartInterval($this.timer1);
		}

		$this.autoOnOff = function(){ // auto play, stop 상태 표시
			if(config.autoFlag){
				$this.$bplay.removeClass('on').addClass('on');
				$this.$bstop.removeClass('on')
			}else{
				$this.$bplay.removeClass('on')
				$this.$bstop.removeClass('on').addClass('on');
			}
		};
		$this.autoOnOff(); // 첫실행

		$this.$bprev.on('click', function(e){ // 이전 클릭
			e.preventDefault();
			$this.doPrev();
		});

		$this.$bnext.on('click', function(e){ // 다음 클릭
			e.preventDefault();
			$this.doNext();
		});

		$this.$mPageNum.on('click', '>' + config.m, function(e){ // 직접 클릭. 미래 존재 요소에 이벤트 연결
			e.preventDefault();
			$this.onPage = $(this).index() + 1;
			$this.doDirect();
		});

		$this.$bstop.on('click', function(e){ // 정지 클릭
			e.preventDefault();
			$this.doStop();
		});

		$this.$bplay.on('click', function(e){ // 재생 클릭
			e.preventDefault();
			$this.doPlay();
		});

		// 반응형. 사라짐 방지
		$(window).on('load resize', function(e){
			setTimeout(function(){
				$this.doReset();
			}, 50);
		});

		// 접근성
		//$this.find('button, a').addBack().on('focusin mouseenter click', function(e){
		$this.find('button, a').addBack().on('focusin mouseenter', function(e){ // 오버 20170126
			clearInterval($this.timer1);
		});
		$this.find('button, a').addBack().on('focusout mouseleave', function(e){ // 아웃
			$this.$v.removeClass('mj-keyboard-in'); // 20170927
			if(config.autoFlag && !$(':focus', $this.$cc).length){ // 20170126. autoFlag 참이고 단위콘텐츠 내부에 초점 없으면
				$this.restartInterval($this.timer1);
			}
		});

		// 마우스 'click' 하면 'mousedown' 'focusin' 'mouseup' 이벤트도 발생한다.
		// 'focusin' 이벤트에 뷰 영역 밖의 초점을 표시하기 위해 요소 위치를 변경하는 동작을 바인딩한 경우..
		// 'mousedown' 위치와 다른 곳에서 'mouseup' 동작되어 'click'의 기본 동작 (a 요소는 href 로 이동) 이 안된다.
		// 결함 해결 위해.. 'mousedown'에 의한 'focusin'인지 구분하여 분기한다.
		$this.isMousedown = 0;
		$this.$c.find('a').on('mousedown', function(e){
			$this.isMousedown = 1;
		});
		$this.$c.find('a').on('focusin', function(e){ // 앵커 포커스시 (키보드 탭, 마우스 다운, 클릭)
			// 키보드 운용시 페이지 계산해서 찾아감.
			$this.onPage = Math.floor( $(this).parent().position().left / $this.pw ) + 1;
			if(!$this.isMousedown){
				console.log('111');
				$this.$v.addClass('mj-keyboard-in'); // 20170927
				$this.doDirect();
			}
		});
		$('window').on('mouseup', function(){
			$this.isMousedown = 0;
		});

		// 제스처. 20170629.
		if(!config.gesture) return false;
		($this.gesture1 = function(){
			var o = {
				sx: 0, // start x
				sy: 0, // start y
				dx: 0, // distance x
				dy: 0, // distance y
				ex: 0, // end x
				ey: 0, // end y
				sl: 0, // start left
				st: 0, // start top
				threshold: config.threshold // 반응 기준값
			};
			$this.$v.on('touchstart touchmove touchend mousedown mousemove mouseup', function(e){
				 // $(this) 좌상단에서의 터치 이벤트 상대 위치 x, y
				$this.offsetLeft = ($(this).offset().left < 0)? 0: $(this).offset().left; // 뷰가 화면 보다 클 때 보정
				$this.offsetTop = ($(this).offset().top < 0)? 0: $(this).offset().top;
				if(e.originalEvent.touches || e.originalEvent.changedTouches){ // 터치 있으면
					var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]; // 싱글 터치
					touch.length = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
				}else{
					var e = e || window.event;
				}
				var x = (e.pageX || touch.pageX) - $this.offsetLeft;
				var y = (e.pageY || touch.pageY) - $this.offsetTop;
				if(x < $(this).width() && x > 0 && y < $(this).height() && y > 0){ // $(this) 범위 안이면 동작
					if(e.type == 'touchstart' || e.type == 'mousedown'){
						$this.onGesture = 1;
						o.sx = x; o.sy = y; // 터치 시작 위치 기억
						o.dx = 0; o.dy = 0; // 터치 이동 거리 초기화
						clearInterval($this.timer1); // 자동 정지
					}
					if(e.type == 'touchmove' || e.type == 'mousemove'){
						if($this.onGesture){
							o.dx = x-o.sx; o.dy = y-o.sy; // 터치 이동 거리 계산
							if(Math.abs(o.dx) > Math.abs(o.dy)){ // 가로 이동 크면 동작
								e.preventDefault();
							}else{
								$this.onGesture = 0;
							}
						}
					}
					if(e.type == 'touchend' || e.type == 'mouseup'){
						//e.preventDefault(); // 20150414. a 링크 위해 주석처리.
						$this.onGesture = 0;
						o.ex = x; o.ey = y; // 터치 종료 위치 기억
						if(Math.abs(o.dx) > Math.abs(o.dy)){ // 가로 이동 크면 동작
							if((o.ex-o.sx) > o.threshold){
								$this.doPrev();
							}
							else if((o.ex-o.sx) < -o.threshold){
								$this.doNext();
							}
							else{
								// 원래 그대로
							}
						}
						$this.restartInterval($this.timer1);
					}
				}else{ // $(this) 범위 밖이면 원위치
					if($this.onGesture){ // 터치중
						// 원래 그대로
						$this.onGesture = 0;
					}
				}
				$('a', this).on('click', function(){
					if(Math.abs(o.dx) > 2){ // 2px 초과 드래그하면.. 링크 이동 안함.
						return false;
					}else{
						return;
					}
				});
			});
		})();
	});
} /* /$.fn.jQmPrevNext3 */


/* ◇◆ Function ◇◆◇◆◇◆◇◆◇◆ */


/** ◇◆ UA버전탐지(IE version). 20140901~20160909. MoonYoungShin.
 * Result) [IE8]<html class="IE8 lteIE8"> [IE9]<html class="IE9 gteIE9orSUA"> [IE11]<html class="IE11 gteIE9orSUA">
 */
function setClassUAver(){ // Returns the version of Internet Explorer or a -1 for other browsers.
	$.browser = {};
	$.browser.msie = false;
	//$.browser.ua = navigator.userAgent.toLowerCase();
	$.browser.ua = navigator.userAgent;
	$.browser.rv = -1;
	if(navigator.appName == 'Microsoft Internet Explorer'){ // [IE7~10]
		$.browser.msie = true;
		$.browser.re = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');
		if($.browser.re.exec($.browser.ua) != null){
			$.browser.rv = parseFloat( RegExp.$1 );
		}
		$('html').addClass('IE' + $.browser.rv); // IE7, IE8, IE9, IE10 (IE11~ 제외!)
	}
	if((navigator.appName == 'Netscape' && $.browser.ua.search('Trident') != -1)){
		$('html').addClass('IE11');
	}
	if($.browser.rv > -1 && $.browser.rv <= 8){
		$('html').addClass('lteIE8'); // ~IE8
	}else{
		$('html').addClass('gteIE9orSUA'); // IE9~, Standard User Agent
	}
	if( ($.browser.ua.indexOf("Chrome") != -1)  && ($.browser.ua.indexOf("Safari") != -1) ){ // Chrome, Opera
		$('html').addClass('Chrome');
	}
	if( ($.browser.ua.indexOf("Safari") != -1) && ($.browser.ua.indexOf("Chrome") == -1) ){
		$('html').addClass('Safari');
	}
	if($.browser.ua.indexOf("Firefox") != -1){
		$('html').addClass('Firefox');
	}
	//console.log($.browser.rv);
}


/** ◇◆ window크기탐지. 20151117. 20161031. 20170801. MoonYoungShin.
 */
function setClassWinWidth(){
	var $window = $(window);
	var $html = $('html');
	$(window).on('load resize', function(){
		var widthscroll = $window.width() + 16; // screen width with scrollbar
		function removeClassWidth(){ // Returns the version of Internet Explorer or a -1 for other browsers.
			$html.removeClass('width-small width-medium width-large width-xlarge lt-width-xlarge');
		}
		removeClassWidth();
		if( widthscroll <= 767 ){
			$('html').addClass('width-small');
		}
		if( (widthscroll >= 768) && (widthscroll <= 999) ){
			$('html').addClass('width-medium');
		}
		if( (widthscroll >= 1000) && (widthscroll <= 1259) ){ // ☆
			$('html').addClass('width-large');
		}
		if( widthscroll >= 1260 ){ // ☆
			$('html').addClass('width-xlarge');
		}else{
			$('html').addClass('lt-width-xlarge'); // 20161031
		}
	});
}


/** ◇◆ 주메뉴활성동작2. 20160908~20171020. 20180105. MoonYoungShin.
 * Use) makeActive2ClickHover2('#tnb1');
 * makeActive2ClickHover2('#tnb1', {activeThey: 'all'}); // 데스크탑 1차메뉴 li 모두 .over 만듦
 * makeActive2ClickHover2('#tnb1', {onFilter: '.m1'}); // 1차메뉴 li.m1.on 만듦
 * 모바일 (()) 데스크탑('.width-xlarge')
 * li 이벤트 'focusin mouseenter' 하면 .over 만듦
 * 모바일: 1차~2차~4차메뉴 클릭하면 링크 이동 없이 하위메뉴 펼침.
 * 데스크탑: 1~3차메뉴 클릭하면 모두 링크 이동. 메뉴 호버하면 하위메뉴 펼침.
 * 데스크탑. setTimeout 하면 마우스 빠른 동작 결함 발생하니 CSS transition 이용바람.
 * Task) To Advance.
 * Task) 2차~ 펼치기 전에 최대 높이 계산
 */
function makeActive2ClickHover2(selector, options){
	var $this = $(selector);
	if(!$this) return false;
	var timer = null; // 타이머 초기화위해 필요
	var config = {
		onFilter : null, // 최초활성 선택자. 예) '.m1'
		activeThey : 'one', // 데스크탑 활성옵션.  one: 해당메뉴 | all: 모든메뉴
		onToggle: true
	};
	$.extend(config, options);

	$this.$d1 = $('div.d1', $this);
	$this.$d2 = $('div.d2', $this);
	$this.$m = $('li', $this);
	$this.$a = $('li>a[href]', $this);
	$this.$close = $('.b3.close', $this); // 2차~ 펼친거 닫기

	$('div.d1 a+div', $this).prev().parent().addClass('hasSub');

	if(config.onFilter){
		$this.$m.removeClass('on').filter(config.onFilter).addClass('on');
	}

	$this.$a.off(); // 20170227. 함수 2번 호출하면 아래 토글 동작이 2번 실행되는 결함 해결

	// 앵커 클릭
	$this.$a.on('click', function(){ // a[href]
		if($(this).parent().is('.on')){ // 토글
			if( config.onToggle ){
				$(this).parent().removeClass('on');
			}
		}else{
			$(this).parent().siblings().removeClass('on').end().addClass('on');
		}
		// 링크 이동 return | 이동 없음 return false
		if($('html').is('.width-xlarge')){ // 데스크탑은 모두 링크로 이동
			return;
		}else{
			if($(this).next('div[class*=d]').length > 0){ // 하위 메뉴 있으면
				return false;
			}else{ // 하위 메뉴 없으면
				return;
			}
		}
	});

	/** ◇◆ 데스크탑.주메뉴.
	 * CSS 속성 만으로는 키보드 운용 안되어 만듦.
	 * 키보드운용 [IE11]OK!
	 */

	//$this.$m.off(); // ☆ 이거하면 다른 곳 스크립트에서 추가한 바인딩도 제거된다.

	// 메뉴 전체 초점 호버 동작
	$this.$d1.on('focusin mouseenter', function(){
		$(this).addClass('over');
	}).on('focusout mouseleave', function(){
		$(this).removeClass('over');
	});

	// 메뉴1차 초점 호버 동작
	$this.$m.on('focusin mouseenter', function(){
		var $m = $(this);
		if( config.activeThey == 'one' ){ // 해당메뉴 하나만 오버
			$m.addClass('over').siblings().removeClass('over');
		}else if( config.activeThey == 'all' ){ // 모든메뉴 오버
			$m.siblings().addBack().addClass('over');
		}
	}).on('focusout mouseleave', function(){
		var $m = $(this);
		$m.siblings().addBack().removeClass('over');
		$('.over', $m).removeClass('over'); // 모든 자손 .over 제거
	});

	// 키보드 접근성
	$this.$a.on('focusin', function(){
		var $m = $(this).parent();
		if( config.activeThey == 'one' ){
			$m.addClass('over').siblings().removeClass('over'); // 해당메뉴활성
		}else if( config.activeThey == 'all' ){
			$m.siblings().addBack().addClass('over'); // 모든메뉴활성
		}
		$m.closest('.d1').addClass('over');
	}).on('focusout', function(){
		var $m = $(this).parent();
		if( $m.parent().parent().is('.d1') ){ // 1차메뉴일 때만
			$m.siblings().addBack().removeClass('over');
			$('.over', $m).removeClass('over');
			$m.closest('.d1').removeClass('over');
		}
	});

	// 2차~ 펼친거 닫기
	$this.$close.on('click', function(){
		// (OK)[CR][FF][OP] 초점은 안보이지만 탭누르면 다음 요소로 이동한다.
		// (Bug)[IE11] 초점을 잃고 웹페이지 처음으로 되돌아간다.
		if( $('html').is('[class*=" IE"]') ){ // [IE7~11] 결함 해결
			var $next = $(this).closest('div.d2').parent('li').next();
			if( !!$next.length && !($next.css('display') == 'none') ){ // 다음 li 가 존재하고 안보이지 않는다면
				$next.attr({tabindex: '0'}).focus().attr({tabindex: ''});
			}else{
				$('#anb1 a').focus(); // 주메뉴 다음 콘텐츠에 초점.
			}
		}
		$(this).blur(); // 이거만해도 메뉴 li 이벤트 focusout 발생한다. 초점 보내기 전에 이거부터 하면 다시 펼쳐지니 주의!
	});

}


/** ◇◆ 메뉴활성. 20150528~ 20170719. 20171108. MoonYoungShin.
 * Use1) makeActive('#tabs1', '.m1');
 * 20170719. makeActive('#tabs1', '.m1', 'toggle'); // 토글 기능 추가. 단, makeMenu2Dropdown() 일 때는 토글 안되는데.. 기능적으로 맞음.
 * 20170707. isLocationHash 추가. 단, location.hash 와 동일한 메뉴가 2개 이상 있으면 최초 활성 결함 발생. (예) #? 와  li>a[href='#?']
 * 20161122. 주메뉴 등에만 사용되던 코드 제거.
 * Task) To Advance.
 */
function makeActive(selector, onFilter, option){
	var $this = $(selector);
		$this.$m = $('li', $this);
		$this.$a = $('li>a[href]', $this);
	var isLocationHash = !!$('a[href$="'+ location.hash +'"]', $this).length;
	var option = option;

	$this.$a.on('click', function(){
		if($(this).parent().is('.on')){
			if( option == 'toggle' ){ // 토글 할거
				$(this).parent().removeClass('on');
			}
		}else{
			$(this).parent().addClass('on').siblings().removeClass('on');
		}
		//return false; // fragment link 도 링크 위치로 이동하도록 주석처리함.
	});

	if(onFilter){
		$this.$m.removeClass('on').filter(onFilter).addClass('on'); // 최초 활성
	}

	if( isLocationHash ){ // 20170718.
		$this.$aa = $('a[href$="'+ location.hash +'"]', $this);
		// 최초 활성 변경
		//$this.$aa.parent().siblings().removeClass('on').end().addClass('on'); // 이러면 안돼요.
		$this.$aa.parent().addClass('on').siblings().removeClass('on');
	}
}


/** ◇◆ 메뉴href콘텐츠만보이기. 20150330~ 20161103. 20170707. MoonYoungShin.
 * Use1) makeActive() 와 함께 사용하면 탭과 유사하다.
   makeShow('#tabs1', '#tabs1pane1');
   makeActive('#tabs1', '.m1');
 * Task) To Advance.
 * 20161103. 스크립트오류해결. jquery-1.12.4.min.js:2 Uncaught Error: Syntax error, unrecognized expression: a[href$=#tabs1pane1](…)
 * 20170707. myHash 결함해결. 활성된 탭 위치로 화면 이동 gotohere
 */
function makeShow(selector, onHash){ // 주의!) selector 는 메뉴래퍼
	var $this = $(selector);
		$this.$m = $('li', $this);
		$this.$a = $('li>a[href]', $this);
	var myHash = "";
	var isLocationHash = !!$('a[href$="'+ location.hash +'"]', $this).length;
	var gotohere;

	$this.$a.on('click', function(){
		$($(this).attr('href')).show().siblings().hide();
		return false; // fragment link 도 링크 위치로 이동하려면 주석처리함. 20151126.
	});

	// isLocationHash 20170707. //myHash = location.hash || onHash;
	if( isLocationHash ){
		myHash = location.hash;
	}else{
		myHash = onHash;
	}
	//console.log(myHash);
	$this.$aa = $('a[href$="'+ myHash +'"]', $this);
	$this.$aa.triggerHandler('click'); // 20161103
	if( isLocationHash ){
		gotohere = $this.$aa.offset().top;
		smoothScrollTop( gotohere, setoff ); // setoff 단위 없이 정숫값
	}
}


/** ◇◆ 메뉴오버. 20171201. MoonYoungShin.
 * Use1) makeOver('#snb1', '.m1');
 * Task) To Advance.
 */
function makeOver(selector, onFilter, option){
	var $this = $(selector);
		$this.$m = $('li', $this);
		$this.$a = $('li>a[href]', $this);
	var isLocationHash = !!$('a[href$="'+ location.hash +'"]', $this).length;
	var option = option;

	// 오버는 li 이벤트로 한다
	$this.$m.on('focusin mouseenter', function(){
		$(this).addClass('over');
	}).on('focusout mouseleave', function(){
		$(this).removeClass('over');
	});

	// 최초 활성
	if( onFilter ){
		$this.$m.removeClass('over').filter(onFilter).addClass('over');
	}
	if( isLocationHash ){
		$this.$am = $('a[href$="'+ location.hash +'"]', $this).closest('li');
		// 최초 활성 변경
		$this.$am.addClass('over').siblings().removeClass('over');
	}
}


/** ◇◆ 만들기모바일스크롤바.20150129.MoonYoungShin.
 * Need) iScroll v5.1.1 "http://iscrolljs.com/"
 * Use1) makeMobileScrollbars('html.Mobile #timetable1cont'); // 아이디 선택자를 전달하라.
 */
var makeMobileScrollbars = function(selector){
	if($(selector).length == 0) return false;
	$(selector).css({position: 'relative', overflow: 'hidden'})
		.wrapInner('<div class="scroller" style="padding-bottom:1em;"></div>'); // 밑패딩을 줘야 안잘리요.
	var myScroll = new IScroll(selector, {
		scrollbars: true
	});
};


/** ◇◆ scrollTouch.20140515~ 20150819. 20171211.MoonYoungShin. 스크롤터치.모바일+데스크탑.멀티
 * [CR][AA][IE11,10]
 * Need) ★ iScroll v5.1.1 "http://iscrolljs.com/"
 * [~IE8] iScroll 불가하니.. 콘솔 오류 수정OK! )) lib.css ) .scroll1wrap1all1{overflow:auto;}
 * Use0) jQscrollTouch(); // 기본 실행. Mobile 만 = jQscrollTouch('.scroll1wrap'); = jQscrollTouch('.scroll1wrap', {setDesktop: false});
 * Use1) jQscrollTouch('.scroll1wrap1all1', {setDesktop: true}); // Desktop 포함
 * 스크롤 트랙 클릭 동작 OK
 * Task1) 키보드 좌우 조작하면 초점 콘텐츠만 스크롤
 */
function jQscrollTouch(scrollWrapClass, options){
	var $this = $(scrollWrapClass = scrollWrapClass || '.scroll1wrap'); // 스크롤 뷰래퍼
	if(!$this) return false;
	var config={
		contSelector: '>*:first', // 스크롤 콘텐츠. 뷰영역 자식이 여럿이면 .scroll1cont 로 묶어야 한다.
		setDesktop: false, // 데스크톱 적용여부. 안한다, true: 한다.
		maxWidthNone: '>*', // 최대폭제한제거. '>*': 자식, ' *': 자손..
		that: 0 // 예비
	};
	$.extend(config,options);
	var scrollWrapName = scrollWrapClass.replace(/\./, ''); // 첫문자 제거 ( . 또는 # 등..)
	if($('html').hasClass('Desktop') && !config.setDesktop){ // setDesktop = false 면 스크롤 생성 막음.
		$this.removeClass(scrollWrapName);
		return false;
	}
	if($('html').hasClass('lteIE8')) return false; // [~IE8] iScroll 실행 전에 중단!
	$this.each(function(index){ //
		var $this = $(this);
		$(window).on('load', function(){ // 갤2에서 표 우측끝 안보이는 문제 해결.
			$this.$cont = $(config.contSelector, $this);
			// 스크롤 영역 자식이 둘 이상일 때 .scroll1cont 로 묶어서 너비를 내부 최대크기로 만든다.
			$this.css({position: 'absolute'});
			$(config.maxWidthNone, $this.$cont).css({'max-width': 'none'}); // 자식들 너비 제한 두지말고..☆자손 고려 필요!
			$this.$cont.css({width: $this.$cont.outerWidth(true) + 'px'});
			$this.$cont.width = $this.$cont.outerWidth(true);
			$this.css({position: ''});
			// 각각 스크롤 위해 id 부여해서 생성자 함수 IScroll 실행
			$this.attr({id: scrollWrapName + index}); // id 부여 scroll1wrap0, scroll1wrap1, ..
			$this.myScroll = new IScroll( '#'+$this.attr('id'), { // !!required: ★ iScroll
				eventPassthrough: true,
				scrollX: true,
				scrollY: true, /* 20171211 (( false */
				preventDefault: false,
				scrollbars: true,
				mouseWheel: true,
				interactiveScrollbars: true,
				shrinkScrollbars: 'scale',
				fadeScrollbars: false,
				keyBindings: { // 가로스크롤 left, right 키만 반응함.
					pageUp: 33,
					pageDown: 34,
					end: 35,
					home: 36,
					left: 37,
					up: 38,
					right: 39,
					down: 40
				}
			});
			$this.$scrollbarFace = $('.iScrollIndicator', $this);
			$this.$scrollbarTrack = $('.iScrollLoneScrollbar', $this);
			$this.$scrollbarFace.attr({'tabindex': '0'});
			// 스크롤바 마우스 핸들링
			var maybeConflict = false;
			$this.$scrollbarTrack.on('mouseup', function(e){
				$this.$scrollbarFace.on('mouseup', function(e){
					maybeConflict = true;
				});
				if(!maybeConflict){ // 스크롤바에서는 이벤트 발생안했다면
					var a={
						scrollToX : 0, // 이동할지점
						faceWidth : $this.$scrollbarFace.width(), // 스크롤바폭
						trackWidth : $this.$scrollbarTrack.width() // 스크롤트랙폭
					};
					a.scrollToX = - ((e.offsetX - (a.faceWidth / 2)) / a.trackWidth * $this.$cont.width);
					if(a.scrollToX > 0){
						a.scrollToX = 0;
					}else if(a.scrollToX < a.trackWidth - $this.$cont.width){
						a.scrollToX = a.trackWidth - $this.$cont.width;
					}
					$this.myScroll.scrollTo(a.scrollToX, 0, 200, IScroll.utils.ease.circular);
				}else{
					maybeConflict = false; // 초기화하고 아래 동작 수행
					// iScroll 플러그인 동작 수행한다.
				}
			});
		});
		// 스크롤바 필요할 때만 보이기.
		$(window).on('load resize', function(){
			if($this.width() > $this.children().eq(0).width()){ // 뷰영역이 콘텐츠 보다 크면
				$this.$scrollbarTrack.hide();
				$this.removeClass('myscroll');
			}else{
				$this.$scrollbarTrack.show();
				$this.addClass('myscroll'); // 스크롤바 공간확보
			}
		});
	});
}


/** ◇◆ 오픈레이어팝업2. 20150630.MoonYoungshin. 키보드OK!
 * Use1) jQopenLayer2('.calendar3', 'open_layer1pop', 'layer1pop');
 * Task) To Advance.
 */
function jQopenLayer2(container, opener, layerpop){
	var $this = $(container);
	$this.$opener = (opener)? $(opener): $('.open_layer1pop'); // 열기버튼
	$this.$layerpop = (layerpop)? $(layerpop): $('.layer1pop'); // 레이어팝업
	$this.$opener.on('click', function(){
		$this.$layerpop.removeClass('on').hide();
		$(this).parent().append($($(this).attr('href'))); // 레이어팝업을 열기버튼 부모의 막내로 이동
		$($(this).attr('href')).addClass('on').show();
		return false;
	});
	$('.close', $this.$layerpop).on('click', function(){ // 닫기
		$this.$layerpop.removeClass('on').hide();
		return false;
	});
}


/** ◇◆ jQchangePic3. v0.3. 20140829. 20160616. 20161129. MoonYoungshin. 뷰섬네일.
 * Use) jQchangePic3('click', '.pic1gallery3', '.m', 1, '.pt1');
 * 이벤트축소판대상할당온제어.이전다음. 제목 추가.
 * resize 제거하여 간단히
 * 20160513. 활성 순번에 따라 대응하는 대상 $foll1cn 추가
 * 20160616. [~IE8]bugFix) 이전다음에서 .bsContain 생성 img 도 섬네일로 바꿔지는 결함 )))  $('img', $this.$c) 을 $('>.p1>img', $this.$c) 로 수정하여 해결.
 * 20161129. 고도화. 빈 섬네일 코드 계산. 변수 미리 정리. 일반변수와 $객체 분리.
 * 섬네일 나열형
 */
function jQchangePic3(e, selector, m, n, c){
	var act_e = (e)? e: 'click', // 동작 이벤트
		str_m = (m)? (selector + ' ' + m): (selector + ' .m'), // 메뉴 선택자
		str_c = (c)? $(selector + ' ' + c): (selector + ' .c'), // 콘텐츠 선택자
		onnum = (n)? n: 0, // 활성순번 : 0 은 모두 비활성
		str_mimg = '>*>img'; // 메뉴>*>섬네일이미지
	var $this = $(selector);
		$this.$m = $(str_m); // 메뉴
		$this.$c = $(str_c); // 대상 (콘텐츠가 변하는거)
		$this.$img = $('>.p1>img', $this.$c); // 대상 이미지
		$this.$t1 = $('.t1', $this.$c); // 대상 이미지 제목
		$this.$bprev = $('.mControl .prev', $this); // 이전
		$this.$bnext = $('.mControl .next', $this); // 다음
	// 20160513. 대상 (활성 순번에 따라 대응하는거)
	var $foll1cn = $this.parent().find('.foll1pic1gallery1').children();
	var $foll2cn = $this.parent().find('.foll2pic1gallery1').children();

	// 링크주소 있는 앵커만 동작
	$('a[href]', $this.$m).on(act_e, function(e){
		e.preventDefault();
		$this.$m.removeClass('on');
		$(this).parent().addClass('on');
		$this.$img.attr({ // 20160616
			src: $(this).attr('href'),
			alt: $(str_mimg, this).attr('alt')
		});
		//$this.$t1.html($('.t1', this).text()); // 섬네일도 텍스트 제목
		$this.$t1.text($this.$img.attr('alt')); // 제목
		//onnum = $(this).parent().index()+1; // 20161129. index() 는 조건에 맞지 않는 형제도 포함된 인덱스이므로 아래 코드 수정함.
		onnum = $this.$m.filter('.on').index(str_m)+1;
		//console.log(onnum);
		controlAdvanced();
		$foll1cn.hide().eq($(this).parent().index()).show();
		$foll2cn.hide().eq($(this).parent().index()).show();
	});
	$this.$bprev.on('click', function(e){e.preventDefault(); // 이전
		onnum--;
		if(onnum <= 0) onnum = onnum + $this.$m.length;
		$this.$m.eq(onnum-1).find('a').triggerHandler(act_e);
		controlAdvanced();
	});
	$this.$bnext.on('click', function(e){e.preventDefault(); // 다음
		onnum++;
		if(onnum > $this.$m.length) onnum -= $this.$m.length;
		$this.$m.eq(onnum-1).find('a').triggerHandler(act_e);
		controlAdvanced();
	});
	$this.$m.eq(onnum-1).find('a').triggerHandler(act_e); // 초기실행

	function controlAdvanced(){ // 이전 다음 점멸
		$this.onIdx = $this.$m.filter('.on').index(str_m); // 20161129. str_m 선택자 해당되는 형제 중 인덱스.
		if( $this.onIdx == 0){
			$this.$bprev.hide();
		}else{
			$this.$bprev.show();
		}
		if( $this.onIdx == $this.$m.length-1){
			$this.$bnext.hide();
		}else{
			$this.$bnext.show();
		}
	}
}


/** ◇◆ jQchangePic4. v0.4. 20171109. 20171215. 20180104. MoonYoungshin. 뷰섬네일.
 * Use) jQchangePic4('click', '.pic1gallery6', '.m', 1, '.pt1', '.ms');
 * 제스처 ☆ hammer.min.js 필요!
 * 섬네일 클릭(옵션)하면 대상(대표) 이미지 소스 및 캡션 제목 전달.
 * 섬네일 이미지풀 고도화. 가로세로중앙정렬.
 * 아이템 현재/전체 표시.
 * 섬네일 페이징 이전다음 아이템. 끝 다음은 반대 끝으로 보냄.
 * 활성 섬네일 페이지로 자동 이동. ((jQchangePic4 (2014) 결함개선!)
 * 섬네일 이전쪽 다음쪽.
 * Task) 로딩중~
 */
function jQchangePic4(e, selector, m, n, c, ms){
	var act_e = (e)? e: 'click', // 동작 이벤트
		str_m = (m)? (selector + ' ' + m): (selector + ' .m'), // 메뉴 선택자
		str_c = (c)? $(selector + ' ' + c): (selector + ' .c'), // 콘텐츠 선택자
		str_ms = (ms)? $(selector + ' ' + ms): (selector + ' .ms'), // 메뉴래퍼 선택자. 폭 계산위해
		str_mimg = '>*>img', // 메뉴>*>섬네일이미지
		str_alt = '',
		onnum = (n)? n: 0, // 활성순번 : 0 은 모두 비활성
		totalnum = 0,
		foo;
	var $this = $(selector);
		$this.$m = $(str_m); // 메뉴
		$this.$ms = $(str_ms); // 메뉴래퍼 = $this.$m.parent()
		$this.$c = $(str_c); // 대상 (콘텐츠가 변하는거)
		$this.$img = $('>.p1>img', $this.$c); // 대상 이미지
		$this.$ct = $('.t1', $this.$c); // 대상 이미지 캡션 제목
		$this.$bprev = $('.mControl .prev', $this); // 이전 아이템
		$this.$bnext = $('.mControl .next', $this); // 다음 아이템
		$this.$bprevp = $('.mControl .prevp', $this); // 이전쪽
		$this.$bnextp = $('.mControl .nextp', $this); // 다음쪽

		$this.$itemOn = $('.mItem .on', $this); // 현재 아이템 순번
		$this.$itemTotal = $('.mItem .total', $this); // 전체 아이템 수

		$this.$pageOn = $('.mPage .on', $this); // 현재 아이템 순번
		$this.$pageTotal = $('.mPage .total', $this); // 전체 아이템 수

		$this.$loading = $('.loading1', $this); // 로딩중

		$this.$mView = $('.mView', $this); // = $this.$m.parent().parent().parent()
		$this.$mCont = $('.mCont', $this); // = $this.$m.parent().parent()
		$this.$mCont.css({ 'width': $this.$ms.width()+'px' }); // width:10000px 값을 내용 폭으로 변경
		$this.cLeft = 0; // 내용물 묶음 좌단 위치값

	totalnum = $this.$m.length;

	// href 속성 있는 앵커만 동작
	$('a[href]', $this.$m).on(act_e, function(e){ // 순번(섬네일) 클릭
		e.preventDefault();
		$this.$m.removeClass('on');
		$(this).parent().addClass('on');

		str_alt = $(str_mimg, this).attr('alt') || $(this).attr('title'); // 20171214

		$this.$img.attr({
			src: $(this).attr('href'),
			alt: str_alt
		});
		$this.$ct.html( str_alt );

		onnum = $this.$m.filter('.on').index(str_m)+1;

		controlAdvanced();
	});

	$this.doDirect = function(){ // 직접 동작
		$this.$loading.fadeIn();
		$this.$m.eq(onnum-1).find('a').triggerHandler(act_e);
	}

	$this.doPrev = function(){ // 이전 동작
		onnum--;
		if(onnum <= 0) onnum = onnum + totalnum; // 맨뒤 아이템
		$this.doDirect();
	}

	$this.doNext = function(){ // 다음 동작
		onnum++;
		if(onnum > totalnum) onnum -= totalnum; // 맨앞 아이템
		$this.doDirect();
	}

	$this.doPrevP = function(){ // 이전쪽 동작
		//console.log($this.onPage +'  '+ $this.ipp + '   ' + $this.totalPages);
		$this.onPage--;
		if($this.onPage <= 0) $this.onPage = $this.onPage + $this.totalPages; // 맨뒤쪽
		onnum = ($this.onPage - 1) * $this.ipp + 1;
		$this.doDirect();
	}

	$this.doNextP = function(){ // 다음쪽 동작
		$this.onPage++;
		if($this.onPage > $this.totalPages) $this.onPage -= $this.totalPages; // 맨앞쪽
		onnum = ($this.onPage - 1) * $this.ipp + 1;
		$this.doDirect();
	}

	$this.$bprev.on('click', function(e){ // 이전 클릭
		e.preventDefault();
		$this.doPrev();
	});

	$this.$bnext.on('click', function(e){ // 다음 클릭
		e.preventDefault();
		$this.doNext();
	});

	$this.$bprevp.on('click', function(e){ // 이전쪽 클릭
		e.preventDefault();
		$this.doPrevP();
	});

	$this.$bnextp.on('click', function(e){ // 다음쪽 클릭
		e.preventDefault();
		$this.doNextP();
	});

	$this.doDirect(); // 초기실행

	// 섬네일 크기 맞춤 전 img{width:auto;max-width:100%;height:auto;max-height:100%;}
	$('li a .f1 img', $this).css({visibility: 'hidden'}); // 히든 (width, height 계산위해)
	$('li.on .deco', $this).hide(); // display:none;

	$(window).on('load resize', function(){

		// 섬네일 크기 이미지풀 (cover) 맞춤
		$('li a .f1', $this).each(function(){
			$this.inHeight = $(this).innerHeight();
			$this.inWidth = $(this).innerWidth();
			if($('img', this).width() < $this.inWidth){ // .f1 종횡비보다 키 큰 img
				$('img', this).css({
					width: '100%',
					maxWidth: '100%',
					height: 'auto',
					maxHeight: 'none'
				});
			}
			if($('img', this).height() < $this.inHeight){ // .f1 종횡비보다 폭 큰 img
				$('img', this).css({
					width: 'auto',
					maxWidth: 'none',
					height: '100%',
					maxHeight: '100%'
				});
			}
			$('img', this).css({
				marginLeft: function(){ // 가로중앙정렬
					return ($(this).parent().width() - $(this).width())/2 + 'px';
				},
				marginTop: function(){ // 세로중앙정렬
					return ($(this).parent().height() - $(this).height())/2 + 'px';
				},
				visibility: 'visible'
			});
			$('li.on .deco', $this).show();
		});

		// 제어 고도화
		controlAdvanced();

	});

	// 제어 고도화
	function controlAdvanced(){

		$this.$img.on('load', function(){
			$this.$loading.fadeOut();
		});

		// 활성 메뉴 아이템 보이게 위치 이동
		if(!$this.$m.filter('.on').length) return false; // 활성 없을 때 에러 방지

		$this.vw = Math.round( $this.$mView.innerWidth() ); // 메뉴뷰 너비.
		$this.cw = Math.round( $this.$mCont.outerWidth() ); // 메뉴 묶음 너비 (불필요함)
		$this.ccw = Math.round( $this.$m.outerWidth(true) ); // 내용물 1개 너비 margin 포함
		$this.ipp = Math.floor( $this.vw / $this.ccw ); // 페이지당 아이템 수
		if( $this.ipp == 0 ) $this.ipp = 1;

		$this.totalPages = Math.ceil( totalnum / $this.ipp );  // 총 페이지 수

		// ☆ */페이지 너비. $this.vw 보다 작거나 같다.
		$this.pw = $this.ccw * $this.ipp;

		// 활성 순번으로 활성 페이지 산정
		$this.onPage = Math.ceil( onnum / $this.ipp );

		var onLeft = parseInt($this.$m.filter('.on').position().left);

		//console.log( onnum +'   '+ onLeft +'   '+ $this.ccw +'   '+ $this.vw +'   '+ $this.pw +'   '+ $this.onPage );

		// 섬네일 활성 페이지 보이기
		if($this.onPage  > 1){
			$this.cLeft = (-1) * $this.ipp * ($this.onPage  - 1) * $this.ccw;
		}else{
			$this.cLeft = 0;
		}
		$this.$mCont.css({ 'left': $this.cLeft + 'px' });

		// 현재/전체 아이템
		$this.$itemOn.text( onnum );
		$this.$itemTotal.text( totalnum );

		// 현재/전체 아이템
		$this.$pageOn.text( $this.onPage );
		$this.$pageTotal.text( $this.totalPages );

		// 이전 다음 아이템 버튼 점멸
		if( onnum == 1 ){
			$this.$bprev.addClass('off');
		}else{
			$this.$bprev.removeClass('off');
		}
		if( onnum == totalnum ){
			$this.$bnext.addClass('off');
		}else{
			$this.$bnext.removeClass('off');
		}

		// 이전 다음 쪽 버튼 점멸
		if( $this.onPage == 1 ){
			$this.$bprevp.addClass('off');
		}else{
			$this.$bprevp.removeClass('off');
		}
		if( $this.onPage == $this.totalPages ){
			$this.$bnextp.addClass('off');
		}else{
			$this.$bnextp.removeClass('off');
		}

	}

	// 제스처 ☆ hammer.min.js 필요!
	var el = $this[0]; //console.log(el);
	var mc = new Hammer(el);
	mc.on("swipeleft", function(e) {
		$this.doNext();
	});
	mc.on("swiperight", function(e) {
		$this.doPrev();
	});

}


/** ◇◆ 탭콘텐츠2. 20150406. 20170718. MoonYoungshin.
 * Use) jQtabCont2('click', '#bbs1', '.tab', 1, '.cont');
 // 20170718 초기활성 안하려면..
	jQtabCont2('click', '#tab1cont1', '.tab', , '.cont'); // 매개변수 n 을 비워두거나..
	'', 0 또는 9999 처럼 없는 순번을 넣어주면 된다.
	단, '0' 은 $this.n = 0 값으로 할당되어.. 맨 마지막 요소인 $this.$m.eq(-1) 가 활성된다.
 * 20140930 버전과 매개변수 사용 동일하나 코드 완전히 수정함.
 *	if(!!$(this).attr('href')) return false; 코드 제거. 다른 페이지 링크일 때 문법에러 발견되어.
 * (탭-내용-탭-내용), (탭-탭-내용-내용) 둘다 가능.
 * 이벤트 선택, 활성순번 선택 가능.
 * 외부 링크 결함 해결. 이빠진 순번 결함 해결
 * Task) Advance. OOP, JSON, ..
 */
function jQtabCont2(e, selector, m, n, c){
	var $this = $(selector);
	$this.e = (e)? e: 'click'; // 이벤트
	$this.n = (n)? n: 9999; // 초기실행용 활성순번 n 이 1 이면 첫탭, 매개변수 n 이 0 이면 9999(없는 순번) 되어 활성없음.
	$this.$m = (m)? $(m, $this): $('.m', $this); // 메뉴(탭)
	$this.$c = (c)? $(c, $this): $('.c', $this); // 대상(패널)
	$('a', $this.$m).on($this.e, function(e){
		if($(this).is('[href^=#]')){ // 현재페이지 링크라면
			$this.$m.removeClass('on');
			$(this).parent().addClass('on');
			$this.$c.removeClass('on').hide();
			$this.$c.filter($(this).attr('href')).addClass('on').show();
			 return false;
		}else{ // 다른페이지 링크라면
			 return;
		}
	});
	//console.log($this.n-1);
	$this.$m.eq($this.n-1).find('a').triggerHandler($this.e); // 초기실행
}


/* ◇◆ 메뉴균등폭만들기. 20150529~ 20170502. 20170515. MoonYoungshin.
 * 웹페이지 로딩 및 리사이징 시 실행
 * 20151019. 1줄 꽉채우는 로직 바르게 수정.
 * [IE7]down Bug 성능개선OK!
 * 20170310. 탭콘텐츠처럼 감췄다가 보이는 거는 탭 클릭할 때 지연 호출한다.
   setTimeout(function(){ makeEvenWidthMenus(); }, 0); // (ex) tp2tour2view1.jsp
 * 20170515. mnum 옵션값 추가
 */
function makeEvenWidthMenus(mnum){
	var $this = $('.mj-menu-even-width>ul'); // 20151201. >* 를 ul 로 한정
	var mnum = mnum || 10; // 20170515. +10 매직넘버추가. 줄바뀜 결함 해결.
	var doit = function(){
		//$this.css({'opacity': '0'}); // 이래도 css 정의만 못하다. 살짝 보였다 사라짐.
		//setTimeout(function(){ // 20161103. [IE8]먹통 개선위해 주석처리.
			$this.each(function(){
				var $this = $(this);
				var $that = $('>li>a', $this);
				var v = {
					mwidth: 0, // 메뉴너비최대값
					colnum: 0, // 컬럼수
					bar: 0
				};
				$this.removeClass(); // class 를 모두 지운다.
				$that.each(function(){
					var $that = $(this);
					$that.realWidth = $that.outerWidth(true); // padding, scrollbar, border, margin 포함
					$that.css({
						'position': 'absolute',
						'white-space': 'nowrap'
					});
					//console.log( $that.parent().index()+1 +'   '+ $that.realWidth +'   '+ v.mwidth );
					if ( $that.realWidth > v.mwidth){
						v.mwidth = $that.realWidth + mnum; // 20170502.
					}
					$that.css({
						'position': 'relative',
						'white-space': 'normal'
					});
				});
				v.colnum = parseInt($this.parent().width() / v.mwidth);
				v.colnum = (v.colnum)? v.colnum: 1;
				$this.addClass('col-' + v.colnum);
				if( $that.length < v.colnum ){ // 20151019. li 수가 계산된 컬럼 수보다 적으면
					$this.removeClass('col-' + v.colnum);
					$this.addClass('col-' + $that.length); // 1줄 꽉채운다.
				}
			});
			$this.animate({'opacity': '1'}, 0);
		//}, 0); // delay
	};
	doit(); // 20160125. 다른 이벤트로 실행가능하게 (탭클릭순간,..)
	$(window).on('load resize', function(e){
		switch(e.type){
		case 'load':
			//if (navigator.userAgent.indexOf("MSIE 7.") == -1){ // not[IE7]
			//	doit(); // 20160125
			//}
			break;
		case 'resize':
			doit();
			break;
		default:
		}
	});
}


/* ◇◆ 만들기메뉴드롭다운. v.20151201~.20160104. 20170217. MoonYoungshin.
 * Even Width Menus ))) Dropdown Menu
 * Use) makeMenu2Dropdown();
 * DOM 생성 시간차 최소화하려면 마크업 바로 아래 실행!
 * makeCnb1() v.20140916 복제.변경.고도화
 * 1) Dropdown Menu 동작 1가지만 구현.
 * 2) Tab Prev Next 기능은 없다.
 * Task) [IE7]?
 */
function makeMenu2Dropdown(ss, os){ // subject selector, object selector
	var $this = (ss)? $(ss): $('.mj-menu2dropdown'); // $('.mj-menu2dropdown')
	var v = { // 마크업 추가
		note: '<div class="note"><i class="ic1"></i><span class="t1">선택하세요</span></div>',
		toggle: '<button type="button" class="toggle"><span class="t1">메뉴 여닫기</span><i class="ic1"></i></button>',
		foo: ''
	};
	$this.each(function(){
		var $this = $(this);
		var $that = (os)? $(os): $('ul', $this); // 20170217. 아래 if 안에서 여기로 이동.
		if( !$('.toggle', $this).length ){ // Dropdown 으로 만든 적이 없으면 (중복 실행 오류 방지)
			// 1) Dropdown Menu
			$this.prepend(v.toggle);
			$this.prepend(v.note);
			$('li', $this).each(function(){ // 활성
				if($(this).is('.on')){
					$that.hide();
					$('.note>.t1', $this).html($(this).find('a').html());
				}
			});
			$('.toggle', $this).on('click', function(){ // 토글클릭
				if($that.is(':hidden')){
					$('.t1', this).text('메뉴 감추기');
					$that.slideDown(200, 'swing', function(){});
				}else{
					$('.t1', this).text('메뉴 보이기');
					$that.slideUp(200, 'swing', function(){});
				}
			});
		}
		$('li>a', $this).on('click', function(){ // 메뉴클릭.활성. 20160104.
			$(this).parent().addClass('on').siblings().removeClass('on');
			if($(this).parent().is('.on')){
				$that.hide();
				$('.note>.t1', $this).html($(this).html());
			}
		});
	});
}


/** ◇◆ make2Dropdown1PrevNext1. v.20150901 r.20160120. MoonYoungshin. 반응형멀티동작. 활성 없을 때 에러 방지
 * makeSnb1() 토대로 커스트마이징
 * Use) make2Dropdown1PrevNext1(); // make2Dropdown1PrevNext1('.dropdown1prevnext1', '.dropdown1prevnext1 ul'); 와 같다.
 * DOM 생성은 시간차 감지되므로 마크업 바로 아래 실행!
 * 2가지 동작 모두 구현. 1) Dropdown, 2) Inline Prev Next
 * Dropdown 동작 ))
 * Inline Prev Next 동작 ))
   ) 모든 아이템은 폭은 같지만 반응형이다. 1페이지당 아이템 수는 동일하다.
   ) 활성메뉴 보이도록 뷰 가로 중앙으로 이동
   ) 맨앞, 맨끝 인지 위해 탄력 동작 추가
   ) 뷰 우측 메뉴 잘리는 문제 해결 및 고도화
   ) 반응형 폭 달라지더라도 페이지 찾아가기..
 */
function make2Dropdown1PrevNext1(ss, os){ // subject selector, object selector
	var $this = (ss)? $(ss): $('.mj-dropdown1prevnext1');
	var $that = (os)? $(os): $('ul', $this);
	var $items = (os)? $(os): $('li', $that);
	var v = { // 마크업 추가
		note: '<div class="note"><i class="ic1 bsContain"></i><span class="t1">선택하세요</span></div>',
		toggleOpen: '<button type="button" class="toggle open"><span class="t1">메뉴 여닫기</span><i class="ic1 bsContain"></i></button>',
		mView: '<div class="mView"></div>',
		mCont: '<div class="mCont"></div>',
		b1prev: '<button type="button" class="b1 prev" title="이전 보기"><i class="ic1">&lsaquo;</i></button>',
		b1next: '<button type="button" class="b1 next" title="다음 보기"><i class="ic1">&rsaquo;</i></button>'
	};
	var timer;

	$(window).on('resize', function(){ // 반응형
		clearTimeout(timer);
		timer = setTimeout(function(){
			v.eq_first_item_active_page =  v.items_per_page * (v.active_page - 1);
			$this.mCont.stop().animate({'left': -1 * $items.eq(v.eq_first_item_active_page).position().left + 'px'}, 200, 'swing');
		}, 200);
	});

	// 1) Dropdown
	$this.prepend(v.note);
	$this.prepend(v.toggleOpen);
	$items.each(function(){
		if($(this).hasClass('on')){ // 활성 클래스
			$that.hide();
			$('.note', $this).html($(this).find('a').html());
		}
	});
	$('.toggle', $this).on('click', function(){
		$that.toggleClass('open');
		if($that.hasClass('open')){
			$(this).removeClass('open').addClass('close');
			$('.t1', this).text('메뉴 감추기');
			$that.slideDown(200, 'swing', function(){});
		}else{
			$(this).removeClass('close').addClass('open');
			$('.t1', this).text('메뉴 보이기');
			$that.slideUp(200, 'swing', function(){});
		}
	});

	// 2) Inline Prev Next
	$that.wrap(v.mCont);
	$this.mCont = $('.mCont', $this);
	$this.mCont.wrap(v.mView);
	$this.mView = $('.mView', $this);
	$this.prepend(v.b1next);
	$this.prepend(v.b1prev);
	v.move = 0; // 이동값
	v.itemsWidth = mathItemsWidth(); // 아이템 전체 너비
	v.items_per_page =  Math.round( $this.mView.width() / $items.outerWidth(true) ); // 페이지당 아이템수
	v.total_page =  Math.ceil( $items.length / v.items_per_page ); // 전체페이지
	v.active_page = Math.ceil( ($items.filter('.on').index() + 1) / v.items_per_page ); // 현재페이지
	//console.log(v.items_per_page +'  '+ $items.length +'  '+ v.total_page +'  '+ v.active_page +'  '+ $this.mView.width() +'  '+ $items.outerWidth(true));

	setTimeout(function(){ // 활성메뉴 보이도록 뷰 가로 중앙으로 이동
		if(!$('li.on', $this).length) return false; // 활성 없을 때 에러 방지
		var onLeft = $('li.on', $this).position().left;
		var onWidth = $('li.on', $this).width();
		if(onLeft + onWidth > $this.mView.width()){
			$this.mCont.stop().animate({'left': -1 * $('li.on', $this).position().left + ($this.mView.width() - onWidth)/2 + 'px'}, 600, 'swing');
		}
	}, 200);

	$('.b1.prev', $this).on('click', function(){ // 이전
		v.active_page--;
		v.active_page = (v.active_page >= 1)? v.active_page: 1;
		v.move = parseInt($this.mCont.position().left) + $this.mView.width(); // 뷰폭 가변이면 이벤트 시 계산
		$('li', $this).each(function(){
			if($(this).position().left > $this.mCont.position().left * (-1) - $this.mView.width()){
				v.move = $(this).position().left * (-1);
				return false;
			}
		});
		if( v.move < 0 ){ // 조건 <= 0 로 안한 이유? 위 each 함수에서 v.move 값이 + 되려고 하면 0 으로 만들기에..
			$this.mCont.stop().animate({'left': v.move + 'px'}, 200, 'swing');
		}else{ // 맨앞
			$this.mCont.stop().animate({'left': '20px'}, 200, 'swing', function(){
				$this.mCont.stop().animate({'left': '0'}, 50, 'swing');
			});
		}
	});
	$('.b1.next', $this).on('click', function(){ // 다음
		v.active_page++;
		v.active_page = (v.active_page <= v.total_page)? v.active_page: v.total_page;
		//v.move = parseInt($this.mCont.position().left) - $this.mView.width();
		v.move = $this.mCont.position().left - $this.mView.width(); // ☆이동값 계산. 소수점 오차 주의!
		$('li', $this).each(function(){ // 맨끝 요소가 잘려보일 때를 대비
			if($(this).position().left + $(this).width() > $this.mCont.position().left * (-1) + $this.mView.width()){
				v.move = $(this).position().left * (-1);
				return false;
			}
		});
		v.itemsWidth = mathItemsWidth(); // $that.width() 하지마요. (아이템의 종횡비 계산 위해 아주 큰 값으로 만들기도 하므로..)
		if( v.move > v.itemsWidth * (-1) ){
			$this.mCont.stop().animate({'left': v.move + 'px'}, 200, 'swing');
		}else{ // 맨끝
			v.move += $this.mView.width();
			$this.mCont.stop().animate({'left': v.move - 20 + 'px'}, 200, 'swing', function(){
				$this.mCont.stop().animate({'left': v.move + 'px'}, 50, 'swing');
			});
		}
	});
	function mathItemsWidth(){	// 아이템 전체 너비 계산
		var itemsWidth = - ($items.outerWidth(true) / 2); // ☆계상. 소수점 오차 피하려고 첫아이템폭 반만큼 적은 값으로 만듦. 100페이지 이상무!
		$items.each(function(){
			itemsWidth += $(this).outerWidth(true);
		});
		return itemsWidth;
	};
}


/** ◇◆ makeBarGraph. v.20150127~.20160804. 20180221. MoonYoungshin. 막대그래프 만들기
 */
var makeBarGraph = function(selector){
	var $this = $(selector);
	$this.$data = $('.data', $this); // 자료값
	$this.$scales = $('.scales', $this); // 눈금
	$this.$row = $('[class*="row"]', $this.$scales); // 눈금 Y축 칸
	$this.rowSum = $this.$row.length; // 눈금 Y축 칸수
	var maxData = 0; // 자료 최대값
	var maxScale = 0; // 최대 눈금값
	var digits = 0; // 눈금값 하위자리수 절삭용 자리수값 bar = 10, 100, 1000, ..
	$('.vv', $this.$data).each(function(){ // 최대값 구하기
		var bar = parseInt($(this).text().replace(',', ''));
		maxData = (bar > maxData) ? bar: maxData;
	});
	maxScale =  Math.round( maxData * ( $this.rowSum / ($this.rowSum - 1) ) ); // ☆ 자료 최대값이 최대눈금-1 쯤 되도록 최대 정수 눈금값을 만든다.
	if (maxScale < $this.rowSum){ // 눈금 Y축 칸수 이하 오류 발생 방지
		maxScale = $this.rowSum;
	}
	digits = Math.pow( 10, maxScale.toString().length - 1 ); // 자리수-1 이유? 다른 눈금값은 최대값을 다시 나눠서 앞2자리까지 표현된다.
	//console.log(maxScale + "     " + digits);
	maxScale = Math.ceil( maxScale / digits ) * digits; // Math.floor() 하지마라. 자료 보다 최대 눈금값이 작을 수 있다.
	//console.log(maxScale);
	$this.$row.each(function(){ // 눈금 값 넣기
		$this.yValue = maxScale * ( $this.rowSum - 1 - $(this).index() ) / $this.rowSum; // 최대-1 번째 눈금부터 0 까지 값을 넣는다.
		$this.yValue = Math.round( $this.yValue );
		$('.yv', this).text($this.yValue);
	});
	$('.dd', $this.$data).each(function(){ // 그래프 그리기
		$this.$data.dgv = ( parseInt($('.vv', this).text().replace(',', '')) / maxScale); // 최대 눈금값 대비 비율
		$(this).css({'height': ($this.$data.dgv *100) + '%'});
	});
};


/** ◇◆ goSelect1. v.20170315 r.20170315. MoonYoungshin. 선택상자 바로가기
 * option 별도 target 지정 가능하다. 지정 안하면 form 의 target 값을 따라간다.
 * Use)
	<form action="<%=sitePath%>/share/ui/gouri.jsp" target="_blank" class="dpib">
		<select name="uri" title="예산서 선택">
		<option value="">예산서 선택</option>
		<option value="/" data-target="_self">Homepage</option>
		<option value="http://google.com/" data-target="_blank">google.com</option>
		<option value="http://google.com/">data-target 값 없음</option>
		</select>
		<button type="submit" value="submit" onclick="goSelect1(this.form, this.form.target); return false;" class="button submit" title="선택한 콘텐츠로 이동 [새 창]">이동</button>
	</form>
 * Task) 옵션 타깃에 따라 전송 버튼 title 속성 변경
 */
function goSelect1(form, target){
	var $myOption = $(form.uri).find('option:selected');
	var defaultTarget = (target)? target: '_self';
	$myOption.uri = $myOption.val();
	$myOption.target = $myOption.data('target');
	console.log($myOption.target);
	if( !$myOption.target ){
		$myOption.target = defaultTarget;
	}
	if( !!$myOption.uri ){
		window.open($myOption.uri, $myOption.target);
	}else{
		alert('선택상자에서 항목을 선택하세요.');
		$(form.uri).focus();
	}
	return false;
}


/** ◇◆ 쿠키 | 20180125. MoonYoungshin.
 * [IE8+]OK
 * 20180125) [IE11] 브라우저 ) 도구 ) 인터넷옵션 ) 삭제 ) 실행 해도 쿠키 바로 제거 안되는 결함 주의!
 * Task) 쿠키 제거 delCookie();
 */

// 쿠키 설정
function setCookie(name, value, day) {
	var date = new Date();
	date.setDate(date.getDate() + day);
	var willCookie = '';
	willCookie += name + '=' + encodeURIComponent(value) + ';';
	willCookie += 'expires=' + date.toUTCString() + '';
	document.cookie = willCookie;
}

// 쿠키 추출
function getCookie(name) {
	var cookies = document.cookie.split('; '); // ((( ';'
	for (var i in cookies) {
		if (cookies[i].search(name) != -1) {
			return decodeURIComponent( cookies[i].replace(name + '=', '') );
		}
	}
}


/** ◇◆ 팝업레이어 | 20180125. MoonYoungshin.
 * Use) openPop('#pop20180122a1');
		<a href="#pop20180122a1" onclick="closePop('#pop20180122a1', 'checked', 7); return false;" class="b1"><span class="t1">일주일 안보이기</span></a>
		<a href="#pop20180122a1" onclick="closePop('#pop20180122a1', ''); return false;" class="b2"><span class="t1">닫기</span></a>
 */

// 팝업레이어 열기
function openPop(pop){
	var $pop = $(pop);
	//console.log( document.cookie );
	//console.log( 'a' +  getCookie(pop) + 'b' );
	if( getCookie(pop) != 'done' ){
		$pop.addClass('on');
	}
}

// 팝업레이어 닫기
function closePop(pop, check, days){
	var $pop = $(pop);
	var days = (days)? days: 1; // 쿠키유지일수
	if( check == 'checked' ) setCookie(pop, 'done', days);
	$pop.removeClass('on');
}