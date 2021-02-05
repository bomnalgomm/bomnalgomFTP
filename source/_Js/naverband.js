function toggleSlide(slideObj, target, direction, slideThumb, i, slideObj_sub, slideObj_target){
  if(!direction){direction = "right"}
  slideObj.each(function(index, value){

	if(target == value){
	  $(value).show("slide", { direction:  direction}, 400);
	}
	else{
	  if(direction == "right"){

		    hide_direction = "left";
	      $(value).hide("slide", { direction:  hide_direction}, 400);

	  }
	  else{

      hide_direction = "right";
	      $(value).hide("slide", { direction:  hide_direction}, 400);

	  }
	}
  });
  slideObj_sub.each(function(index, value){
    if(slideObj_target == value){
	  $(value).show("slide", { direction:  direction}, 400);
	}
    else{
      if(direction == "right"){ hide_direction = "left"; }
      else{hide_direction = "right";}
      $(value).hide("slide", { direction:  hide_direction}, 400);
    }
  });
  slideThumb.each(function(index, value){
    $(value).removeClass("on");
  });
  $(slideThumb[i]).addClass("on");
}

$(document).ready(function(){
  var i = 0;
  var children = $("#toggle_slide").children();
  var children_sub = $("#toggle_slide_sub").children();
  var slideThumb = $("#slide_thumb a");
  var slideThumbChild = $("#slide_thumb a").children();
  var direction = "right";
  var refreshVisual;
  var eventQueue = new Array();

  $("a").each(function(index, value){
    $(value).attr("rel", "external");
  });

  $(children[i]).show();
  $(children_sub[i]).show();
  $(slideThumb[i]).addClass("on");

  refreshVisual = setInterval(function(){
    i = i + 1;
    if(i >= children.length){ i = 0; }
    toggleSlide(children, children[i], direction, slideThumb, i, children_sub, children_sub[i]);
  }, slideSpeed);

  $("#slide_nav a").click(function(event) {
    event.preventDefault()
    clearInterval(refreshVisual);
    var target = event.target;
    var direction, i;
    children.each(function(index, value){
      if($(value).css("display") != "none"){ i = index; }
    });
    children_sub.each(function(index, value){
      if($(value).css("display") != "none"){ i = index; }
    });
    if($(target).hasClass("nav_next")){
      direction = "right";
      i = i + 1;
    }else {
      direction = "left";
      i = i - 1;
    }
    if(i >= children.length){ i = 0; }
    if(i < 0){ i = children.length-1; }
    toggleSlide(children, children[i], direction, slideThumb, i, children_sub, children_sub[i]);
  });


  $("#slide_nav2 a").click(function(event) {
    event.preventDefault()
    clearInterval(refreshVisual);
    var target = event.target;
    var direction, i;
    children.each(function(index, value){
      if($(value).css("display") != "none"){ i = index; }
    });
    children_sub.each(function(index, value){
      if($(value).css("display") != "none"){ i = index; }
    });
    if($(target).hasClass("nav_next")){
      direction = "right";
      i = i + 1;
    }else {
      direction = "left";
      i = i - 1;
    }
    if(i >= children.length){ i = 0; }
    if(i < 0){ i = children.length-1; }
    toggleSlide(children, children[i], direction, slideThumb, i, children_sub, children_sub[i]);
  });

  $("#slide_thumb a").click(function(event) {
    event.preventDefault()
    clearInterval(refreshVisual);
    var target = event.target;
    var target_index, direction, i;
	var targetSrc = $(target).children("img").attr("alt") ? $(target).children("img").attr("alt") : $(target).attr("alt");
    slideThumbChild.each(function(index, value){
      if(targetSrc == $(value).attr("alt")){ target_index = index; }
    });
    children.each(function(index, value){
      if($(value).css("display") != "none"){ i = index; }
    });
    children_sub.each(function(index, value){
      if($(value).css("display") != "none"){ i = index; }
    });
    if(target_index <= i){ direction = "left"; }
    else{ direction = "right"; }
    toggleSlide(children, children[target_index], direction, slideThumb, target_index, children_sub, children_sub[target_index]);
  });

  $('#toggle_slide').bind('swipeleft', function(event) {
    event.preventDefault()
    clearInterval(refreshVisual);
    var target_index, direction, i;
    children.each(function(index, value){
      if($(value).css("display") != "none"){ i = index; }
    });
    children_sub.each(function(index, value){
      if($(value).css("display") != "none"){ i = index; }
    });
    i = i+1;
    direction = "right";
    if(i >= children.length){ i = 0; }
    if(i < 0){ i = children.length-1; }
    toggleSlide(children, children[i], direction, slideThumb, i, children_sub, children_sub[i]);
  });

  $('#toggle_slide').bind('swiperight', function(event) {
    event.preventDefault()
    clearInterval(refreshVisual);
    var target_index, direction, i;
    children.each(function(index, value){
      if($(value).css("display") != "none"){ i = index; }
    });
    children_sub.each(function(index, value){
      if($(value).css("display") != "none"){ i = index; }
    });
    i = i-1;
    direction = "left";
    if(i >= children.length){ i = 0; }
    if(i < 0){ i = children.length-1; }
    toggleSlide(children, children[i], direction, slideThumb, i, children_sub, children_sub[i]);
  });

});
