//var FB_appAccessToken = "CAAHMG5zCZCNwBAPIlMVZAbfZBP3bLUFOvT5AFzUVkyRfAfsT3DwZCHcEZCwN4TiiNQffsKmWdMbfmT734clA1CcE0hxMD0N1eUxZChUru1o2bFPlhOgeYySkLH4BltkmP3SmkGm6VVh1SFukyZCDf8x7DXh1mKDaz7b8KxDN7McmjK0x12HJUlh";
//var FB_appAccessToken = "CAAHMG5zCZCNwBAG1VM6JfSNHoyn2EtDZCo5Rxntvh3JUpGlKqm3TM5f4pukVx98petXHl4b5lxMfR5wN91ycwFE9qjGwPWosuZCQsZBT4is7ShFIlWlAFq5sbZCu02w6WO6ZBSMkZCRZBylwKpYOuZAFLEynZASgNMIwjD7GXRHupJEyXsCjzFBYvp";
//var FB_appAccessToken = "CAAOZBkZCkZC5IgBAOolR5KO46FeiVycbk7FUJGuSQY1Fae6rO7A1ZAdGUZA4hlWaWwuMZAp3XFBiZBlSMm0jdE16aaYkJnahfWMIbLXhy8k7zDM97ODZB643fH5wGM9NljDzDzZA997KK31XZA7MsGK6xJHZCJBPd7QHkGZCFLtun8QneA0ZC9KcJaDJjOmJDDhBf5NIZD";
var FB_appAccessToken = "EAARe23gpglsBALvNGEKMxa0AeKdH11rqn0kfpZAZAjQGbGNLd9TqD4lf72v6ZAZA6UiepUTyc17KdZAqZAFz4o4pWkF5UtWAFbZBPL77mmfeaIbTM6RnniC7p4YmNZCpHMRzNf4CyiLvzx8pzPqVzsfu1iZArSGu03X4ZD";
var FB_keys = {
	//app_id:"1905919402967583",
	//app_id:"1053967681315976",
	app_id:"1332381673440161",
	app_secret:"fab16e7d53ee364a718b2fdb4948f68c",
	client_tk :"7fbcc708a242412d61634512890f9bd6",
	acc_tk:"",
	acc_tk_long:""
	};
function callFBAPI(target_id){

	FB.api(
	"/smartBDU/posts?fields=id,message,link,picture,message_tags,name,is_hidden,created_time,description",
	
	{access_token : FB_appAccessToken},


    function (response) {

      if (response && !response.error) {
        /* handle the result */

		var toEl  =$("#"+target_id+" ul");
		var rst = response.data;
		var row = 'odd';
		for(var i=0;i<rst.length;i++){
			var el_str =""; var a_close ="";

			if(rst[i].link!=undefined){
				el_str +="<a href='"+rst[i].link+"' target='_blank'>";
				a_close = "</a>";
			}
			if(rst[i].picture!=undefined){
				el_str +="<img src='" +rst[i].picture+"' alt='"+rst[i].name+"'/> ";
			}
			if(rst[i].message!=undefined){
				if((rst[i].message).legth >70){
					el_str+=(rst[i].message).substring(0,70);
				}else if((rst[i].message).legth >30){
					el_str+=(rst[i].message);
				}else{
					el_str+=(rst[i].message)+"<br/><br/>";
				}
				
			}else{
				el_str+="내용없음";
			}
			if (row == 'odd') {
				row = 'even';
			} else {
				row = 'odd';
			}	
			toEl.append("<li class='rssRow "+row+" sns_box col'><div class='sns-cont-wrap'><p class='pcont'>"+el_str+a_close+"</p><div class='date'>"+(rst[i].created_time).substring(0,10)+"</div></div></li>");
			
		}
		

		//alert(response);
      }else{

	//	  alert(response.error.message);
	  }
    }
);
}

function setFacebook(obj_id){
	
	$.ajaxSetup({ cache: true });
	$.getScript('//connect.facebook.net/en_US/sdk.js', function(){
		FB.init({
		  appId: FB_keys.app_id,
		  version: 'v2.4' // or v2.0, v2.1, v2.0
		});     
		
		callFBAPI(obj_id);
		//FB.getLoginStatus(updateStatusCallback);
	  });

}


$(document).ready(function(){
	//callFBAPI();


});
