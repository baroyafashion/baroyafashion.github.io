// Navbar 
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => nav.classList.toggle('slide'));

$(document).ready(function(){
	$('body').scrollspy({target: ".navbar", offset: 50});
	$("#myNavbar a").on('click', function(event) {
	  if (this.hash !== "") {
		event.preventDefault();

		var hash = this.hash;
  
		$('html, body').animate({
		  scrollTop: $(hash).offset().top
		}, 800, function(){
	 
		  window.location.hash = hash;
        });
	  }  
    });
    
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        $('.scrol').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                    $('#myNavbar a.active').removeClass('active');
                    $('#myNavbar a').eq(i).addClass('active');
            }
        });
    }).scroll();
});

$(window).scroll(function() {
	let wscroll = $(this).scrollTop();

	if( wscroll > 180 ) {
		$('nav').addClass('muncul');
	} else {
        $('nav').removeClass('muncul');
	}
});

const kotak = document.querySelectorAll('.kotak');
kotak.forEach(function(box) {
	box.addEventListener('click', function(e) {
		box.classList.toggle('ubah');
	});
});


$(window).scroll(function() {
	let winScroll = $(this).scrollTop();

	if(winScroll > 1000 ) {
		$('#gallery .thumnail').each(function(i) {
			setTimeout(function() {
				$('#gallery .thumnail').eq(i).addClass('muncul');
			}, 300 * i);
		});
	}
});