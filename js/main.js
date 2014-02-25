$(document).ready(function(event){
	$('#pic-2').hide('fast');
	$('#pic-3').hide('fast');

	$('#pic-1').click(function(){
		$('#pic-1').slideUp({'direction': 'left', 'duration': 5000});
		// while(true){
		// 	if(this.children[0].getAttribute("src") === "img/first-slide.png"){
		// 	$(this).animate({width: 'toggle'});
		// 	}break;
		// this.children[0].setAttribute("src", "img/second-slide.png");
		// if(this.children[0].getAttribute("src") === "img/second-slide.png"){
		// 	$(this).animate({width: 'toggle'});
		// }
		// this.children[0].setAttribute("src", "img/third-slide.png");
		// if(this.children[0].getAttribute("src") === "img/third-slide.png"){
		// 	$(this).animate({width: 'toggle'});
		// }this.children[0].setAttribute("src", "img/first-slide.png");
		//$(this).animate({width: 'toggle'});
		 $('#pic-2').show({'direction': 'top', 'duration': 5000});
		//}
		
	});
	$('#pic-2').click(function(){
		$('#pic-2').slideUp({'direction': 'left', 'duration': 5000});
		$('#pic-3').show({'direction': 'top', 'duration': 5000});
		//}
		
	});
	$('#pic-3').click(function(){
		$('#pic-3').slideUp({'direction': 'left', 'duration': 5000});
		$('#pic-1').show({'direction': 'top', 'duration': 5000});
		//}
		
	});

});
