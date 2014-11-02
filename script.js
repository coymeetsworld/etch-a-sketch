$(document).ready(function() {

	//$("body").append("<p>Hello World!</p>");
	createGrid();	

	$('.cell').on('mouseover', function() {
		$(this).addClass('hovered');
		
	});


	$('#button-clear').on('click', function() {
		$('.container').find('.cell').removeClass('hovered');

	});	

});


/* Only call with DOM is ready */
function createGrid() {
	
	for(var i = 0; i < 16; i++) {
		$('.container').append("<div class='row'>");
		for(var j = 0; j < 16; j++) {
			$('.container').append("<div class='cell'></div>");
		}
		$('.container').append("</div>"); // For div class row
		
	}
	

}
