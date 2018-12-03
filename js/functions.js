function updateNavIndic(e){
    var nis_offset = $(e).offset().left;
    var nis_width = $(e).outerWidth();
    $('.indic').css({
        'left': 'calc(' + nis_offset + 'px + 1.5%)',
        'width': 'calc(' + nis_width + 'px - 3%)'
    });

}

function updateNav(){
    var sections = $('section');
    var ni = $('.nav-item');

    for(var i = 0; i<sections.length; i++){
        var e = sections[i];
        if(window.pageYOffset >= e.offsetTop - $(e).height()*0.9){
            $(e).animate({'opacity': 1, 'top': 0}, 500);
            ni.removeClass('selected');
            ni.removeClass('main-item');
            ni[i].classList.add('main-item', 'selected');
            updateNavIndic('a.main-item');
        }
    }
}

function onloadAnims(){
    $('.home').ready(function(){
        $('.home .illustration').animate({'left': '-40vh'}, 1000, 'swing');
        $('.home .container').animate({'opacity': 1, 'top': '50%'}, 500, 'swing', function(){
            $('.container p').animate({'opacity': 1}, 500).delay(100);
        }).delay(100);
    });
}

function formGo(){
    alert('Success! You are now subscribed to our newsletter.');
}


function playVideo(){
    $('.play').animate({'opacity': 0}, 200, function(){
        $('.play').css('display', 'none');
        $('.video').css('display', 'flex');
        $('.video').animate({'height': window.innerWidth*0.55 + 'px'}, 200, function(){
            $('.video video').css({
                'display': 'block',
                'padding': 0
            });
        });
    });
}