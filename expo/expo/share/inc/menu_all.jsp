<%@page language="java" contentType="text/html; charset=utf-8"%>
<%--
/**
 * @File Name : menu_all.jsp
 * @Description : IA(1~4Depth) 메뉴 배열(이름,링크,속성) 정의. siteName, viewType, sitePath, title, keywords, description, locationLink, titleImgAlt, titleImg, bodyClass, ..
 * @Modification Information
 * <pre>
 * 수정일 | 수정자 | 수정내용
 * 2017.02.14 | 문영신 | 최초 등록
 * 2017.02.22 | 문영신 | 요구반영. 결함개선. 고도화.
 * 2017.03.14 | 문영신 | 현재위치, 제목 2차까지만
 * 2017.03.30 | 양미정 | 선수단현황에 하위메뉴 추가
 * </pre>
 * @author 웹표준화실 문영신
 * @since 2017.02.14
 *
 * @Copyright (C) IACTS.CO.KR All rights reserved.
 */
--%>
<%!
private String getInfo(String mAll, int index){
	if(mAll==null) return null;
	String[] info = mAll.split("\\|");
	if(index==0 && info.length>=1) return info[0];
	if(index==1 && info.length>=2) return info[1];
	if(index==2 && info.length>=3) return info[2];
	return "";
}%><%
/** ~20151022. Designed by MoonYoungshin. 20160518. Reviser.
 * 최종제목 | 사이트명 // ☆이행
 * 사이트명 | 1차 - 2차 - 3차 - 4차 - 최종제목
 */

String siteName = "제29회 경상남도생활체육대축전";
String viewType = "all"; // desktop|mobile
String sitePath = ""; // "/sitefolder" ★웹사이트 루트 폴더
String pageType = ""; // |popup

int d1Max = 10; // 1차메뉴수+1
int d2Max = 11; // 2차메뉴수+1
int d3Max = 28; // 3차메뉴수+1
int d4Max = 11; // 4차메뉴수+1

String mAll[][][][] = new String[d1Max][d2Max][d3Max][d4Max];
String mTitle[][][][] = new String[d1Max][d2Max][d3Max][d4Max];
String mLink[][][][] = new String[d1Max][d2Max][d3Max][d4Max];
String mClick[][][][] = new String[d1Max][d2Max][d3Max][d4Max];
String mMenu[][][][] = new String[d1Max][d2Max][d3Max][d4Max];
String mAnchor[][][][] = new String[d1Max][d2Max][d3Max][d4Max];
String mList[][][][] = new String[d1Max][d2Max][d3Max][d4Max];

// 새창
String newWin = " onclick='window.open(this.href);return false;' target='_blank' title='새 창'";
String popUp = " onclick='window.open(this.href,\"\",\"width=400,height=500,scrollbars=yes,left=20,top=20\");return false;' target='_blank' title='새 창'";
// 서브메인
String subMain = " class='submain'";
// ex)
//mAll[1][1][0][0] = "메뉴명"+"|"+sitePath+"내부링크주소"+"|"+popUp;
//mAll[0][1][2][0] = "메뉴명"+"|"+"외부링크주소"+"|"+newWin;
//mAll[1][0][0][0] = "메뉴명"+"|"+sitePath+"서브메인링크주소"+"|"+subMain;


// 1depth
mAll[1][0][0][0] = "대축전소개"+"|"+sitePath+"/html/sub/01_01.jsp";

mAll[1][1][0][0] = "환영사"+"|"+sitePath+"/html/sub/01_01.jsp";
mAll[1][2][0][0] = "대회개요"+"|"+sitePath+"/html/sub/01_02.jsp";
mAll[1][3][0][0] = "대회상징물"+"|"+sitePath+"/html/sub/01_03.jsp";
mAll[1][4][0][0] = "홍보동영상"+"|"+sitePath+"/html/sub/01_04.jsp";
mAll[1][5][0][0] = "준비위원회"+"|"+sitePath+"/html/sub/01_05.jsp";
//mAll[1][6][0][0] = "도민체전 약사"+"|"+sitePath+"/html/sub/01_06_01.jsp";
//	mAll[1][6][1][0] = "2010 ~ 2017"+"|"+sitePath+"/html/sub/01_06_01.jsp";
//	mAll[1][6][2][0] = "2000 ~ 2009"+"|"+sitePath+"/html/sub/01_06_02.jsp";
//	mAll[1][6][3][0] = "1900 ~ 1990"+"|"+sitePath+"/html/sub/01_06_03.jsp";
mAll[1][7][0][0] = "역대 생활체육대축전"+"|"+sitePath+"/html/sub/01_07_01.jsp";
	mAll[1][7][1][0] = "41~55회"+"|"+sitePath+"/html/sub/01_07_01.jsp";
	mAll[1][7][2][0] = "21~40회"+"|"+sitePath+"/html/sub/01_07_02.jsp";
	mAll[1][7][3][0] = "1~20회"+"|"+sitePath+"/html/sub/01_07_03.jsp";

 // 1depth
