$(function(){
	let burger = $("#burger");
	let navInner = $("#navInner");
	let body=$("#body");
	burger.on("click", function(){
		navInner.toggleClass("show__nav__inner");
		body.toggleClass("hidden");
	});


	/*let nav =  $("#nav");
	let headerInner = $("#headerInner");
	let headerInnerHeight=headerInner.innerHeight();
	let scrollPos;

	$(window).on("scroll  resize", function(){
		headerInnerHeight = headerInner.innerHeight();
		scrollPos = $(this).scrollTop();

		if(scrollPos > headerInnerHeight){
				nav.addClass("fixed");
		}
		else {
			nav.removeClass("fixed");
		}
	}); */

	let home = $("#home");


	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset= $(elementId).offset().top; 
		
		$("html, body").animate({
			scrollTop: elementOffset-60
		}, 700);


		navInner.removeClass("show__nav__inner");
		body.removeClass("hidden");
	});



	$("#statisticsBtn").on("click", function(event){
		event.preventDefault();
		$("#statisticsText").toggleClass("show");
	});


	$("#emailBtn").on("click", function(event){
		event.preventDefault();
		$("#emailText").toggleClass("show");
	});


	$("#teamBtn").on("click", function(event){
		event.preventDefault();
		$("#teamText").toggleClass("show");
	});


	$("#settingsBtn").on("click", function(event){
		event.preventDefault();
		$("#settingsText").toggleClass("show");
	});


	$("#feedBtn").on("click", function(event){
		event.preventDefault();
		$("#feedText").toggleClass("show");
	});


	$('#teamsSlider').slick({
	  centerMode: true,
	  centerPadding: '440px',
	  slidesToShow: 1,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	let team0 = $('#team0');
	let team1 = $('#team1');
	let team2 = $('#team2');

	let teamImg0= $('#teamImg0');
	let teamImg1= $('#teamImg1');
	let teamImg2= $('#teamImg2');

	$(document).ready(function() {
	     teamImg1.click();
	});


	teamImg0.on("click", function(){
		team0.addClass("show__about__team");
		teamImg0.addClass("click__img");

		team1.removeClass("show__about__team");
		teamImg1.removeClass("click__img");

		team2.removeClass("show__about__team");
		teamImg2.removeClass("click__img");
	});

	teamImg1.on("click", function(){
		team1.addClass("show__about__team");
		teamImg1.addClass("click__img");

		team0.removeClass("show__about__team");
		teamImg0.removeClass("click__img");

		team2.removeClass("show__about__team");
		teamImg2.removeClass("click__img");
	});

	teamImg2.on("click", function(){
		team2.addClass("show__about__team");
		teamImg2.addClass("click__img");

		team1.removeClass("show__about__team");
		teamImg1.removeClass("click__img");

		team0.removeClass("show__about__team");
		teamImg0.removeClass("click__img");
	});
});