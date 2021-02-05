$(function(){

	/** ◇◆ Gesture1. v.20151116. r.20160309. r.20170324. @MoonYoungShin.
	* 20170324. 파일명 변경. jq.gesture1.js 를 script_gesture1.js 로
	* 20160309. left 를 margin-left 로 수정. (키보드 운용 고도화 하다보니..)
	* 20160309. 내용물이 뷰보다 길 때 터치 이동 동작 결함 해결.
	* 현재위치 1줄 배치하고 뷰 영역 넘칠 때 터치슬라이드 동작으로 UX 고도화.
	* !!required: jquery-1.8.0.min.js + jquery.easing.1.3.js
	/----
	* Task.A) $(this) 범위 밖(Out of $this after touchstart) 과 touchcancel 차이? 고도화!
	* Task.A) to make Plugin
	*/

	var $this = $('#location1');
	var vc=[], v={};
	// DOM
	$this.$mView = $this;
	$this.$mCont = $('>.breadcrumb', $this.$mView); // 뷰
	$this.$mContCs = $('>.cont', $this.$mCont); // 내용물
	//$this.$prev = $('.mControl>.b1prev', $this); // 이전
	//$this.$next = $('.mControl>.b1next', $this); // 다음
	//$this.$navm = $('.mNav>.m', $this); // 순번
	// 초기화
	$this.$mCont.css({
		//left: '0' // 20160309)
		margin: '0'
	});

	// Gesture
	($this.gesture1 = function(){
		var o = {
			sx: 0, // start x
			sy: 0, // start y
			dx: 0, // distance x
			dy: 0, // distance y
			ex: 0, // end x
			ey: 0, // end y
			sl: 0, // start left
			st: 0, // start top
			range: 0, // 뷰-내용물
			threshold: 0 // 50 // 임계값
		};

		$this.on('touchstart touchmove touchend touchcancel mousedown mousemove mouseup', function(e){

			o.range = $this.$mView.width() - $this.$mContCs.width(); // 내용물이 크면 마이너스값
			//if(o.range >= 0) return false; // 내용물이 작을 때 터치 동작 안하려고 .. return false 하면 안된다! 클릭 동작도 안된다!

			// $(this) 좌상단에서의 터치 이벤트 상대 위치 x, y
			$this.offsetLeft = ($(this).offset().left < 0)? 0: $(this).offset().left; // 뷰가 화면 보다 클 때 보정
			$this.offsetTop = ($(this).offset().top < 0)? 0: $(this).offset().top;
			if(e.originalEvent.touches || e.originalEvent.changedTouches){ // 터치 있으면
				var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]; // 싱글 터치
				touch.length = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
			}else{
				var e = e || window.event;
			}
			var x = (e.pageX || touch.pageX) - $this.offsetLeft;
			var y = (e.pageY || touch.pageY) - $this.offsetTop;
			if(e.type == 'touchstart' || e.type == 'mousedown'){
				$this.onGesture = 1;
				o.sx = x; o.sy = y; // 터치 시작 위치 기억
				o.dx = 0; o.dy = 0; // 터치 이동 거리 초기화
				// mCont 가 [1][2][3] 나열되어 있을 때와 동일하게 동작하고.. 이전, 다음 동작 시에는  mContC 로 계산할거다.
				//o.sl = parseInt($this.$mCont.css('left')); // 20160309)
				o.sl = parseInt($this.$mCont.css('margin-left'));
				//console.log(o.sl);
				clearInterval($this.timer1); // 자동 정지
			}
			if(e.type == 'touchmove' || e.type == 'mousemove'){
				if($this.onGesture){
					o.dx = x-o.sx; o.dy = y-o.sy; // 터치 이동 거리 계산
					if(Math.abs(o.dx) > Math.abs(o.dy)){ // 가로 이동 크면 동작
						e.preventDefault();
						//$this.$mCont.css({'left': (o.sl + o.dx) + 'px'}); // 터치 드래그 거리만큼 mCont 이동
						$this.$mCont.stop().animate({ // 부드럽게 이동
							//'left': (o.sl + o.dx) + 'px' // 20160309)
							'margin-left': (o.sl + o.dx) + 'px'
						}, 200, 'easeOutQuad', function(){});
					}else{
						$this.onGesture = 0;
					}
				}
			}
			if(e.type == 'touchend' || e.type == 'mouseup'){
				//e.preventDefault(); // 20150414. a 링크 위해 주석처리.
				$this.onGesture = 0;
				o.ex = x; o.ey = y; // 터치 종료 위치 기억
				if(Math.abs(o.dx) > Math.abs(o.dy)){ // 가로 이동 크면 동작
					// mContC 를 이전 다음 동작 시 이동한 만큼 보정할거고.. (NAN이면0으로계산)
					//$this.offsetXdrag = parseInt($this.$mCont.css('left')) || 0; // 20160309)
					$this.offsetXdrag = parseInt($this.$mCont.css('margin-left')) || 0;
					//if((o.ex-o.sx) > o.threshold){ // 임계값 초과면
					//	$this.prevAct();
					//} else if((o.ex-o.sx) < -o.threshold){ // 임계값 초과면
					//	$this.nextAct();
					//} else{ // 임계값 이하면
						$this.action1('slide'); // 동작 실행
					//}
				}
			}
			if(e.type == 'touchcancel'){ // http://caniuse.com/#search=touchcancel
				//alert('touchcancel');
				if($this.onGesture){ // 터치중
					$this.action1('slide'); // 동작 실행
					$this.onGesture = 0;
				}
			}

			$('a', this).click(function(){
				if(Math.abs(o.dx) > 2){ // 2px 초과 드래그하면.. 링크 이동 안함.
					return false;
				}else{
					return;
				}
			});

			// 20160309. 터치 드래그 이동과 원위치.
			// 20150609. (o.sl) 값 받으려면 즉시함수 안으로 이동.
			$this.action1 = function(effect){
				//alert(o.sl + o.dx);
				//console.log(o.sl+'  '+o.dx+'  '+ (o.sl + o.dx) +'  '+o.range+'  '+e.pageX);
				o.sl = o.sl + o.dx; // 20160309 ☆ 시작 좌값 + 이동 거리값
				if( o.sl > 0 ){ // 맨앞보다 우측으로 보내면
					o.sl = 0; // 맨앞으로
				}
				if( o.sl < o.range ){ // 맨뒤보다 좌측으로 보내면
					if( o.range >= 0 ){ // 내용물이 작으면 맨뒤로 보내면 안되기에..
						o.sl = 0; // 맨앞으로
					}else{
						o.sl = o.range; // 맨뒤로				
					}
				}
				switch(effect){
				case 'slide':
					$this.$mCont.stop().animate({
						//'left': (o.sl) + 'px' // 20160309)
						'margin-left': (o.sl) + 'px'
					}, 200, 'easeOutQuad', function(){});
					break;
				default:
					$this.$mCont.stop().css({
						//'left': (o.sl) + 'px' // 20160309)
						'margin-left': (o.sl) + 'px'
					});
				}
			}

			// Android 4.1.2 Webkit 534.30 (GalaxyS2,..) 는 touch 와 mouse 이벤트 동시에 발생하고,
			if(/touch/.test(e.type)){
				//$('.test').html($this.onGesture + "  " + /touch/.test(e.type) + "  " + e.type + "  " + Math.abs(o.dx)).css({'border':'1px solid #f00'}); // 점검
			}else{ // Desktop Web 은 mouse 이벤트만 발생한다.
				//$('.test').html($this.onGesture + "  " + /touch/.test(e.type) + "  " + e.type + "  " + Math.abs(o.dx)).css({'background':'#0f0'}); // 점검
				return false; // 그래서 여기서만 해줘야지.. 올바로 동작
			}

		});
	})();

}); /* /$(function(){}); */