mAll[2][0][0][0] = "행사안내"+"|"+sitePath+"/html/sub/02_01.jsp";

mAll[2][1][0][0] = "개회식"+"|"+sitePath+"/html/sub/02_01.jsp";
mAll[2][2][0][0] = "폐회식"+"|"+sitePath+"/html/sub/02_02.jsp";
//mAll[2][3][0][0] = "성화봉송행사"+"|"+sitePath+"/html/sub/02_03.jsp";
mAll[2][4][0][0] = "문화예술행사"+"|"+sitePath+"/html/sub/02_04.jsp";

// 1depth
mAll[3][0][0][0] = "경기안내"+"|"+sitePath+"/html/sub/03_01_01.jsp";

mAll[3][1][0][0] = "경기종목"+"|"+sitePath+"/html/sub/03_01_01.jsp";
	mAll[3][1][1][0] = "육상"+"|"+sitePath+"/html/sub/03_01_01.jsp";
	mAll[3][1][2][0] = "수영"+"|"+sitePath+"/html/sub/03_01_02.jsp";
	mAll[3][1][3][0] = "축구"+"|"+sitePath+"/html/sub/03_01_03.jsp";
	mAll[3][1][4][0] = "야구"+"|"+sitePath+"/html/sub/03_01_04.jsp";
	mAll[3][1][5][0] = "테니스"+"|"+sitePath+"/html/sub/03_01_05.jsp";
	mAll[3][1][6][0] = "정구"+"|"+sitePath+"/html/sub/03_01_06.jsp";
	mAll[3][1][7][0] = "농구"+"|"+sitePath+"/html/sub/03_01_07.jsp";
	mAll[3][1][8][0] = "배구"+"|"+sitePath+"/html/sub/03_01_08.jsp";
	mAll[3][1][9][0] = "탁구"+"|"+sitePath+"/html/sub/03_01_09.jsp";
	mAll[3][1][10][0] = "자전거"+"|"+sitePath+"/html/sub/03_01_10.jsp";
	mAll[3][1][11][0] = "복싱"+"|"+sitePath+"/html/sub/03_01_11.jsp";
	mAll[3][1][12][0] = "레슬링"+"|"+sitePath+"/html/sub/03_01_12.jsp";
	mAll[3][1][13][0] = "역도"+"|"+sitePath+"/html/sub/03_01_13.jsp";
	mAll[3][1][14][0] = "씨름"+"|"+sitePath+"/html/sub/03_01_14.jsp";
	mAll[3][1][15][0] = "유도"+"|"+sitePath+"/html/sub/03_01_15.jsp";
	mAll[3][1][16][0] = "검도"+"|"+sitePath+"/html/sub/03_01_16.jsp";
	mAll[3][1][17][0] = "궁도"+"|"+sitePath+"/html/sub/03_01_17.jsp";
	mAll[3][1][18][0] = "사격"+"|"+sitePath+"/html/sub/03_01_18.jsp";
	mAll[3][1][19][0] = "배드민턴"+"|"+sitePath+"/html/sub/03_01_19.jsp";
	mAll[3][1][20][0] = "태권도"+"|"+sitePath+"/html/sub/03_01_20.jsp";
	mAll[3][1][21][0] = "볼링"+"|"+sitePath+"/html/sub/03_01_21.jsp";
	mAll[3][1][22][0] = "롤러"+"|"+sitePath+"/html/sub/03_01_22.jsp";
	mAll[3][1][23][0] = "골프"+"|"+sitePath+"/html/sub/03_01_23.jsp";
	mAll[3][1][24][0] = "보디빌딩"+"|"+sitePath+"/html/sub/03_01_24.jsp";
	mAll[3][1][25][0] = "우슈쿵푸"+"|"+sitePath+"/html/sub/03_01_25.jsp";
	mAll[3][1][26][0] = "산악"+"|"+sitePath+"/html/sub/03_01_26.jsp";
	mAll[3][1][27][0] = "바둑"+"|"+sitePath+"/html/sub/03_01_27.jsp";
