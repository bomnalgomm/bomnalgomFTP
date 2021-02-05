<%@page language="java" contentType="text/html; charset=utf-8"%>
<%--
/**
 * @File Name : sidebar.jsp
 * @Description : 서브 공통 사이드 영역. side_title, snb1, ..
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
<!-- #sidebar -->
<div id="sidebar" class="init">
<%if(d2n!=0){/* Except SubMainPages */%>


<h2 id="side_title"><a <%=mAnchor[d1n][d2n][0][0]%>><i class="ic1 bsContain"></i> <span class="t1"><%=mTitle[d1n][d2n][0][0]%></span></a></h2>

<!-- snb1 [jQ] addOnNav(); -->
<div id="snb1" class="snb1"><div class="bg"></div>
<strong class="h1 blind">부 메뉴</strong>

<%
for(int k = 1; k < d3Max; k++){
	if(mAll[d1n][d2n][k][0] != null){
%>
<div class="d3"><div class="bg"></div>
<ul>
<%
		for(int kk = 1; kk < d3Max; kk++){
			if(mAll[d1n][d2n][kk][0] == null) continue;
%><li class="m<%=kk%>"><%=mMenu[d1n][d2n][kk][0]%><%
			for(int l = 1; l < d4Max; l++){
				if(mAll[d1n][d2n][kk][l] != null){
%>	<div class="d4"><div class="bg"></div>
	<ul>
<%				for(int ll = 1; ll < d4Max; ll++){
					if(mAll[d1n][d2n][kk][ll]==null) continue;
%>	<li class="m<%=ll%>"><%=mMenu[d1n][d2n][kk][ll]%></li>
<%					}
%>	</ul>
	</div>
<%					break;
				}
			}
%></li>
<%	
		}
%></ul>
</div>
<%		break;
	}
}%>

</div>
<!-- /snb1 -->
<script type="text/javascript">/*<![CDATA[*/
/** ◇◆ 사이드메뉴동작. 20161101~. MoonYoungshin.
 */
(function(){
	$('#snb1 a+div').prev().parent().addClass('hasSub'); // 하위메뉴 있는거 표시
	addOnNav(); // 현재활성1·2·3·4차		
}());
/*]]>*/</script>



<%}/* /Except SubMainPages */%>
</div>
<!-- /#sidebar -->