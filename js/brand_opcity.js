require(["jquery"],function(){
	console.log(1);
	$(".story-t-l").mouseover(function(){
		$(this).fadeTo(100,0.8,function(){
			$(this).fadeTo(100,1);
		})
	})
})