mAll[3][2][0][0] = "경기일정"+"|"+sitePath+"/html/sub/03_02.jsp";
mAll[3][3][0][0] = "대진표"+"|"+sitePath+"/html/sub/03_03_01.jsp";
	mAll[3][3][1][0] = "시부"+"|"+sitePath+"/html/sub/03_03_01.jsp";
	mAll[3][3][2][0] = "군부"+"|"+sitePath+"/html/sub/03_03_02.jsp";
mAll[3][4][0][0] = "선수단현황"+"|"+sitePath+"/html/sub/03_04_01.jsp";
	mAll[3][4][1][0] = "8개 시부"+"|"+sitePath+"/html/sub/03_04_01.jsp";
	mAll[3][4][2][0] = "10개 군부"+"|"+sitePath+"/html/sub/03_04_02.jsp";
mAll[3][5][0][0] = "경기결과 안내"+"|"+sitePath+"/html/sub/03_05.jsp";

// 1depth
//mAll[4][0][0][0] = "경기기록"+"|"+sitePath+"http://gnsp.bizemotion.co.kr/2017/sub01/sub02.php"+"|"+newWin;

//mAll[4][1][0][0] = "종합순위"+"|"+"http://gnsp.bizemotion.co.kr/2017/sub01/sub02.php"+"|"+newWin;
//mAll[4][2][0][0] = "경기결과 안내"+"|"+"http://gnsp.bizemotion.co.kr/2017/sub01/sub04.php "+"|"+newWin;
//mAll[4][3][0][0] = "대회신기록"+"|"+"http://gnsp.bizemotion.co.kr/2017/sub03/sub01.php"+"|"+newWin;

// 1depth
mAll[5][0][0][0] = "시설안내"+"|"+sitePath+"/html/sub/05_01.jsp";

mAll[5][1][0][0] = "경기장안내"+"|"+sitePath+"/html/sub/05_01.jsp";
mAll[5][2][0][0] = "대회시설"+"|"+sitePath+"/html/sub/05_02_01.jsp";
	mAll[5][2][1][0] = "육상"+"|"+sitePath+"/html/sub/05_02_01.jsp";
	mAll[5][2][2][0] = "수영"+"|"+sitePath+"/html/sub/05_02_02.jsp";
	mAll[5][2][3][0] = "축구"+"|"+sitePath+"/html/sub/05_02_03.jsp";
	mAll[5][2][4][0] = "야구"+"|"+sitePath+"/html/sub/05_02_04.jsp";
	mAll[5][2][5][0] = "테니스"+"|"+sitePath+"/html/sub/05_02_05.jsp";
	mAll[5][2][6][0] = "정구"+"|"+sitePath+"/html/sub/05_02_06.jsp";
	mAll[5][2][7][0] = "농구"+"|"+sitePath+"/html/sub/05_02_07.jsp";
	mAll[5][2][8][0] = "배구"+"|"+sitePath+"/html/sub/05_02_08.jsp";
	mAll[5][2][9][0] = "탁구"+"|"+sitePath+"/html/sub/05_02_09.jsp";
	mAll[5][2][10][0] = "자전거"+"|"+sitePath+"/html/sub/05_02_10.jsp";
	mAll[5][2][11][0] = "복싱"+"|"+sitePath+"/html/sub/05_02_11.jsp";
	mAll[5][2][12][0] = "레슬링"+"|"+sitePath+"/html/sub/05_02_12.jsp";
	mAll[5][2][13][0] = "역도"+"|"+sitePath+"/html/sub/05_02_13.jsp";
	mAll[5][2][14][0] = "씨름"+"|"+sitePath+"/html/sub/05_02_14.jsp";
	mAll[5][2][15][0] = "유도"+"|"+sitePath+"/html/sub/05_02_15.jsp";
	mAll[5][2][16][0] = "검도"+"|"+sitePath+"/html/sub/05_02_16.jsp";
	mAll[5][2][17][0] = "궁도"+"|"+sitePath+"/html/sub/05_02_17.jsp";
	mAll[5][2][18][0] = "사격"+"|"+sitePath+"/html/sub/05_02_18.jsp";
	mAll[5][2][19][0] = "배드민턴"+"|"+sitePath+"/html/sub/05_02_19.jsp";
	mAll[5][2][20][0] = "태권도"+"|"+sitePath+"/html/sub/05_02_20.jsp";
	mAll[5][2][21][0] = "볼링"+"|"+sitePath+"/html/sub/05_02_21.jsp";
	mAll[5][2][22][0] = "롤러"+"|"+sitePath+"/html/sub/05_02_22.jsp";
	mAll[5][2][23][0] = "골프"+"|"+sitePath+"/html/sub/05_02_23.jsp";
	mAll[5][2][24][0] = "보디빌딩"+"|"+sitePath+"/html/sub/05_02_24.jsp";
	mAll[5][2][25][0] = "우슈쿵푸"+"|"+sitePath+"/html/sub/05_02_25.jsp";
	mAll[5][2][26][0] = "산악"+"|"+sitePath+"/html/sub/05_02_26.jsp";
	mAll[5][2][27][0] = "바둑"+"|"+sitePath+"/html/sub/05_02_27.jsp";
