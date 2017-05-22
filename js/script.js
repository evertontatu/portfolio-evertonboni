//MENU NAV
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
        $('#menu').addClass('nav-scroll');
    }

    $(document).scroll(function() {
        var initialPosition = $(document).scrollTop();

        if (initialPosition > '450') {
            $('#menu').addClass('nav-scroll');
        }
        if (initialPosition < '80') {
            $('#menu').removeClass('nav-scroll');
        }
    });
});

//Menu header button burger
$(function(){

	$('.menu-button-burger').click(function(e){
		e.stopPropagation();
		toggleNav();
	});

	$('.main').click(function(e){
		var target = $(e.target);
		if(!target.closest('.menu-list').length && $('.main').hasClass('show-nav')) toggleNav();
	});

	function toggleNav(){
		if($('.main').hasClass('show-nav')){
			$('.main').removeClass('show-nav');
		}
		else{
			$('.main').addClass('show-nav');
		}

    if($('.menu-list').hasClass('show-nav')){
      $('.menu-list').removeClass('show-nav');
    }
    else{
      $('.menu-list').addClass('show-nav');
    }
	}

});

//Carousel
$(document).ready(function() {
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

    if(widthDevice < "1020"){
        $('.parallax-home').css('height', heightDevice);
        $('.parallax-container').css('height', heightDevice);
    }
});

//Parallax
$(function(){
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();

        $('.parallax-text').css({
            'transform' : 'translate(0px, '+ wScroll / 6 +'%)'
        });

        $('.parallax-text-filter').css({
            'transform' : 'translate(0px, '+ wScroll / 6 +'%)'
        });

        $('.parallax-home').css({
            'background-position' : 'center '+ wScroll / - 5 +'px'
        });

        $('.parallax-filter').css({
            'background-position' : 'center '+ wScroll / - 5 +'px'
        });

    });
});

//button filtrar sectionFilter
$(function(){
  $('#btn-filter-mobile').click(function(){
    $('.container-filter').toggle('show-container-filter');
  });
});

//Tabs on product-infos
$('.tabgroup > div').hide();
$('.tabgroup > div:first-of-type').show();
$('.tabs a').click(function(e){
  e.preventDefault();
    var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();
})

//Scrool anchor
$(document).ready(function(){
    $('a.anchor[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-90
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
window.onload = function(){
    id('telefone').onkeyup = function(){
        mascara( this, mtel );
    }
}
