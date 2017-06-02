require(["jquery"],function(){
	//下拉框
	$(".nav").css("display","none");
	$(".nav").parent().hover(function(){
		$(this).find(".nav").css("display","block");
	},function(){
		$(this).find(".nav").css("display","none");
	})
	
	//nav选项卡
	$("#nav1").on("mouseover",".bb",function(){
		$(this).parent().next().css("display","block")
		$(this).addClass("active");
		var index=$(this).index()-1;
			$("#content dd").eq(index).addClass("show").siblings().removeClass("show")
	})

	$("#nav1").on("mouseout","li",function(){
			$(this).removeClass("active");
			$(".next-select").hide();
	})
	$(".next-select").on("mouseleave",function(){
		$(this).css("display","none")
	})
	$(".next-select").on("mouseenter",function(){
		$(this).css("display","block")
	})
	//向上
	$("#top").click(function(){		
		$('html,body').animate({scrollTop:0},'slow');
	})
	
	//下拉标签
	let show=true;
	$(".show-l-t ul").on("click","li p span",function(){
		if(show){
			$(this).parent().next().addClass("change")
			show=false;
		}else{
			$(this).parent().next().removeClass("change");
			show=true;
		}	
	})
	
	$('.show-l-c a img').mouseover(function(){
		$(this).animate({width:"216px",height:"192px"},1000)
	})
	$('.show-l-c a img').mouseout(function(){
		$(this).animate({width:"180px",height:"160px"},1000)
	})
})
