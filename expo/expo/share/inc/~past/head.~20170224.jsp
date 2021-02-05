<%@page language="java" contentType="text/html; charset=utf-8"%>
<%--
/**
 * @File Name : head.jsp
 * @Description : 공통 상단 영역. skipnav, gn1, gnb1, tnb1, anb1, search1, ..
 * @Modification Information
 * <pre>
 * 수정일 | 수정자 | 수정내용
 * 2017.02.14 | 문영신 | 최초 등록
 * 2017.02.21 | 문영신 | 요구반영. 결함개선. 고도화.
 * </pre>
 * @author 웹표준화실 문영신
 * @since 2017.02.14
 *
 * @Copyright (C) IACTS.CO.KR All rights reserved.
 */
--%>
<!-- #container -->
<div id="container">
<div class="bg bg2top"><div></div></div>
<div class="bg bg2btm"><div></div></div>
<noscript><p class="noscript">JavaScript has been disabled. This site requires JavaScript for full functionality, please enable.</p></noscript>

<div id="skipnav">
	<ul>
	<li><a href="#body">본문 바로가기</a></li>
	</ul>
</div><hr class="dpn" />

<!-- #head -->
<div id="head" class="init">
<div class="bg bg2head"><div></div></div>
<!-- #head_s1 -->
<div id="head_s1" class="clearfix">
<!-- container -->
<div class="container">


<!-- gn1 -->
<div id="gn1">
	<strong class="blind">Global Navigation</strong>
	<ul>
	<li class="home"><a <%=mAnchor[0][1][1][0]%>><i class="ic1 bsContain"></i> <span class="t1">홈으로</span></a></li>
	<li><a <%=mAnchor[0][1][2][0]%>><i class="ic1 bsContain"></i> <span class="t1">사이트맵</span></a></li>
	<li><a href="http://www.gimhae.go.kr/" target="_blank" title="새 창"><i class="ic1 bsContain"></i> <span class="t1">김해시청</span></a></li>
	</ul>
</div>
<!-- /gn1 -->


<h1 id="logo">
	<a <%=mAnchor[0][0][0][0]%> title="홈으로 이동"><img src="<%=sitePath%>/img/inc/logo@2x.png" alt="제56회 경남도민체육대회 (The 56th Gyeongnam Sports Festival)" /></a>
</h1>


</div>
<!-- /container -->
</div>
<!-- /#head_s1 -->
<!-- #head_s2 -->
<div id="head_s2" class="clearfix">
<!-- container -->
<div class="container">


<h2 class="blind">상단 메뉴</h2>


<!-- tnb1 [jQ] -->
<div id="tnb1">
<h3 class="blind">주 메뉴</h3>
<strong class="h1"><a href="#tnb1c" class="b1 toggle"><i class="ic1 bsContain"></i> <span class="t1 blind">주 메뉴</span> <span class="blind">여닫기</span></a></strong>
<!-- tnb1c -->
<div id="tnb1c"><div class="bg"></div>
<!-- cont -->
<div class="cont">
	<a href="#tnb1c" class="b2 close"><i class="ic1 bsContain"></i> <span class="t1 blind">주 메뉴</span> <span class="blind">닫기</span></a>

	<!-- tnb1head_s1 -->
	<div id="tnb1head_s1">

	<strong id="tnb1logo1"><a <%=mAnchor[0][0][0][0]%> title="홈으로 이동"><img src="<%=sitePath%>/img/inc/tnb1logo@2x.png" alt="(제56회 경남도민체육대회 마크) Gimhae 2017" /></a></strong>

	<!-- tnb1gn1 -->
	<div id="tnb1gn1">
		<strong class="blind">Global Navigation</strong>
		<ul>
		<li class="home"><a <%=mAnchor[0][1][1][0]%>><i class="ic1 bsContain"></i> <span class="t1">홈으로</span></a></li>
		<li><a <%=mAnchor[0][1][2][0]%>><i class="ic1 bsContain"></i> <span class="t1">사이트맵</span></a></li>
		<li><a href="http://www.gimhae.go.kr/" target="_blank" title="새 창"><i class="ic1 bsContain"></i> <span class="t1">김해시청</span></a></li>
		</ul>
	</div>
	<!-- tnb1gn1 -->

	</div>
	<!-- /tnb1head_s1 -->

	<!-- d1 -->
	<%
	// ★1차
	for(int i = 1; i < d1Max; i++){
		if(mAll[i][0][0][0] != null){
	%>
	<div class="d1"><div class="bg"></div>
	<ul>
	<%
			for(int ii = 1; ii < d1Max; ii++){
				if(mAll[ii][0][0][0] == null) continue;
	%><li class="m<%=ii%>"><a <%=mAnchor[ii][0][0][0]%>><span class="t1"><%=mTitle[ii][0][0][0]%></span></a><%
				 // ★	2차
				for(int j = 1; j < d2Max; j++){
					if(mAll[ii][j][0][0] != null){
	%>
		<div class="d2"><div class="bg"></div>
		<div class="hg1"><!-- 1차제목, 부제목 추가 -->
			<i class="p1"></i>
			<strong class="h1 blind"><%=mTitle[ii][0][0][0]%></strong><!-- 1차제목 -->
		</div>
		<ul>
	<%				for(int jj = 1; jj < d2Max; jj++){
						if(mAll[ii][jj][0][0]== null) continue;
	%>	<li class="m<%=jj%>"><%=mMenu[ii][jj][0][0]%><%

			// ★3차
			for(int k = 1; k < d3Max; k++){
				if(mAll[ii][jj][k][0] != null){
			%>
			<div class="d3"><div class="bg"></div>
			<ul>
			<%
					for(int kk = 1; kk < d3Max; kk++){
						if(mAll[ii][jj][kk][0] == null) continue;
			%><li class="m<%=kk%>"><%=mMenu[ii][jj][kk][0]%><%
						 // ★4차
						for(int l = 1; l < d4Max; l++){
							if(mAll[ii][jj][kk][l] != null){
			%>	
				<div class="d4"><div class="bg"></div>
				<ul>
			<%				for(int ll = 1; ll < d4Max; ll++){
								if(mAll[ii][jj][kk][ll]== null) continue;
			%>	<li class="m<%=ll%>"><%=mMenu[ii][jj][kk][ll]%></li>
			<%					}
			%>	</ul>
				</div>
			<%					break;
							}
						}
			%></li>
			<%	
					}
			%>
			</ul>
			</div>
			<%		break;
				}
			}

	%></li>
	<%					}
	%>	</ul>
		</div>
	<%					break;
					}
				}
	%></li>
	<%	
			}
	%>
	</ul>
	</div>
	<%		break;
		}
	}%>
	<!-- /d1 -->

	<a href="#tnb1c" class="b2 close"><i class="ic1 bsContain"></i> <span class="t1 blind">주 메뉴</span> <span class="blind">닫기</span></a>
