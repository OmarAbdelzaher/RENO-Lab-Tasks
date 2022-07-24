$(document).ready(function(){

	$('.nav-link').on('click', function() {
		$('.active-link').removeClass('active-link');
		$(this).addClass('active-link');
	});

    $(".recent-portfolio .nav-link").click(function(){
        $("a.active").removeClass("active")
        $(this).addClass("active")

        $(".tab-pane.show").removeClass("show")
        $($(this).attr("data-bs-target")).addClass("show")

        $(".tab-pane.active").removeClass("active")
        $($(this).attr("data-bs-target")).addClass("active")
    })
});

$('input').on('change', function() {
	$('body').toggleClass('blue');
});


var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 3,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
  });