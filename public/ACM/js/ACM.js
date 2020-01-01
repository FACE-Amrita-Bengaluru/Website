//Owl Carousel

$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	nav: false,
	autoplay: 1000,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 2
		},
		1000: {
			items: 3
		}
	}
});

// Hide navbar on clicking links

$('.navbar-nav>li>a').on('click', function() {
	$('.navbar-collapse').collapse('hide');
});

$(window).scroll(function() {
	$('.sig').each(function() {
		if (isScrolledIntoView($(this))) {
			$(this)
				.children('.head')
				.css('display', 'block');
		} else {
			$(this)
				.children('.head')
				.css('display', 'none');
		}
	});
});

function isScrolledIntoView(elem) {
	var $elem = $(elem);
	var $window = $(window);

	var docViewTop = $window.scrollTop();
	var docViewBottom = docViewTop + $window.height();

	var elemTop = $elem.offset().top;
	var elemBottom = elemTop + $elem.height();

	return elemBottom <= docViewBottom && elemTop >= docViewTop;
}


//Typewriter
var app = document.getElementById('motto-text');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Our motto is to learn')
    .pauseFor(2500)
    .deleteChars(5)
    .typeString('unlearn')
	.pauseFor(2500)
	.deleteChars(7)
    .typeString('relearn...')
    .pauseFor(2500)
	.start();
	

	/**
 * Listen to scroll to change header opacity class
 */
function checkScroll(){
    var startY = $('#home').height()*0.8; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}