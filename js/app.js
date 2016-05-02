$(function() {

	var itemNum = 1;
	$('.addItem').on('click', function() {
		var input = document.getElementById("inputItem").value;
		var newItem = $('<div class="item" id="item' + itemNum + '"><h1></h1></div>').text(input);
		console.log(newItem);
		$('.item-box').prepend(newItem);
		$('#item' + itemNum).append('<button id="remove">Remove</button>');
		itemNum += 1;
		document.getElementById("inputItem").value = "Enter another item...";
	});

	$('#inputItem').on('focus', function() {
		document.getElementById("inputItem").value = "";
	});


	$('#remove').on('click', (function () {
		$(this).parent().remove();
	}));
	


});