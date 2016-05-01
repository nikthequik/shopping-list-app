$(function() {

	
	$('.addItem').on('click', function() {
		var newItem = $('<h1 class="item"></h1>').text("Input");
		$('.item-box').prepend(newItem);
		});
});