mAll[5][3][0][0] = "주요시설 전화번호"+"|"+sitePath+"/html/sub/05_03.jsp";
mAll[5][4][0][0] = "선수단 숙소안내"+"|"+sitePath+"/html/sub/05_04.jsp";

// 1depth
mAll[6][0][0][0] = "김해안내"+"|"+sitePath+"/html/sub/06_01.jsp";

mAll[6][1][0][0] = "김해시 소개"+"|"+sitePath+"/html/sub/06_01.jsp";
mAll[6][2][0][0] = "교통정보"+"|"+sitePath+"/html/sub/06_02.jsp";
mAll[6][3][0][0] = "문화관광"+"|"+sitePath+"/html/sub/06_03_01.jsp";
	mAll[6][3][1][0] = "9경(볼거리)"+"|"+sitePath+"/html/sub/06_03_01.jsp";
	mAll[6][3][2][0] = "9미(먹을거리)"+"|"+sitePath+"/html/sub/06_03_02.jsp";
	mAll[6][3][3][0] = "9품(살거리)"+"|"+sitePath+"/html/sub/06_03_03.jsp";
	mAll[6][3][4][0] = "9길(걷고 싶은 길)"+"|"+sitePath+"/html/sub/06_03_04.jsp";
mAll[6][4][0][0] = "숙박시설"+"|"+sitePath+"/html/sub/06_04.jsp";
mAll[6][5][0][0] = "김해맛집"+"|"+sitePath+"/html/sub/06_05.jsp";
mAll[6][6][0][0] = "오시는길"+"|"+sitePath+"/html/sub/06_06.jsp";

// 1depth
mAll[7][0][0][0] = "참여마당"+"|"+sitePath+"/html/sub/07_01.jsp";

mAll[7][1][0][0] = "대축전 새소식"+"|"+sitePath+"/html/sub/07_01.jsp";
mAll[7][2][0][0] = "응원게시판"+"|"+sitePath+"/html/sub/07_02.jsp";
mAll[7][3][0][0] = "자유게시판"+"|"+sitePath+"/html/sub/07_03.jsp";
mAll[7][4][0][0] = "시민갤러리"+"|"+sitePath+"/html/sub/07_04.jsp";
mAll[7][5][0][0] = "자원봉사게시판"+"|"+sitePath+"/html/sub/07_05.jsp";
mAll[7][6][0][0] = "자료실"+"|"+sitePath+"/html/sub/07_06.jsp";
mAll[7][7][0][0] = "Q&amp;A"+"|"+sitePath+"/html/sub/07_07.jsp";

// 1depth
mAll[8][0][0][0] = "이용안내"+"|"+sitePath+"/html/sub/sitemap.jsp";

mAll[8][1][0][0] = "사이트맵"+"|"+sitePath+"/html/sub/sitemap.jsp";
mAll[8][2][0][0] = "개인정보보호정책"+"|"+"http://www.gimhae.go.kr/sub/07/privacy.jsp"+"|"+newWin;
mAll[8][3][0][0] = "저작권정책"+"|"+"http://www.gimhae.go.kr/sub/07/copyright.jsp"+"|"+newWin;
mAll[8][4][0][0] = "이메일수집거부"+"|"+"http://www.gimhae.go.kr/sub/07/nophishing.jsp"+"|"+newWin;
mAll[8][5][0][0] = "경남체육회"+"|"+"http://www.gnsports.or.kr/"+"|"+newWin;


