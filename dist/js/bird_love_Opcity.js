require(["jquery"],function(){
	console.log(1);
	$(".design-r").mouseover(function(){
		$(this).fadeTo(100,0.8,function(){
			$(this).fadeTo(100,1);
		})
	})
	$(".story-t-l").mouseover(function(){
		$(this).fadeTo(100,0.8,function(){
			$(this).fadeTo(100,1);
		})
	})
	$(".story-b").mouseover(function(){
		$(this).fadeTo(100,0.8,function(){
			$(this).fadeTo(100,1);
		})
	})
	$(".story-t-r").mouseover(function(){
		$(this).fadeTo(100,0.8,function(){
			$(this).fadeTo(100,1);
		})
	})
	$("#product dl img").mouseover(function(){
		$(this).fadeTo(100,0.8,function(){
			$(this).fadeTo(100,1);
		})
	})
})

