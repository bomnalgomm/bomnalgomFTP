<%@page language="java" contentType="text/html; charset=utf-8"%>
<%--
/**
 * @File Name : body_head.jsp
 * @Description : 서브 공통 본문 상단 영역. body_title, location1, ..
 * @Modification Information
 * <pre>
 * 수정일 | 수정자 | 수정내용
 * 2017.02.14 | 문영신 | 최초 등록
 * 2017.02.22 | 문영신 | 요구반영. 결함개선. 고도화.
 * 2017.03.14 | 문영신 | 현재위치 펼침메뉴 3차 이상 제거
 * </pre>
 * @author 웹표준화실 문영신
 * @since 2017.02.14
 *
 * @Copyright (C) IACTS.CO.KR All rights reserved.
 */
--%>
<!-- #forPrint --><hr class="dpn" />
<div id="forPrint">
<!-- #body_head -->
<div id="body_head" class="init">

<!-- body_head_s1 -->
<div id="body_head_s1">
<!-- container -->
<div class="container clearfix">


<!-- location1 -->
<div id="location1">
<div class="breadcrumb clearfix">
	<strong class="blind">현재페이지 위치:</strong>
	<span class="cont"><%=locationLink%></span>
</div>
</div>
<!-- /location1 -->
<script type="text/javascript">/*<![CDATA[*/
(function(){
	$('#location1 a').on('click', function(){
		$(this).siblings('.on').triggerHandler('click'); // 토글 열린거 닫음.
	});
}());
/*]]>*/</script>


<!-- lnb1d1~lnb1d3 [JS] 키보드 운용 적합 -->
<!-- ★))@개발자! CMS 만들 때.. IA 에 알맞게 1~3차 메뉴 가져오세요. -->
<!-- lnb1d1 -->
<div id="lnb1d1" class="clearfix">
	<strong class="h1 blind">1차메뉴</strong>
	<div class="d1"><div class="bg"></div>
	<ul>
	<li class="m1"><%=mMenu[1][0][0][0]%></li>
	<li class="m2"><%=mMenu[2][0][0][0]%></li>
	<li class="m3"><%=mMenu[3][0][0][0]%></li>
	<li class="m4"><%=mMenu[4][0][0][0]%></li>
	<li class="m5"><%=mMenu[5][0][0][0]%></li>
	<li class="m6"><%=mMenu[6][0][0][0]%></li>
	<li class="m7"><%=mMenu[7][0][0][0]%></li>
	<li class="m8"><%=mMenu[8][0][0][0]%></li>
	</ul>
	</div>
</div>
<!-- /lnb1d1 -->
<!-- lnb1d2 -->
<div id="lnb1d2" class="clearfix">
	<strong class="h1 blind">2차메뉴</strong>
	<div class="d2"><div class="bg"></div>
	<ul>
	<%
	for(int i = 1; i < d2Max; i++){
		if(mAll[d1n][i][0][0]==null) continue;
		if( i == d2n ){
	%>
			<li class="m<%=i%> on"><%=mMenu[d1n][i][0][0]%></li>
	<%	}else{%>
			<li class="m<%=i%>"><%=mMenu[d1n][i][0][0]%></li>
	<%	}
	}
	%>
	</ul>
	</div>
</div>
<!-- /lnb1d2 -->

<script type="text/javascript">/*<![CDATA[*/

(function(){
	addOnNav(); // 1차 활성 위해
}());

/* ◇◆ 현재위치펼침메뉴.이동. 20160303. 20170217. MoonYoungshin.
 */
(function(){
	$('#lnb1d1').insertAfter('#location1 a[href="#lnb1d1"]');
	$('#lnb1d2').insertAfter('#location1 a[href="#lnb1d2"]');
	//$('#lnb1d3').insertAfter('#location1 a[href="#lnb1d3"]');
}());

/* ◇◆ 현재위치펼침메뉴.좌위치..고도화. 20151126. 20160309. 20161019. MoonYoungshin.
 */
