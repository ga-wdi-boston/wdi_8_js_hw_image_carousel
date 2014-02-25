
$(document).ready(function() {
	// Set up the listeners
	$(this).click(rotate);
});

rotate = function() {
	a=$('#images')
	a.animate({"left": "-=300px"})
};