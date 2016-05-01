$(function() {

	var newItem = $('<h1 class="item"></h1>').text("Input");
	$('.addItem').on('click', function() {

			$('.item-box').prepend(newItem);

	});
	

});