<%@page language="java" contentType="text/html; charset=utf-8"%>
<%--
/**
 * @File Name : html_head_base.jsp
 * @Description : 공통 <head></head> 태그 자식 코드. meta, title, link, script, ..
 * @Modification Information
 * <pre>
 * 수정일 | 수정자 | 수정내용
 * 2017.02.14 | 문영신 | 최초 등록
 * 2017.02.21 | 문영신 | 요구반영. 결함개선. 고도화.
 * 2017.03.03 | 양미정 | match.css파일 추가(51번째줄)
 * </pre>
 * @author 웹표준화실 문영신
 * @since 2017.02.14
 *
 * @Copyright (C) IACTS.CO.KR All rights reserved.
 */
--%>
<!-- html_head -->
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="author" content="<%=siteName%>" />
<meta name="keywords" content="<%=metaKeywords%>" />
<meta name="description" content="<%=metaKeywords%>" />
<title><%=titleTag%></title>
<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Open+Sans" /><!-- 20160311. (( https: -->
<link rel="stylesheet" type="text/css" href="<%=sitePath%>/share/css/base.css" />
<%if(pageType != null && !pageType.equals("") && !pageType.equals("popup")){ // MainPage, SubPages%>
	<link rel="stylesheet" type="text/css" href="<%=sitePath%>/share/css/all.css" />
	<%if(d1n==0){ // MainPage%>
		<link rel="stylesheet" type="text/css" href="<%=sitePath%>/share/css/main.css" />
	<%}else if(d2n==0){ // SubMain 1차 %>
		<%if(d1n==1 && d2n==0 && d3n==0){%>
		<%}else if(d1n==2 && d2n==0 && d3n==0){%>
		<%}else if(d1n==3 && d2n==0 && d3n==0){%>
		<%}else if(d1n==4 && d2n==0 && d3n==0){%>
		<%}else if(d1n==5 && d2n==0 && d3n==0){%>
		<%}else if(d1n==6 && d2n==0 && d3n==0){%>
		<%}%>
	<%}else{ // SubMain 2차이하, SubPages%>
		<link rel="stylesheet" type="text/css" href="<%=sitePath%>/share/css/sub.css" />
		<link rel="stylesheet" type="text/css" href="<%=sitePath%>/share/css/lib.css" />
		<link rel="stylesheet" type="text/css" href="<%=sitePath%>/share/css/lib1cp1.css" /><!-- /tp/ and /tp1/ ☆BBS+ -->
		<link rel="stylesheet" type="text/css" href="<%=sitePath%>/share/css/lib1cp2.css" /><!-- /tp2/ ☆여행1(샘플) -->
		<link rel="stylesheet" type="text/css" href="<%=sitePath%>/share/css/lib1cp3.css" /><!-- /tp3/ ☆추가(샘플) -->
		<link rel="stylesheet" type="text/css" href="<%=sitePath%>/share/css/lib1cp4.css" /><!-- /tp4/ ☆추가 -->
		<link rel="stylesheet" type="text/css" href="<%=sitePath%>/share/css/lib1tour2.css" /><!-- /tp2/ ☆여행2(샘플) -->
		<link rel="stylesheet" type="text/css" href="<%=sitePath%>/share/css/lib1tour3.css" /><!-- /tp2/ ☆여행3 -->
		<link rel="stylesheet" type="text/css" href="<%=sitePath%>/share/css/content.css" />
		<link rel="stylesheet" type="text/css" href="<%=sitePath%>/share/css/match.css" />
	<%}%>
<%}else{ // PopupPages%>
	<link rel="stylesheet" type="text/css" href="<%=sitePath%>/share/css/lib.css" />
	<link rel="stylesheet" type="text/css" href="<%=sitePath%>/share/css/lib1cp1.css" />
	<link rel="stylesheet" type="text/css" href="<%=sitePath%>/share/css/popup.css" />
<%}%>
<script type="text/javascript" src="<%=sitePath%>/share/js/iscroll-min.js"></script>
<script type="text/javascript" src="<%=sitePath%>/share/js/jquery-1.12.4.min.js"></script><!-- 20161018 -->
<script type="text/javascript" src="<%=sitePath%>/share/js/jquery.easing.1.3.js"></script>
<!--[if lt IE 9]>
<script type="text/javascript" src="<%=sitePath%>/share/js/html5shiv.min.js"></script>
<script type="text/javascript" src="<%=sitePath%>/share/js/selectivizr.js"></script>
<script type="text/javascript" src="<%=sitePath%>/share/js/respond.min.js"></script>
<script type="text/javascript" src="<%=sitePath%>/share/js/jquery.backgroundSize.js"></script>
<![endif]-->
<!-- <script type="text/javascript" src="<%=sitePath%>/share/js/all.js"></script> -->
<script type="text/javascript" src="<%=sitePath%>/share/js/jq.js"></script>
<script type="text/javascript" src="<%=sitePath%>/share/js/jq.gesture1.js"></script>
<script type="text/javascript" src="<%=sitePath%>/share/js/jq_scroll1section1.js"></script>
<!-- /html_head -->