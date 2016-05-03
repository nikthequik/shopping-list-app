var shoppingList = {
	items: []
};
localStorage.setItem(123, shoppingList);
console.log(localStorage.getItem("123"))
var shoppingItem = {
	name: "",
	state: false,
	remove: false
};

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


function kill(item) {
	console.log(this);
	$(item).parent().remove();
	};

function filter () {
	console.log($('#filter'));
	$('.item-box').children('.item').each(function() {
		/*console.log(this.children[0].checked);
		console.log($('#filter').checked);*/
		if (this.children[0].checked === $('#filter')[0].checked) {
			$(this).show();
		}
		else {
			console.log($(this));
			$(this).hide();
		}
	/*else if (!this.children[0].checked) {
		$(this).toggle();
	}*/
	/*if ($(this).children('.check').checked) {
		$(this).hide();
	}*/
});
};