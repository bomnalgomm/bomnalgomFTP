<%@page language="java" contentType="text/html; charset=utf-8"%>
<%--
/**
 * @File Name : sub_footer.jsp
 * @Description : body_foot.* (, aside.*, wing.*), foot.* 인클루드 포함한거. #body 와 #body_content 내부 자식 .container 로 래핑
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
<%if(d1n!=0){/* except MainPage */%>
</div>
<!-- /container 20160819 -->
</div>
<!-- /#body_content -->
<%@include file="/share/inc/body_foot.jsp"%>
</div>
<!-- /container -->
</div>
<!-- /#body -->
<%//@include file="/share/inc/aside.jsp"%>
</div>
<!-- /container 20160819 -->
</div>
<!-- /#wrap -->
<%@include file="/share/inc/wing.jsp"%>
<%}/* /except MainPage */%>
<%@include file="/share/inc/foot.jsp"%>