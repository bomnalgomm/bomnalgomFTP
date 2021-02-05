<%@page language="java" contentType="text/html; charset=utf-8"%>
<%--
/**
 * @File Name : foot.jsp
 * @Description : 공통 하단 영역. familysite1, fn1(siteguide), author1, ..
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
<!-- #foot --><hr class="dpn" />
<div id="foot" class="init">
<div class="bg bg2foot"><div></div></div>
<h2 class="blind">하단 정보</h2>
<!-- container -->
<div class="container">


<p id="foot_logo"><img src="<%=sitePath%>/img/inc/foot_logo@2x.png" alt="가야왕도 김해" /></p>

<!-- fn1 -->
<div id="fn1">
	<ul>
	<li><a <%=mAnchor[8][2][0][0]%>><b>개인정보보호정책</b></a></li>
	<li><a <%=mAnchor[8][3][0][0]%>>저작권정책</a></li>
	<li><a <%=mAnchor[8][4][0][0]%>>이메일수집거부</a></li>
	<li><a <%=mAnchor[8][5][0][0]%>>경남체육회</a></li>
	</ul>
</div>
<!-- /fn1 -->


<!-- author1 -->
<div id="author1">
	<strong class="h1 blind">작성자 (연락처/저작권)</strong>
	<address class="address">
		(50924) 경상남도 김해시 김해대로 2401(부원동) 도민체육대회 &nbsp;
		<span class="nowrap ls0">대표전화 : <a href="tel:055-330-3235" target="_blank" title="전화걸기">055-330-3235</a></span>
	</address>
	<p class="nophishing">본 사이트에 게시된 이메일주소의 자동수집을 거부하며 이를 위반시 정보통신망법에 의해 형사처벌됩니다.</p>
	<address class="copyright">Copyright © Gimhae. All rights reserved.</address>
</div>
<!-- /author1 -->


</div>
<!-- /container -->
</div>
<!-- /#foot -->
</div>
<!-- /#container -->
<script type="text/javascript" charset="utf-8" src="/program/public/pagecount/count.js.jsp?uid=GNSPORTS" ></script>