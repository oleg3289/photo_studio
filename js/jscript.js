$(document).ready(function(){
	$('.go_to').click(function(){
		var link = $(this).attr('href');
		if ($(link).length != 0){
			$('body,html').animate({scrollTop: $(link).offset().top}, 700)
		}
		return false;
	})
})

setTimeout(function(){
  $('.odometer.01').html(1605);
}, 1000);
setTimeout(function(){
  $('.odometer.02').html(1495);
}, 1000);

jQuery(document).ready(function() {
  jQuery('.grid').magnificPopup({
    delegate: '.item',
    type:'image'
  });

  new WOW().init();

});