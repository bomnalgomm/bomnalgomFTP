var nowString = "";//현재시각 전역변수
function initNow(){//현재시각 할당
	var now = new Date();
	nowString = now.toString();
	while(nowString.indexOf(" ")!=-1||nowString.indexOf(":")!=-1||nowString.indexOf("+")!=-1){
		nowString = nowString.replace(" ", "");
		nowString = nowString.replace(":", "");
		nowString = nowString.replace("+", "");
	}
}
initNow();//론칭후!!주석처리필수!!

function initExternalRef(){
	//*.css
	document.writeln('<link rel="stylesheet" type="text/css" href="/xe/contents/_Css/layout.css?'+nowString+'">');
	document.writeln('<link rel="stylesheet" type="text/css" href="/xe/contents/_Css/shCoreDefault.css?'+nowString+'">');
	//*.js
	document.writeln('<script type="text/javascript" src="/xe/contents/_Js/jquery-1.8.1.min.js"></'+'script>'); //core
	document.writeln('<script type="text/javascript" src="/xe/contents/_Js/jquery.cs_tab.js"></'+'script>'); //tab
	document.writeln('<script type="text/javascript" src="/xe/contents/_Js/shCore.js"></'+'script>'); 
	document.writeln('<script type="text/javascript" src="/xe/contents/_Js/shAutoloader.js"></'+'script>'); 
	document.writeln('<script type="text/javascript" src="/xe/contents/_Js/shBrushXml.js"></'+'script>'); 
	document.writeln('<script type="text/javascript" src="/xe/contents/_Js/shBrushPlain.js"></'+'script>'); 
	document.writeln('<script type="text/javascript" src="/xe/contents/_Js/shBrushJScript.js"></'+'script>'); 
	document.writeln('<script type="text/javascript" src="/xe/contents/_Js/shBrushCss.js"></'+'script>'); 
	document.writeln('<script type="text/javascript">SyntaxHighlighter.all();</'+'script>'); 
}
initExternalRef();