(function(){
	var timer = setTimeout(function(){}, 0);
	var v = {
		lnb1w: 160, // lnb1 width (펼침메뉴 폭)
		ol: 18, // ☆ offset left (.sep(분리장식) width)
		ow: 70 // offset width
	};

	// 펼침메뉴 폭 계산
	function calLnb1Width(selector){
		$this = selector;
		v.lnb1w = ( $this.width() > ($this.prev().outerWidth() + v.ow) )? $this.width() : $this.prev().outerWidth() + v.ow;
		//console.log($this.width()  +'  '+  $this.prev().outerWidth());
		return v.lnb1w + 'px';
	}

	$(window).on('load resize', function(){
		// 초기화!! 2단))1단
		$('#lnb1d3').css({'width': 'auto'});
		$('#lnb1d3>.d3>ul>li').css({
			'float': 'none',
			'width': 'auto',
			'margin-left': '0',
			'border-left': '0'
		});
		clearTimeout(timer);
		timer = setTimeout(function(){
			// width, margin-left 고도화
			if($('html').is('.width-xlarge')){ // (데스크탑) 초대형 화면이면..
				$('[id^="lnb1d"]').css({
					'width': 'auto'
				});
				// 20151124. 에러방지
				if(!!$('#location1 a[href="#lnb1d1"]').length){
					$('#lnb1d1').css({
						'width': function(){ return calLnb1Width($(this)); },
						'margin-left': ($('#location1 a[href="#lnb1d1"]').position().left - v.ol) + 'px'
					});
				}
				if(!!$('#location1 a[href="#lnb1d2"]').length){
					$('#lnb1d2').css({
						'width': function(){ return calLnb1Width($(this)); },
						'margin-left': ($('#location1 a[href="#lnb1d2"]').position().left - v.ol) + 'px'
					});
				}
				if(!!$('#location1 a[href="#lnb1d3"]').length){
					$('#lnb1d3').css({
						'width': function(){ return calLnb1Width($(this)); },
						'margin-left': ($('#location1 a[href="#lnb1d3"]').position().left - v.ol) + 'px'
					});
				}
				if(!!$('#location1 a[href="#lnb1d4"]').length){
					$('#lnb1d4').css({
						'width': function(){ return calLnb1Width($(this)); },
						'margin-left': ($('#location1 a[href="#lnb1d4"]').position().left - v.ol) + 'px'
					});
				}
			}else{ // (모바일, 태블릿, ..) 초대형 화면 아니면..
				$('[id^="lnb1d"]').css({
					'width': $('body').width() + 'px', //
					'margin-left': '0'
				});
			}
			// 형제메뉴 많으면 2단 배치
			if($('#lnb1d3>.d3>ul>li').length > 13){
				if($('html').hasClass('width-xlarge')){
					$('#lnb1d3').css({'width': ( $('#lnb1d3').width() * 2 ) + 'px' });
				}
				$('#lnb1d3>.d3>ul>li').css({
					'float': 'left',
					'width': '50%',
					'margin-left': '-1px',
					'border-left': '1px solid #ddd'
				});
			}
		}, 50);
	});
}());

/*]]>*/</script>


</div>
<!-- /container -->
</div>
<!-- /body_head_s1 -->
<!-- body_head_s2 -->
<div id="body_head_s2">
<!-- container -->
<div class="container clearfix">


<div id="body_title"><h1 class="hb1 h1"><%=titleImgAlt%></h1></div>


<!-- bn1 -->
<div id="bn1">
<ul>
<li class="m facebook"><a href="#"><i class="ic1 bsContain"> <span class="t1 blind">페이스북 담기</span></i></a></li>
<li class="m twitter"><a href="#"><i class="ic1 bsContain"> <span class="t1 blind">트위터 담기</span></i></a></li>
<!-- <li class="m kakaostory "><a href="#"><i class="ic1 bsContain"> <span class="t1 blind">카카오스토리 담기</span></i></a></li> -->
<!-- <li class="m share"><a href="#" class="m toggle"><i class="ic1 bsContain"> <span class="t1 blind">공유</span></i></a></li> -->
<li class="m link"><a href="#"><i class="ic1 bsContain"> <span class="t1 blind">링크 공유 (링크 주소 복사)</span></i></a></li>
<li class="m print"><a href="#" onclick="window.print(); return false;" target="_blank"><i class="ic1 bsContain"></i> <span class="blind">본문</span> <span class="t1 blind">인쇄</span></a></li>
</ul>
</div>
<!-- /bn1 -->
<script type="text/javascript" src="/program/includejs/sns_share_trackback.js"></script>

</div>
<!-- /container -->
</div>
<!-- /body_head_s2 -->

</div>
<!-- /#body_head -->