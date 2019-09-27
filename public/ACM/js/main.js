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
