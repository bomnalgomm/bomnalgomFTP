$(function(){


	/** ◇◆ Swipe1. 20170726. 20171124. MoonYoungshin.
	* Required: jquery-1.12.4.min.js + jquery.easing.1.3.js
	* DOM 조작 절대 안한다!
	* 키보드 운용 위해서 맨앞 이전, 맨뒤 다음 순환 안한다.
	/----
	* Task.A) make Plugin
	* Task.B) If three or more?
	* Task.C) Out of $this after touchstart )) $(this) 범위 밖이면 원위치 ☆과제) 이 경우 발생안함!
	*/
	// var
	var config = {
		onnum: 1, // 초기활성값
		//oldonnum: 0, // 최초 콘텐츠 없는 상태
		totalnum: 0, // 전체 수
		duration: 0, // 지속 밀리초: 0 이면 즉시 전환. 기본 400 권장.
		interval: 1200000, // 간격 밀리초. 1200000/1000 = 20초
		autoFlag: true, // true: 정지 버튼 클릭 안한 상태, false: 클릭한 상태
		gesture: false, // true: 터치이벤트할당
		threshold: 10 // 터치 무브가 값px 이상이면 동작
	};
	// DOM
	var $this = $('#body');
	$this.$nav = $('#maintabs');
	$this.$navm = $('[class^="m"]', $this.$nav);
	$this.$mView = $this;
	$this.$mCont = $('.swipe-container', $this.$mView);
	$this.$mItem = $('[class^="mainbody"]', $this.$mCont);

	$this.$bstop = $('#maincontrols .mControl .stop', $this);
	$this.$bplay = $('#maincontrols .mControl .play', $this);
	$this.$bprev = $('#maincontrols .mControl .prev', $this);
	$this.$bnext = $('#maincontrols .mControl .next', $this);

	// Initialize
	config.totalnum = $this.$mItem.length;

	$this.$mCont.css({
		position: 'relative',
		width: (100 * config.totalnum) + '%',
		overflow: 'hidden'
	});
	$this.$mItem.css({
		position: 'relative',
		float: 'left',
		width: (100 / config.totalnum) + '%',
		overflow: 'hidden'
	});

	function rotateNum(num){ // 순번계산
		var num = num;
		if(num < 1){
			num = config.totalnum;
		}
		if(num > config.totalnum){
			num = 1;
		}
		return num;
	}

	// Action
	$this.action1 = function(duration){ // 동작
		// duration 인수 있으면 사용하고, 없으면 기본 설정값 사용.
		var now_duration = config.duration;
		if( duration != undefined ){
			now_duration = duration;
		}
		$this.$navm.removeClass('on');
		$this.$navm.eq(config.onnum-1).addClass('on');
		$this.$mCont.animate({
			left: ( (config.onnum - 1) * -100) + '%',
			height: $this.$mItem.eq(config.onnum - 1).outerHeight(true) + 'px' // 현재 패널에 맞게 높이 맞춰준다.
		}, now_duration, 'easeInOutExpo', function() {
		});
	}

	$this.doReset = function(){ // 초기화
		$this.action1();
	}

	$this.doPrev = function(){ // 이전 기능
		config.onnum--;
		config.onnum = rotateNum(config.onnum);
		$this.action1();
	}

	$this.doNext = function(){ // 다음 기능
		config.onnum++;
		config.onnum = rotateNum(config.onnum);
		$this.action1();
	}

	$this.doDirect = function(duration){ // 직접 기능
		$this.action1(duration);
	}

	// 자동순환 //
	$this.autoAction = function(){ // 자동 기능
		if(config.autoFlag){
			$this.doNext();
		}
	}
	$this.timer1 = setInterval($this.autoAction, config.interval); // 자동 가동
	$this.restartInterval = function(timer){ // 자동 재가동
		if(timer){
			clearInterval(timer);
		}
		$this.timer1 = setInterval($this.autoAction, config.interval);
	}

	$this.doStop = function(){ // 정지 기능
		config.autoFlag = false;
		$this.autoOnOff();
		clearInterval($this.timer1);
	}

	$this.doPlay = function(){ // 재생 기능
		config.autoFlag = true;
		$this.autoOnOff();
		$this.restartInterval($this.timer1);
	}

	$this.autoOnOff = function(){ // auto play, stop 상태 표시
		if(config.autoFlag){
			$this.$bplay.removeClass('on').addClass('on');
			$this.$bstop.removeClass('on')
		}else{
			$this.$bplay.removeClass('on')
			$this.$bstop.removeClass('on').addClass('on');
		}
	};
	$this.autoOnOff(); // 첫실행

	$this.$bprev.on('click', function(e){ // 이전 클릭
		e.preventDefault();
		$this.doPrev();
	});

	$this.$bnext.on('click', function(e){ // 다음 클릭
		e.preventDefault();
		$this.doNext();
	});

	$('>.a1', $this.$navm).on('click', function(e){ // 순번 클릭
		e.preventDefault();
		config.onnum = $(this).parent().index() + 1;
		$this.doDirect();
	});

	$this.$bstop.on('click', function(e){ // 정지 클릭
		e.preventDefault();
		$this.doStop();
	});

	$this.$bplay.on('click', function(e){ // 재생 클릭
		e.preventDefault();
		$this.doPlay();
	});

	// 반응형. 사라짐 방지
	$(window).on('load resize', function(e){
		setTimeout(function(){
			$this.doReset();
		}, 50);
	});

	// 접근성
	$this.find('button, a').addBack().on('focusin mouseenter', function(e){ // 오버 20170126
		clearInterval($this.timer1);
	});
	$this.find('button, a').addBack().on('focusout mouseleave', function(e){ // 아웃
		if(config.autoFlag && !$(':focus', $this.$mItem).length){ // 20170126. autoFlag 참이고 단위콘텐츠 내부에 초점 없으면
			$this.restartInterval($this.timer1);
		}
	});

	// 마우스 'click' 하면 'mousedown' 'focusin' 'mouseup' 이벤트도 발생한다.
	// 'focusin' 이벤트에 뷰 영역 밖의 초점을 표시하기 위해 요소 위치를 변경하는 동작을 바인딩한 경우..
	// 'mousedown' 위치와 다른 곳에서 'mouseup' 동작되어 'click'의 기본 동작 (a 요소는 href 로 이동) 이 안된다.
	// 결함 해결 위해.. 'mousedown'에 의한 'focusin'인지 구분하여 분기한다.
	$this.isMousedown = 0;
	$this.$mCont.find('button, a').on('mousedown', function(e){
		$this.isMousedown = 1;
	});
	$this.$mCont.find('button, a').on('focusin', function(e){ // 앵커 포커스시 (키보드 탭, 마우스 다운, 클릭)
		// 키보드 운용시 페이지 계산해서 찾아감.
		config.onnum = $(this).closest('[class^="mainbody"]').index() + 1;
		//console.log(config.onnum);
		//console.log($this.$mCont.css('left'));
		if(!$this.isMousedown){
			$this.doDirect(0); // ☆ animate duration 0 로 해야 어긋나지 않는다!!
		}
	});
	$('window').on('mouseup', function(){
		$this.isMousedown = 0;
	});

	// 제스처. 20170725.
	if(!config.gesture) return false;
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
			threshold: config.threshold // 반응 기준값
		};
		$this.$mView.on('touchstart touchmove touchend mousedown mousemove mouseup', function(e){
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
			if(x < $(this).width() && x > 0 && y < $(this).height() && y > 0){ // $(this) 범위 안이면 동작
				if(e.type == 'touchstart' || e.type == 'mousedown'){
					$this.onGesture = 1;
					o.sx = x; o.sy = y; // 터치 시작 위치 기억
					o.dx = 0; o.dy = 0; // 터치 이동 거리 초기화
					clearInterval($this.timer1); // 자동 정지
				}
				if(e.type == 'touchmove' || e.type == 'mousemove'){
					if($this.onGesture){
						o.dx = x-o.sx; o.dy = y-o.sy; // 터치 이동 거리 계산
						if(Math.abs(o.dx) > Math.abs(o.dy)){ // 가로 이동 크면 동작
							e.preventDefault();
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
						if((o.ex-o.sx) > o.threshold){
							$this.doPrev();
						}
						else if((o.ex-o.sx) < -o.threshold){
							$this.doNext();
						}
						else{
							// 원래 그대로
						}
					}
					$this.restartInterval($this.timer1);
				}
			}else{ // $(this) 범위 밖이면 원위치
				if($this.onGesture){ // 터치중
					// 원래 그대로
					$this.onGesture = 0;
				}
			}
			$('button, a', this).on('click', function(){
				if(Math.abs(o.dx) > 2){ // 2px 초과 드래그하면.. 링크 이동 안함.
					return false;
				}else{
					return;
				}
			});
		});
	})();

	// 20170726. 페이지 접속 시 location.hash 슬라이드로 이동
	//console.log(location.hash);
	$this.$navm.find('>.a1').filter('[href="'+ location.hash +'"]').triggerHandler('click');


}); /* /$(function(){}); */