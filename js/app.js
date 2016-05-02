$(function() {

	var itemNum = 1;
	$('.addItem').on('click', function() {
		var input = $('#inputItem').val();
		console.log(input);
		if (input != "" && input != "Enter another item..." && input != "Enter an item...") {
			var newItem = $('<div class="item" id="item' + itemNum + '"><h1></h1></div>').text(input);
			console.log(newItem);
			$('.item-box').prepend(newItem);
			$('#item' + itemNum).append('<button class="remove" onclick="kill(this)">Remove</button>');
			$('#item' + itemNum).prepend('<input class="check" type="checkbox"></input>');
			itemNum += 1;
			$('#inputItem').val("Enter another item...");
		}
	});

	$('#inputItem').on('focus', function() {
		$(this).val("");
	});



});
 var kill = function kill(item) {
		
		console.log(this);
		$(item).parent().remove();
		
	};