require(["jquery"],function(){
	//header-top我的鸟巢下拉框
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
	
	//产品选项卡
	$("#product-nav li").hover(function(){
		$(this).addClass("active");
		let index=$(this).index();
		$("#product-img dd").eq(index).addClass("show").siblings().removeClass("show")
	},function(){
		$(this).removeClass("active");
	})
	


})







