function toggleSlide(direction) {
	var element = document.getElementsByClassName('hand');
			active = 	getVisible(element);
			element[active].style.display = "none";
			if(!direction) {
				var show = prev(active, element.length);
			} else {
				var show = next(active, element.length);
			}
			element[show].style.display = "block";
};

function getVisible(element) {
	var active = -1;
	for(var i = 0; i < element.length; i = i + 1) {
		if(element[i].style.display === "block") {
			active = i;
		}
		return active;
	};

function prev(number, array) {
	if(number == 0) {
		return array - 1;
	}	else {
			return number - 1;
		}
};

function next(number, array) {
	if(number == array - 1) {
		return 0;
	} else {
			return number + 1;
	}
};

}