// 공통메뉴
mAll[0][0][0][0] = "홈"+"|"+sitePath+"/";

// [상]사이트 메뉴
mAll[0][1][1][0] = mAll[0][0][0][0]; // Home
mAll[0][1][2][0] = mAll[8][1][0][0]; // Sitemap
//mAll[0][1][3][0] = "외부링크"+"|"+"http://www.external.go.kr/"+"|"+newWin;

// [하]사이트 안내 및 정책
// [우]내부링크면여기서지정


int loopSum=0; // 반복수 테스트

// 공용코드. 메뉴제목,링크주소,자바스크립트,title속성 할당, mList class='on' 활성
for(int i=0; i<d1Max; i++){
	if(mAll[i][0][0][0]==null) continue;
	for(int j=0; j<d2Max; j++){
		if(mAll[i][j][0][0]==null && i!=0) continue;
		for(int k=0; k<d3Max; k++){
			if(mAll[i][j][k][0]==null && i!=0) continue;
			for(int l=0; l<d4Max; l++){
				if(mAll[i][j][k][l]==null && i!=0) continue;
				mTitle[i][j][k][l] = getInfo(mAll[i][j][k][l],0);
				mLink[i][j][k][l] = getInfo(mAll[i][j][k][l],1);
				mClick[i][j][k][l] = getInfo(mAll[i][j][k][l],2);
				mMenu[i][j][k][l] = "<a href='" + mLink[i][j][k][l] + "'" + mClick[i][j][k][l] + ">" + mTitle[i][j][k][l] + "</a>";
				mAnchor[i][j][k][l] = "href='" + mLink[i][j][k][l] + "'" + mClick[i][j][k][l];
				if( (i==d1n && j==0) || (i==d1n && j==d2n && k==0) || (i==d1n && j==d2n && k==d3n && l==0) || (i==d1n && j==d2n && k==d3n && l==d4n) ){
					mList[i][j][k][l] = "<li class='on'><a href='" + mLink[i][j][k][l] + "'" + mClick[i][j][k][l] + ">" + mTitle[i][j][k][l] + "</a></li>";
				}else{
					mList[i][j][k][l] = "<li><a href='" + mLink[i][j][k][l] + "'" + mClick[i][j][k][l] + ">" + mTitle[i][j][k][l] + "</a></li>";
				}
				loopSum++;
			}
		}
	}
}

String d1menu = "";
String d2menu = "";
String d3menu = "";
String d4menu = "";

if(d1n!=0){ d1menu = mTitle[d1n][0][0][0]; }
if(d2n!=0){ d2menu = mTitle[d1n][d2n][0][0]; }
if(d3n!=0){ d3menu = mTitle[d1n][d2n][d3n][0]; }
if(d4n!=0){ d4menu = mTitle[d1n][d2n][d3n][d4n]; }

// title, keywords, description
String titleTag = "",
	pageTitleTemp = "";
if(pageTitle!=null && !pageTitle.equals("")){
	pageTitleTemp = pageTitle;
}else{
	if(d1menu!=null && !d1menu.equals("")) pageTitle = d1menu;
	if(d2menu!=null && !d2menu.equals("")) pageTitle = d2menu;
	if(d3menu!=null && !d3menu.equals("")) pageTitle = d3menu;
	if(d4menu!=null && !d4menu.equals("")) pageTitle = d4menu;
}
if(!pageTitle.equals(""))
	titleTag = pageTitle+" | "+siteName;
else
	titleTag = siteName;

String metaKeywords = "";
metaKeywords = siteName;
if(d1menu!=null && !d1menu.equals("")) metaKeywords = metaKeywords + ", " + d1menu;
if(d2menu!=null && !d2menu.equals("")) metaKeywords = metaKeywords + ", " + d2menu;
if(d3menu!=null && !d3menu.equals("")) metaKeywords = metaKeywords + ", " + d3menu;
if(d4menu!=null && !d4menu.equals("")) metaKeywords = metaKeywords + ", " + d4menu;
if(pageTitleTemp!=null && !pageTitleTemp.equals("")) metaKeywords = metaKeywords + ", " + pageTitleTemp;