</div>
<!-- /cont -->
</div>
<!-- /tnb1c -->
</div>
<!-- /tnb1 -->
<script type="text/javascript">/*<![CDATA[*/
$(function(){
	//$('#tnb1 .b1.toggle').triggerHandler('click'); // ☆모바일확인용
	//$('#tnb1 div.d1>ul>li.m2').addClass('over'); // ☆데스크탑확인용
	//$('#tnb1 div.d1>ul>li').addClass('over'); // ☆데스크탑확인용
});
/*]]>*/</script>


</div>
<!-- /container -->
</div>
<!-- /#head_s2 -->
<%if(d1n!=0){/* Except MainPage */%>
<%//if(d2n!=0){/* Except MainPage + SubmainPage 1depth */%>
<!-- #head_s3 -->
<div id="head_s3" class="clearfix">
<!-- container -->
<div class="container">


<%String visual_text[] = new String[d1Max];
visual_text[0] = ""; // ★대체텍스트
visual_text[1] = "The 56th Gyeongnam Sports Festival";
visual_text[2] = "The 56th Gyeongnam Sports Festival";
visual_text[3] = "The 56th Gyeongnam Sports Festival";
visual_text[4] = "The 56th Gyeongnam Sports Festival";
visual_text[5] = "The 56th Gyeongnam Sports Festival";
visual_text[6] = "The 56th Gyeongnam Sports Festival";
visual_text[7] = "The 56th Gyeongnam Sports Festival";
visual_text[8] = "The 56th Gyeongnam Sports Festival";
visual_text[9] = "The 56th Gyeongnam Sports Festival";
String visual_num = "";
if(d1n<10) visual_num = "0" + d1n; // 1차 메뉴별 비쥬얼 이미지명 v101.jpg, v102.jpg, ..
else visual_num = ""; // 조건 이외는 비쥬얼 기본 이미지명 v1.jpg
%>
<div id="visual">
	<!-- <div class="v1<%=visual_num%>"><img src="<%=sitePath%>/img/inc/v1<%=visual_num%>.jpg" width="1920" height="160" alt="" title="" /></div> -->
	<div class="tg1">
		<i class="ic1 bsContain"></i>
		<strong class="t1"><%=mTitle[d1n][0][0][0]%></strong>
		<p class="t2"><%=visual_text[d1n]%></p>
	</div>
</div>


</div>
<!-- /container -->
</div>
<!-- /#head_s3 -->
<%}/* /Except MainPage+SubMainPages + SubmainPage 1depth */%>
</div><hr class="dpn" />
<!-- /#head -->