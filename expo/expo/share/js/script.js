/**
 * @File Name : script.js
 * @Description : Javascript jQuery Code (메소드와 함수 호출, 실행..)
 * @Modification Information
 * <pre>
 * 수정일 | 수정자 | 수정내용
 * 2017.05.15 | 문영신 | 최초 등록
 * 2017.06.08 | 문영신 | 요구반영. 결함개선. 고도화.
 * 2017.06.08 | 문영신 | addOnNav() 변경. 메인 or 기타 페이지에서 메뉴 1차 첫번째 활성
 * 2017.06.23 | 문영신 | 유사 사이트 공통 스크립트 중 인클루드 안되는거 가져옴. takeTnb1D2Height()
 * 2017.07.18 | 문영신 | jQtabCont2() 호출 제거. HTML 코드 밑에 직접 호출해야 한다.
 * 2017.07.20 | 문영신 | take2tnb1d2height() 개발 고도화.
 * 2017.11.22 | 문영신 | addOnNav() 현재위치펼침메뉴1차 추가
 * 2017.12.22 | 문영신 | 주메뉴 배경 $('#tnb1c>.bg') 클릭 추가
 * 2017.12.28 | 문영신 | body 태그에 CSS 클래스 추가
 * 2017.12.29 | 문영신 | addOnNav() 값 변경
 * </pre>
 * @author 웹표준화실 문영신
 * @since 2017.03.23
 *
 * @Copyright (C) IACTS.CO.KR All rights reserved.
 */

/*! All JavaScript jQuery v.20170323~ 20170517. 20170623 | by MoonYoungshin[myshin@naver.com] | MIT License
 * 20170323. ( jq.js (v.20170314) 를 script_base.js (즉시실행, 메소드, 함수 정의) 와 script.js (메소드, 함수 호출, 실행..) 으로 분리 )
 */

/* Table of contents )) ☆ 코드 추가되면.. 목차 갱신하세요.
************************************************************
jQuery(function($){
	메소드, 함수 호출
});
코드 변경이 필요한 메소드, 함수만 아래에 둔다.
Plugin --
	none
Function --
	addOnNav() 현재활성
************************************************************
 */


