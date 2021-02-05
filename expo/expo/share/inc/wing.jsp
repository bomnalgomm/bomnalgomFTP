<%@page language="java" contentType="text/html; charset=utf-8"%>
<%--
/**
 * @File Name : wing.jsp
 * @Description : 서브 공통 날개 영역. wn1(quickmenu), gotop, ..
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
<%if(d1n!=0){/* Except MainPage */%>
<%//if(d2n!=0){/* Except MainPage+SubMainPages */%>
<!-- #wing --><hr class="dpn">
<div id="wing" class="init clearfix on"><!-- ☆☆(Hint to us!) -->





<a href="#container" title="현재 페이지 상단으로 이동" id="gotop1">
	<i class="ic1 bsContain"></i> <span class="t1">TOP</span>
</a>





</div>
<!-- /#wing -->
<%}/* /Except MainPage+SubMainPages */%>