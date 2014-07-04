$(document).ready(function(){
	
  $('.concert').on('click', 'button', function() {

	var price = $("<p>Price = $399.99</p>"); //create a new variable called price
	$(this).closest('.concert').children('h3').before(price); 
	$(this).remove(); //remove this button!

	}); 	
}); 