//jQuery.noConflict();
/* ◇◆ jQuery(document).ready(function($){}); ◇◆◇◆◇◆◇◆◇◆ */
jQuery(function($){


/* ◇◆ 메소드, 함수 호출 ◇◆◇◆◇◆
 * HTML 코드 바로 아래서 호출하면 성능 향상된다.
 */

$(function(){ // DOM ready 이벤트 함수 중첩하면 지연 실행한다 .

}); /* /$(function(){}); */


/* ◇◆ Compatible */

// Scroll
jQscrollTouch('.scroll1wrap', {setDesktop: false});
jQscrollTouch('.scroll1wrap1all1', {setDesktop: true});

// backgroundSize[IE6~8]Support. 20150703. 20161110
// * ☆required: jquery.backgroundSize.js
$(window).on('load', function(){ // 모든 이미지 로드 후 실행
	$('.bsContain').css({backgroundSize: 'contain'});
	$('.bsCover').css({backgroundSize: 'cover'});
});


/* ◇◆ UX 20170224~ 20171026. 20171222. ◇◆
 * 여기 말고 HTML 코드 밑에 호출한다.
 * 함수는 여기서 호출하더라도 재호출 가능하지만 두번 실행된다. )))
 * 메서드(플러그인)는 $(동일선택자).메서드({옵션값}); 재호출 안된다.
 */

/* ◇◆ AllPages */
	addOnNav(); // 현재활성1·2·3·4차
	makeActive2ClickHover2('#tnb1'); // 주메뉴 동작. 데스크탑 1차메뉴 'focusin mouseenter' 한 메뉴 li 만 .over 만듦
	$('#tnb1c>.bg').on('click', function(){ // 20171222
		$('#tnb1c .b2.close').triggerHandler('click');
	});
	//$('#tnb1 .b1.toggle').triggerHandler('click'); // ☆모바일확인용
	//$('#tnb1 div.d1').find('>ul>li').addBack().addClass('over'); // ☆데스크탑확인용
	//$('#tnb1 div.d1').find('>ul>li.m1').addBack().addClass('over'); // ☆데스크탑확인용
	//take2tnb1d2height();

/* ◇◆ MainPage  */
	//$('#vpr1').jQmPR1({interval:6000, mTabindex:'-1'});
	//$('#banner1').jQmTicker1({interval:3000});
	//jQtabCont2('click', '#bbs1', '.tab', 1, '.cont');
	//jQtabCont2('click', '#tab1cont1', '.tab', 1, '.cont');

/* ◇◆ SubPages */
	//makeActive('.cnb1');
	// 따로 호출한다.



/** ◇◆ 레이어 활성되면 바닥은 스크롤 막는다. 20171226. MoonYoungshin.
 */
//$('#tnb1 .b1.toggle').add('#search1 .b1.toggle').on('click', function(){
$('#tnb1 .b1.toggle').on('click', function(){
	//if( $('#tnb1c').is('.on') || $('#search1c').is('.on') ){
	if( $('#tnb1c').is('.on') ){
		$('html').addClass('ofh');
	}else{
		$('html').removeClass('ofh');
	}
});
$(window).on('resize', function(){ // 모든 이미지 로드 후 실행
	if( !$('html').is('.Mobile') ){
		$('html').removeClass('ofh');
	}
});


/** ◇◆ #head 초점인 또는 마우스오버하면 body 태그에 CSS 클래스 추가. 20171228. MoonYoungshin.
 */
$('#head').on('focusin mouseenter', function(){
	$('body').addClass('in-head');
}).on('focusout mouseleave', function(){
	if( !$('#search1c').is('.on') && !$('#anb1c').is('.on') ){
		$('body').removeClass('in-head');
	}
});


}); /* /jQuery(function($){})(); ◇◆◇◆◇◆◇◆◇◆ */


/* ◇◆ Plugin ◇◆◇◆◇◆◇◆◇◆ */





/* ◇◆ Function ◇◆◇◆◇◆◇◆◇◆ */


/** ◇◆ addOnNav. 20140919~~20171122. 20171229. MoonYoungShin. 현재활성1·2·3·4차
 * Use) addOnNav();
 * menu_all.* 에서 받은 값으로 만든 코드 <body class="d1 d1_1 d1_1_1 d1_1_1_1"> 를 이용한다.
 * 문서 준비되기 전에 함수 정의 한다. HTML 코드 중간에서도 호출 가능하도록..
 * 주메뉴, 부메뉴 구조에 따라 커스트마이징 해야한다.
 */
