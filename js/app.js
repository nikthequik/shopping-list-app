$(function() {

	var itemNum = 1;
	$('.addItem').on('click', function() {
		var input = document.getElementById("inputItem").value;
		var newItem = $('<h1 class="item" id="item' + itemNum + '"></h1><button id="remove" onclick="kill()"></button>').text(input);
		$('.item-box').prepend(newItem);
		itemNum += 1;
		document.getElementById("inputItem").value = "Enter another item...";
	});

	$('#inputItem').on('focus', function() {
		document.getElementById("inputItem").value = "";
	});

	$('.item').on('click')

	


});