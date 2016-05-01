$(function() {
	$('.addItem').on('click', function() {
		var input = document.getElementById("inputItem").value;
		var newItem = $('<h1 class="item"></h1>').text(input);
		$('.item-box').prepend(newItem);
		document.getElementById("inputItem").value = "Enter another item...";
		});
	$('#inputItem').on('focus', function() {
		document.getElementById("inputItem").value = "";
	});
});