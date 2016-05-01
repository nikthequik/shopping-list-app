$(function() {
	$('.addItem').on('click', function() {
		var input = document.getElementById("inputItem").value;
		console.log(input);
		var newItem = $('<h1 class="item"></h1>').text(input);
		$('.item-box').prepend(newItem);
		document.getElementById("inputItem").value = "";
		});
});