// 현재위치 20161102
String locationLink = "<a " + mAnchor[0][0][0][0] + " class='home bsContain' title='홈'>" + mTitle[0][0][0][0] + "</a>\n";
if(d1menu!=null && !d1menu.equals("")){
	//locationLink = locationLink + "<span class='sep bsContain'> &gt; </span>" + "<a " + mAnchor[d1n][0][0][0] + ">" + mTitle[d1n][0][0][0] + "<i class='ic1'></i></a>\n";
	locationLink = locationLink + "<span class='sep bsContain'> &gt; </span>" + "<a href='#lnb1d1' class='toggle slide' title='동일 레벨 메뉴보기'>" + mTitle[d1n][0][0][0] + "<i class='ic1'></i></a>\n";
}
if(d2menu!=null && !d2menu.equals("")){
	//locationLink = locationLink + "<span class='sep bsContain'> &gt; </span>" + "<a " + mAnchor[d1n][d2n][0][0] + ">" + mTitle[d1n][d2n][0][0] + "<i class='ic1'></i></a>\n";
	locationLink = locationLink + "<span class='sep bsContain'> &gt; </span>" + "<a href='#lnb1d2' class='toggle slide' title='동일 레벨 메뉴보기'>" + mTitle[d1n][d2n][0][0] + "<i class='ic1'></i></a>\n";
}
if(d3menu!=null && !d3menu.equals("")){
	//locationLink = locationLink + "<span class='sep bsContain'> &gt; </span>" + "<a " + mAnchor[d1n][d2n][d3n][0] + ">" + mTitle[d1n][d2n][d3n][0] + "<i class='ic1'></i></a>\n";
	//locationLink = locationLink + "<span class='sep bsContain'> &gt; </span>" + "<a href='#lnb1d3' class='toggle slide' title='동일 레벨 메뉴보기'>" + mTitle[d1n][d2n][d3n][0] + "<i class='ic1'></i></a>\n";
}
if(d4menu!=null && !d4menu.equals("")){
	//locationLink = locationLink + "<span class='sep bsContain'> &gt; </span>" + "<a " + mAnchor[d1n][d2n][d3n][d4n] + ">" + mTitle[d1n][d2n][d3n][d4n] + "<i class='ic1'></i></a>\n";
	//locationLink = locationLink + "<span class='sep bsContain'> &gt; </span>" + "<a href='#lnb1d4' class='toggle slide' title='동일 레벨 메뉴보기'>" + mTitle[d1n][d2n][d3n][d4n] + "<i class='ic1'></i></a>\n";
}
locationLink = locationLink + "<span class='sep bsContain'> &gt; </span>" + "\n";

// 본문제목이미지
String d1nn=""; if(d1n<10) d1nn = "0" + d1n; else d1nn = Integer.toString(d1n);
String d2nn=""; if(d2n<10) d2nn = "0" + d2n; else d2nn = Integer.toString(d2n);
String d3nn=""; if(d3n<10) d3nn = "0" + d3n; else d3nn = Integer.toString(d3n);
String d4nn=""; if(d4n<10) d4nn = "0" + d4n; else d4nn = Integer.toString(d4n);

String titleImgSrc = sitePath + "/img/inc/h/h";
if(d1n!=0) titleImgSrc = titleImgSrc + d1nn;
if(d2n!=0) titleImgSrc = titleImgSrc + "_" + d2nn;
if(d3n!=0) titleImgSrc = titleImgSrc + "_" + d3nn;
if(d4n!=0) titleImgSrc = titleImgSrc + "_" + d4nn;
titleImgSrc = titleImgSrc + ".gif";

String titleImgAlt = "";
//if(d4menu!=null && !d4menu.equals("")) titleImgAlt = d4menu;
//else if(d3menu!=null && !d3menu.equals("")) titleImgAlt = d3menu;
if(d2menu!=null && !d2menu.equals("")) titleImgAlt = d2menu;
else titleImgAlt=d1menu;

String titleImg = "";
titleImg = "<img src='"+titleImgSrc+"' alt='"+titleImgAlt+"' />";

String bodyClass = "d";
// 20131210. RegExp 로 1~4차 순번 추출 용이
bodyClass = bodyClass + d1n;
bodyClass = bodyClass + " d" + d1n + "_" + d2n;
bodyClass = bodyClass + " d" + d1n + "_" + d2n + "_" + d3n;
bodyClass = bodyClass + " d" + d1n + "_" + d2n + "_" + d3n + "_" + d4n;
%>