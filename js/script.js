//MENU NAV MOBILE
$(function(){

	$('.menu-mobile').click(function(e) {
		e.stopPropagation();
		toggleNav();
	});

	$('body, .navMobile > ul').click(function(e){
		var target = $(e.target);
		if($('#nav ul').hasClass('navMobile')) toggleNav();
	});

	function toggleNav(){
		if($('#nav ul').hasClass('navMobile')){
			$('#nav ul').removeClass('navMobile');
		}else{
			$('#nav ul').addClass('navMobile');
		}
	}

});

//Menu scroll
$(function() {
    var initialPosition = $(document).scrollTop();
    if (initialPosition > '450') {
        $('.logoMenu').addClass('bg-black');
				$('.menu').removeClass('bg-black');
    }

		$(document).scroll(function() {
				var initialPosition = $(document).scrollTop();

				if (initialPosition > '450') {
					$('.logoMenu').addClass('bg-black');
					$('.menu').addClass('bg-black');
				}
				if (initialPosition < '450') {
					$('.logoMenu').removeClass('bg-black');
					$('.menu').removeClass('bg-black');
				}
		});
});

//Carousel
$(function() {
  var owl = $("#slider-carousel");
  owl.owlCarousel({
    items: 3,
    itemsDesktop: [1000, 3],
    itemsDesktopSmall: [900, 2],
    itemsTablet: [600, 1],
    itemsMobile: false,
    pagination: false
  });
  $(".next").click(function() {
    owl.trigger('owl.next');
  })
  $(".prev").click(function() {
    owl.trigger('owl.prev');
  })
});

//Height device
$(function() {
    var heightDevice = $(window).height();
    var widthDevice = $(window).width();

		$('.parallax-home').css('height', heightDevice);

    if(widthDevice < "1020"){
        $('.parallax-home').css('height', heightDevice);
        $('.parallax-container').css('height', heightDevice);
    }
});

//Parallax
$(function(){
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();

        $('.parallax-home').css({
            'background-position' : 'center '+ wScroll / - 5 +'px'
        });

				$('.text-home').css({
            'transform' : 'translate(0px,'+ wScroll / + 6 +'%)'
        });

    });
});

//Scrool anchor
$(function(){
    $('a.anchor[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-50
        }, 800, 'swing', function () {
            window.location.hash = target;
        });
    });
});

//Mask form
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,"");
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2");
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");
    return v;
}
function id( el ){
    return document.getElementById( el );
}
