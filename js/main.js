$(function(){

	$(".image_area").hover(
	function(){
		$(this).find(".overlay").fadeTo(250,1);
	},function(){
		$(this).find(".overlay").fadeTo(250,0);
	}
	)

});

window.onload = function(){
    fadeIn();

    $(window).scroll(function(){
        fadeIn();
    });

    function fadeIn(){
        $('.card').each(function(){
            var target = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var height = $(window).height();
            if(scroll > target - height){
                $(this).addClass('active');
            }else{
                $(this).removeClass('active')
            }
        });
    }
};