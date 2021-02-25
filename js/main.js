$(function(){

	//bt
	var fageBtn=".sTop , .closeBt";
	var swapBtn=".active";
	
	var cntStart=0; //デバッグの場合はcntStart=0; 通常時は cntStart=2000;
	var contStartFadeSpeed=500; //デバッグの場合はcontStartFadeSpeed=0; 通常時は contStartFadeSpeed=500;
	
	var cntStyleY;
	var styleMaxNum;
	var styleImageH;
	var currentStyleNum;
	var styleFlg=false;
	var sTopFlg=false;
	
	var cookieFlg=false;
	
	//init ==========================================================
	var main=function(){
		
	
		
	}();
	
	function init(){
		//fadeObj(4)
		
		if($("body").attr("id")=="pageIndex"){
			$(".wrap").show();
				if(cookieFlg=="true"){
					$(".fadeInStyle").find("img").hide();
					
				}else{
					$('html').scrollTop(0);
				}
				
				$(".fadeInStyle").fadeTo(contStartFadeSpeed,1,function(){
					$("#preload").delay(cntStart).fadeTo(contStartFadeSpeed,0,function(){
					$("#preload").hide();
				});
	
			});
			
	
			//$("#lookNumInner").find("#imgNum_"+1).show();
			styleFlg=true;
			
			//do not download
			$(".imageOpacity").css("height",$("#lookImage").height());
			
			$("#iconTop").hide();
		};
		
		
	};
	
	//original ==========================================================
	
	$(".closeBt").click(function(){
		var _targetPos=$("#contents_"+$(this).parent().attr("id").split("_")[1]).position().top;
		$(this).parent().slideUp();
		moveTo(_targetPos)
	});
	
	$(".viewMore").click(function(){
		var _targetName="contentsDetail_"+$(this).parent().attr("id").split("_")[1];
		var _target=$("#"+_targetName);
		
		showDetail(_targetName,_target)

	});
	
	function showDetail(_targetName,_target){
		_target.slideDown();
		_target.find(".detailArea").load(_targetName+".html");
		
		console.log(_target.find(".detailArea"))
		moveTo(_target.position().top);
	}
	
	
	$(".imgArea").hover(
	function(){
		$(this).find(".title").fadeTo(250,1);
	},function(){
		$(this).find(".title").fadeTo(250,0);
	}
	)
	
	//bt ==========================================================
	
	 $('a[href^="#"]').click(function(){
        var speed = 1000;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "easeOutQuart");
        return false;
    });

	
		
	function fadeFunc(_target,alpha){
		_target.stop().fadeTo(250,alpha);
	
	};
	
	function swapFunc(_target,_bool){
		if($.browser.className=="msie6" || $.browser.className=="msie7" || $.browser.className=="msie8" || $.browser.className=="msie9"){
				if(_bool) _target.hide();
				else _target.show();
		}else{
			if (_target.is(':animated')) _target.stop();
			if(_bool) _target.fadeTo(250,0);
			else _target.fadeTo(400,1);
		}
	};

	$(fageBtn).hover(function(){
			var _target=$(this);
			fadeFunc(_target,0.7);
		},function(){
			var _target=$(this);
			if($("body").attr("id")=="pageIndex" && !sTopFlg){
				fadeFunc(_target,1);
			}
		});
		
		
	$(swapBtn).hover(function(){
		var _target=$(this);
		swapFunc(_target,false);
	},function(){
		var _target=$(this);
		swapFunc(_target,true);
	});
	
	$(".sTop").bind("click",function(){moveTo(0)});
	
		
	//fadeObj ==========================================================
	function fadeObj(_num){
		
		for(var i=0;i<=_num;i++){
		
			var delayNum=700;
			var _speed=800;
			
			$(".fadeObj_"+i).show();
			$(".fadeObj_"+i).css("opacity",0);
			
			if(_num) delayNum=800;
			$(".fadeObj_"+i).delay(delayNum*i).fadeTo(_speed,1);
			
		}
	}
	
	//lookCtrl ==========================================================

	function lookCtrl(_posY){
		var _dis=_posY-(cntStyleY-200);
		var _nextNum=Math.floor(_dis/(styleImageH))+1;
		
		
		if(_nextNum>=0 || _nextNum<=styleMaxNum){
			if(_nextNum!=currentStyleNum){
			for(var i=0;i<=styleMaxNum;i++){
				$("#lookNumInner").find("#imgNum_"+i).hide();
			}
			
			$("#lookNumInner").find("#imgNum_"+_nextNum).show();
			$("#lookNum").show();
			
			currentStyleNum=_nextNum;
			
			
			}
		}else if(_nextNum>tyleMaxNum){
			$("#lookNum").hide();
		}else{
			$("#lookNum").hide();
		}
			
		//if(_nextNum>styleMaxNum){
			//	$("#lookNum").css("top",450);
			//	$("#lookNum").removeClass("posStyle02").addClass("posStyle01");
			//}else{
			//	$("#lookNum").css("top",_dis+400);
			//	$("#lookNum").removeClass("posStyle01").addClass("posStyle02");
			//}
		
		//$("#lookNums").removeClass("posStyle01").addClass("posStyle02");
	}
	
	

	
	//moveTo ==========================================================
	function moveTo(_num){
		$('html, body').stop().animate({
			scrollTop:_num-$("#header").height()
		}, 1000,"easeOutQuart",function(){});
	};
	
	
	function pageTopCtrl(_num){
		if(_num<=30){
		sTopFlg=false;
		$("#iconTop").hide();
		}else{
		sTopFlg=true;
		$("#iconTop").show();			
		}
	};
	
	//===
	
	function resizeTo(_h){
		//$("#detailSection").css("height",deviceH);
	}
	
		
	//window.load ==========================================================
	
	function onLoadFunc() {
		init();
	};
	
	$(window).bind("load", function(){onLoadFunc()});
	
	
	//Resize ==========================================================
	function onResize(){
		deviceW=$(window).width();
		deviceH=$(window).height();
		resizeTo(deviceH)
	}		
	$(window).bind("resize", function(){onResize()});
	
	
	//scroll ==========================================================
	
	function onScroll(){
		var _posY=getScrollPosition();
		//console.log(_posY);
		
		    if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    //スマートフォン時に実行したいjs
    }else{
	    //if(styleFlg){lookCtrl(_posY);}

    }
				
		pageTopCtrl(_posY);
		
	}	
	function getScrollPosition() {return (document.documentElement.scrollTop || document.body.scrollTop);};
	
	$(window).bind("scroll", function(){onScroll()});
	
	
	
	
	
});