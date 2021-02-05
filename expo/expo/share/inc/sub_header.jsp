<%@page language="java" contentType="text/html; charset=utf-8"%>
<%--
/**
 * @File Name : sub_header.jsp
 * @Description : head.*, sidebar.*, body_head.* 인클루드 포함한거. #body 와 #body_content 내부 자식 .container 로 래핑
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
<%@include file="/share/inc/head.jsp"%>
<!-- #wrap -->
<div id="wrap">
<!-- container -->
<div class="container clearfix">
<%@include file="/share/inc/sidebar.jsp"%>
<!-- #body -->
<div id="body">
<!-- container 20160819 -->
<div class="container clearfix">
<%@include file="/share/inc/body_head.jsp"%>
<!-- #body_content -->
<div id="body_content" class="body_content">
<!-- container 20160819 -->
<div class="container clearfix">