// window.onload = function () {
//     document.body.classList.add('loaded');
// }

$(window).on('load', function () {
$('.pre_loader').fadeOut().end().delay(200).fadeOut('slow');
});







(function () {

    const cropElement = document.querySelectorAll('.cutter'), // выбор элементов 
          size = 515                                             // кол-во символов 
          endCharacter = '   . . .';                                  // окончание 

    cropElement.forEach(el => {
        let text = el.innerHTML;

        if (el.innerHTML.length > size) {
            text = text.substr(0, size);
            el.innerHTML = text + endCharacter;
        }
    });

}());




$('body').prepend('<a href="#" class="back-to-top" alt="back"> </a>');


var amountScrolled = 100;
$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
		$('.hidden').fadeIn('slow');
		// $('.lang').fadeOut('slow');
		
		
	} else {
		$('a.back-to-top').fadeOut('slow');
		$('.hidden').fadeOut('slow');
		// $('.lang').fadeIn('slow');
		
	}
});

$('a.back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 1000);
	return false;
});


//     var $win = $(window),
//     $fixed = $('.fixed'),
//     limit = 20;

// function tgl (state) {
//     $fixed.toggleClass('hidden', state);
// }

// $win.on('scroll', function () {
//     var top = $win.scrollTop();
    
//     if (top < limit) {
//         tgl(true);
//     } else {
//         tgl(false);
//     }
// });

