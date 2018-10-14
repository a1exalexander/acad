$(document).ready(function() {
	$('.grid').isotope({
		itemSelector: '.grid__item',
		percentPosition: true,
		masonry: {
			columnWidth: '.grid__sizer',
			horizontalOrder: true,
			gutter: '.grid__gutter'
		}
	});
	$('.section-portfolio__list').on('click', 'button', function(event) {
		event.preventDefault();
		var filterValue = $(this).attr('data-filter');
		$('.grid').isotope({ filter: filterValue });
	});

	$('.header-nav, .footer__list').on('click', 'a', function(event) {
		event.preventDefault();
		let id = $(this).attr('href'),
			coord = $(id).offset().top;
		$('body, html').animate({ scrollTop: coord }, 500);
	});
});
