require(["jquery"],function(){
	console.log(1);
	$(".story-t-r").mouseover(function(){
		$(this).fadeTo(100,0.8,function(){
			$(this).fadeTo(100,1);
		})
	})
})

