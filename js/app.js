$(function() {

	var newItem = $('<h1></h1>').text("Input");
	$('.addItem').on('click', function() {

			$('.item-box').prepend(newItem);

	});
	

});