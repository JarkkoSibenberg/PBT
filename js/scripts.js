// Custom scripts

$(document).ready(function(){

	// Homepage slider
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:0,
	    dots:true,
	    items:1,
	    autoplay:true
	});

	// Nav toggle
	var toggle = document.querySelector(".js-menu-toggle");
	var menu = document.querySelector(".js-nav");
	toggle.addEventListener("click",function(){
	  menu.classList.toggle("active")
	});

});





