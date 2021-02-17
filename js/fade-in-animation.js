// javascrip を無効にしている人に対処する必要がある
window.onload = function() {
    fadeIn();

    $(window).scroll(function() {
        fadeIn();
    });

    function fadeIn() {
        $('.card').each(function() {
            // ターゲットの位置
            var target = $(this).offset().top;
            // スクロール量
            var scroll = $(window).scrollTop();
            // window の高さ
            var height = $(window).height();

            // ターゲットまでスクロールするとフェードイン
            if (scroll > target - height) {
                // .active を付与
                $(this).addClass('active');
            } else {
                $(this).removeClass('active')
            }
        });
    }
};