function addOnNav(){
	var dn_n_n_n = $('body').attr('class');
	if(!dn_n_n_n) return false; // 에러방지
	var depthArr = /d([0-9]+)_([0-9]+)_([0-9]+)_([0-9]+)/.exec(dn_n_n_n);
	if(!depthArr) return false; // 에러방지. 팝업페이지 등 menu_all 없는 경우
	$('#anb1 div.d1>ul>li.m'+depthArr[1]).addClass('on'); // 전체메뉴1차
	$('#anb1 div.d1>ul>li.on>div.d2>ul>li.m'+depthArr[2]).addClass('on'); // 전체메뉴2차
	$('#anb1 div.d2>ul>li.on>div.d3>ul>li.m'+depthArr[3]).addClass('on'); // 전체메뉴3차
	// 20171229. ★☆ToEdit) 메인 or 기타 페이지에서 메뉴 1차 첫번째 활성 (모바일 메뉴 1차 세로배치에서 하위메뉴 허전함 채움)
	if( depthArr[1] == 0 || depthArr[1] > 9 ){
		//$('#anb1 div.d1>ul>li.m1').addClass('on');
		//$('#tnb1 div.d1>ul>li.m1').addClass('on');
	}
	$('#tnb1 div.d1>ul>li.m'+depthArr[1]).addClass('on'); // 주메뉴1차
	$('#tnb1 div.d1>ul>li.on>div.d2>ul>li.m'+depthArr[2]).addClass('on'); // 주메뉴2차
	$('#tnb1 div.d2>ul>li.on>div.d3>ul>li.m'+depthArr[3]).addClass('on'); // 주메뉴3차
	$('#tnb1 div.d3>ul>li.on>div.d4>ul>li.m'+depthArr[4]).addClass('on'); // 주메뉴4차
	$('#snb1 div.d2>ul>li.m'+depthArr[2]).addClass('on'); // 부메뉴2차
	$('#snb1 div.d2>ul>li.on>div.d3>ul>li.m'+depthArr[3]).addClass('on'); // 부메뉴3차
	$('#snb1 div.d3>ul>li.m'+depthArr[3]).addClass('on'); // 부메뉴3차
	$('#snb1 div.d3>ul>li.on>div.d4>ul>li.m'+depthArr[4]).addClass('on'); // 부메뉴4차
	// 콘텐츠메뉴. HTML코드 직후 addOnNav(); 실행하면 성능향상
	$('#lnb1d1 li.m'+depthArr[1]).addClass('on'); // 현재위치펼침메뉴1차
	//$('#cnb1 .m'+depthArr[2]).addClass('on');
	//$('#cnb1 .m'+depthArr[3]).addClass('on');
	//$('#cnb1 .m'+depthArr[4]).addClass('on');
	//$('#cnb2 .m'+depthArr[5]).addClass('on');
	//$('#cnb2 .m'+depthArr[6]).addClass('on');
	//console.log(depthArr); // Test
}


/** ◇◆ 주메뉴펼침('div.d2')높이맞춤. 20170615. 20170623. MoonYoungshin.
 * 3차메뉴가 절대위치일 때 2차메뉴 오버에 따라 높이 재설정해준다.
 * Use) takeTnb1D2Height();
 * Task) 범용 가능해지면 고도화
 */
function takeTnb1D2Height(){
	var d3height =	0;
	$('#tnb1 div.d2>ul>li>a').on('mouseenter focusin', function(){
		var $this = $(this);
		var $d2 = $this.closest('div.d2');
		var $d3 = $this.next('.d3');
		setTimeout(function(){
			$d2.css({height: 'auto'});
			d3height = $d3.height();
			//console.log( $d3.css('display') +'  '+ d3height +'  '+ $d2.height() );
			if( $d2.height() < d3height ){
				$d2.css({
					height: d3height + 'px'
				});
			}
		}, 0);
	});
};

/** ◇◆ 주메뉴펼침('div.d2')높이맞춤. 20170726. MoonYoungshin.
 * 웹페이지 'load resize' 마다 높이 저장해 두고 .over 순간 style="height:값px;" 넣어줘서.. 키네틱 활용.
 * Use) take2tnb1d2height();
 * Task) jQuery animate() 없이 CSS 애니메이션 이용하기 성공
 */
function take2tnb1d2height(){
	var d2newHeight = 0;
	var $d2 = $('#tnb1 div.d2');
	$(window).on('load resize', function(){
		$d2.each(function(){
			var $this = $(this);
			$this.css({height: 'auto'});
			//setTimeout(function(){ // 지연하지마요! [IE~11]결함. 주메뉴1차 마우스오버한채로 로딩하면 다른 메뉴 안 펼쳐짐. ([CR]이상무)
				d2newHeight = $this.height();
				$this.css({
					height: d2newHeight + 'px'
				});
				$this.attr({
					'data-height': d2newHeight
				});
				$this.css({height: ''});
			//}, 0);
		});
	});
	$('#tnb1 div.d1>ul>li>a').on('mouseenter focusin', function(){
		var $it = $(this).next('div.d2');
		//console.log( $it.data('height') );
		$d2.css({height: ''});
		//$this.css({height: 'auto'}); // 하지마요! CSS transition 동작 순간에 auto 값이면 변천 없이 최종 상태가 된다.
		$it.css({
			height: $it.data('height') + 'px'
		});
	}).on('mouseleave focusout', function(){
		var $it = $(this).next('div.d2');
		$d2.css({height: ''});
	});
};