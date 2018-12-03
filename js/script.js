$('body').ready(function(){
    onloadAnims();
    updateNavIndic('a.selected');
    updateNav();

    $('.nav-item').click(function(){
        $('.main-item').removeClass('main-item');
        $('.nav-item').removeClass('selected');
        $(this).addClass('main-item');
        updateNavIndic('a.main-item');
        if(this.hash.slice(1) != ''){
            var name = '.' + this.hash.slice(1) + '';
            $('html, body').animate({scrollTop: $(name).offset().top - window.innerHeight*0.25*0}, 400);
        }
    });

    $('.nav-item').hover(function(){
        var this_obj = $(this);
        $('.nav-item').removeClass('selected');
        this_obj.addClass('selected');

        updateNavIndic('a.selected');

    });

    $('nav.main').mouseout(function(){
        $('.nav-item').removeClass('selected');
        updateNavIndic('a.main-item');

    });

    $(window).scroll(function(){
        updateNav();
    });

});

$(window).resize(function(){
    updateNavIndic('a.main-item');
});